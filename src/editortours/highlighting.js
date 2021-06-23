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
        styleElement.innerText = 'span#' + id + '.nf-placeholder.nf-highlight, span#' + id + '.nf-placeholder.nf-highlight[data-rich-text-format-boundary] { background-color: inherit !important; color: inherit !important; }';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
};

const rehighlightSinglePlaceholder = (id) => {
    const styleTag = document.getElementById('style-' + id);
    if ( null !== styleTag ) {
        styleTag.parentNode.removeChild(styleTag);
    }
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
export const scrubPlaceholders = ( all = false ) => {
    const blocks = select('core/block-editor').getBlocks();
    const { nfPlaceholders } = window;

    let unedited = [];
    if ( blocks.length ) {
        const parser = new DOMParser();
        blocks.forEach( block => {
            switch(block.name) {
                case 'core/heading':
                case 'core/paragraph':
                    let blockDOM = parser.parseFromString(block.attributes.content, 'text/html');
                    let blockPlaceholders = blockDOM.querySelectorAll('.nf-placeholder');
                    if ( blockPlaceholders.length ) {
                        blockPlaceholders = Array.from(blockPlaceholders);
                        for (const placeholder of blockPlaceholders) {
                            if ( ( 'object' === typeof nfPlaceholders && nfPlaceholders.hasOwnProperty(placeholder.id) && placeholder.innerText !== nfPlaceholders[placeholder.id] ) || all ) {
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

const ReinitializeTour = () => {
    const locateAndLaunchTour = () => {
        if ( 'undefined' !== typeof window.nfTour ) {
            window.nfTour.start();
        }
    }

    return(
        <Button isSecondary onClick={locateAndLaunchTour} className="relaunch-tour">{__('Relaunch Tour', 'bluehost-wordpress-plugin')}</Button>
    )
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
                    {scrubResults.map(id => {
                        if ('undefined' === typeof window.nfPlaceholders || 'undefined' === typeof window.nfPlaceholders[id]) {
                            return <li>{__('Oops, we couldn\'t find this placeholder, please double check the content', 'bluehost-wordpress-plugin')}</li>
                        }
                        return (
                            <li key={id}>{window.nfPlaceholders[id]}</li>
                        )
                    })}
                </ul>
                <ReinitializeTour />
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Notice status="success" isDismissible={false}>
                {__('This page looks great! Time to share it with your visitors.', 'bluehost-wordpress-plugin')}
            </Notice>
            <ReinitializeTour />
        </Fragment>
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
    let dbPlaceholders = false;

    if ( 'undefined' !== typeof window.nfPlaceholders ) {
        dbPlaceholders = true;
    } else {
        window.nfPlaceholders = {};
    }
    
    if (placeholders.length) {
        placeholders = Array.from(placeholders);
    }

    if (Array.isArray(placeholders)) {
        placeholders.forEach(node => {
            if ( ! dbPlaceholders ) {
                window.nfPlaceholders[node.id] = node.innerText;
            }
            node.addEventListener('click', unhighlightSinglePlaceholder);
            node.addEventListener('caretIn', unhighlightSinglePlaceholder);
        })
        if ( ! dbPlaceholders ) {
            const currentMeta = wp.data.select('core/editor').getEditedPostAttribute('meta');
            wp.data.dispatch('core/editor').editPost({ meta: { ...currentMeta, 'nf_dc_placeholders': JSON.stringify(window.nfPlaceholders) } });
        }
    }
}

export default {
    setupCaretEvents,
    initHighlightEraser,
    PrePublishValidation,
    scrubPlaceholders
}