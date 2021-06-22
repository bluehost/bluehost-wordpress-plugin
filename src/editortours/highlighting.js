import { select, dispatch } from '@wordpress/data';
import { Notice, Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { PluginPrePublishPanel } from '@wordpress/edit-post';
import { replace, filter } from 'lodash';
import { _n, __, sprintf } from '@wordpress/i18n';
import { Fragment } from 'react';
// Key namespace for Block Editor store
const EDITOR_STORE = 'core/block-editor';

/**
 * Setup caretIn and caretOut events
 */
export const setupCaretEvents = () => {
    const isIE = window.navigator.userAgent.indexOf( 'Trident' ) !== -1;
    if ( isIE ) return; // IE doesnt support getSelection()
    document.addEventListener('selectionchange', evt => {
        let node = (document.getSelection().baseNode||0).parentNode;
        let old = document.lastNode;
        if (node === old) return;
        if (old) old.dispatchEvent(new Event('caretOut'));
        (document.lastNode = node).dispatchEvent(new Event('caretIn'));
    })
}

/**
 * When a user clicks or keyboard-navigates into a placeholder, remove the highlight and span wrapper.
 * @param {*} evt 
 */
const unhighlightSinglePlaceholder = (evt) => {
    const id = evt.target.id;
    let styleElement = document.getElementById('style-' + id);
    if ( null === styleElement ) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'style-' + id;
        styleElement.innerText = 'span#' + id + '.nf-placeholder.nf-highlight { background-color: inherit; color: inherit; }';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
};

const rehighlightSinglePlaceholder = (id) => {
    const styleTag = document.getElementById('style-' + id);
    if ( null !== styleTag ) {
        styleTag.parentNode.removeChild(styleTag);
    }
}

const detectPlaceholders = () => {
    let placeholdersDetected = 0;
    const blocks = select('core/block-editor').getBlocks();
    if ( blocks.length ) {
        blocks.forEach( block => {
            switch(block.name) {
                case 'core/paragraph':
                    if ( block.attributes.content.includes('nf-placeholder nf-highlight') ) {
                        let blockPlaceholders = block.attributes.content.split('nf-placeholder').length - 1;
                        placeholdersDetected = placeholdersDetected + blockPlaceholders;
                    }
                    break;
                case 'core/heading':
                    if ('undefined' !== typeof block.attributes.className && block.attributes.className.includes('nf-placeholder nf-highlight') ) {
                        placeholdersDetected = placeholdersDetected + 1;
                    }
                    break;
            }
        })
    }

    return placeholdersDetected;
}

/**
 * Helper to scrub placeholders from Block document.
 * 
 * By default, only removes changed placeholders, returning array of IDs that haven't changed since document load.
 * 
 * Setting all = true will scrub everything found regardless.
 * 
 * A return of null means the method couldn't find Blocks in the editor store.
 * 
 * @param {bool} all 
 * @returns {true|array|null}
 */
const scrubPlaceholders = ( all = false ) => {
    const blocks = select('core/block-editor').getBlocks();
    let unedited = [];
    if ( blocks.length ) {
        const parser = new DOMParser();
        blocks.forEach( block => {
            switch(block.name) {
                case 'core/paragraph':
                    let blockDOM = parser.parseFromString(block.attributes.content, 'text/html');
                    let blockPlaceholders = blockDOM.querySelectorAll('.nf-placeholder');
                    if ( blockPlaceholders.length ) {
                        Array.from(blockPlaceholders).forEach( placeholder => {
                            if ( placeholder.innerText !== window.nfPlaceholders[placeholder.id] || all ) {
                                rehighlightSinglePlaceholder(placeholder.id);
                                dispatch('core/block-editor').updateBlock(
                                    block.clientId,
                                    {
                                        attributes: {
                                            content: replace(
                                                block.attributes.content,
                                                placeholder.outerHTML,
                                                placeholder.innerHTML // must be HTML incase user has added anchors or formats
                                            )
                                        }
                                    }
                                )
                            } else {
                                unedited.push(placeholder.id);
                            }
                            
                        })
                    }
                    break;
                case 'core/heading':
                    if ( block.attributes.className.contains('nf-placeholder') ) {
                        if ( block.attributes.content !== window.nfPlaceholders[block.attributes.id] || all ) {
                            rehighlightSinglePlaceholder(block.attributes.id);
                            dispatch('core/block-editor').updateBlock(
                                block.clientId,
                                {
                                    attributes: {
                                        id: '',
                                        classList: replace(
                                            block.attributes.classList,
                                            'nf-placeholder nf-highlight',
                                            ''
                                        )
                                    }
                                }
                            )
                        } else {
                            unedited.push(block.attributes.id);
                        }
                    }
                    break;
            }
        })
        if ( unedited.length ) {
            return unedited;
        }
        
        return true;
    }

    return null;
}

/**
 * Renders inside PrePublishValidation below.
 * 
 * Placeholder counts are extracted when this component renders inside the Slotfill.
 * 
 * @returns 
 */
const InnerValidationPanel = () => {
    // Must scrub modified placeholders first before counting what remains
    const [scrubResults, setScrubResults] = useState([]);
    const [isProcessing, setProcessing] = useState(true);
    
    useEffect(() => {
        setScrubResults(scrubPlaceholders());
        setProcessing(false);
    }, []);

    if (isProcessing) {
        return false;
    }
    
    if ( scrubResults.length ) {
        scrubResults.forEach(id => rehighlightSinglePlaceholder(id));
        return (
            <Fragment>
                <Notice status="warning" isDismissible={false}>
                    {sprintf( _n(
                        'We found %s placeholder still in on this page.',
                        'We found %s placeholders still in on this page.',
                        scrubResults.length,
                        'bluehost-wordpress-plugin'
                    ), scrubResults.length )}
                </Notice>
                <h4>{__("These placeholders haven't been edited", 'bluehost-wordpress-plugin')}:</h4>
                <ul id="unedited">
                    {scrubResults.map(id => <li key={id}>{window.nfPlaceholders[id]}</li>)}
                </ul>
            </Fragment>
        );
    }
    return (
        <Notice status="success" isDismissible={false}>
            {__('This page looks great! Time to share it with your visitors.', 'bluehost-wordpress-plugin')}
        </Notice>
    )
}

/**
 * Tap Block Editor Slotfill with Notices to warn users about publishing placeholders.
 * 
 * @returns 
 */
export const PrePublishValidation = () => {
    return (
        <PluginPrePublishPanel
            className="newfold-default-content-validation"
            title={__('Bluehost', 'bluehost-wordpress-plugin')}
            opened={true}
            initialOpen={true}
            icon={<span />}
        >
            <InnerValidationPanel />
        </PluginPrePublishPanel>
    )
}

/**
 * Erase highlight placeholder <span> elements.
 */
export const initHighlightEraser = () => {
    let placeholders = document.querySelectorAll('.nf-placeholder');
    
    if (placeholders.length) {
        placeholders = Array.from(placeholders);
        window.nfPlaceholders = {};
    }

    if (Array.isArray(placeholders)) {
        placeholders.forEach(node => {
            window.nfPlaceholders[node.id] = node.innerText;
            node.addEventListener('click', unhighlightSinglePlaceholder);
            node.addEventListener('caretIn', unhighlightSinglePlaceholder);
        })
    }
}

export default {
    setupCaretEvents,
    initHighlightEraser,
    PrePublishValidation
}