import { select, dispatch } from '@wordpress/data';
import { Notice } from '@wordpress/components';
import { PluginPrePublishPanel } from '@wordpress/edit-post';
import { replace } from 'lodash';
import { _n, __, sprintf } from '@wordpress/i18n';
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
        let old = document.lastGrab;
        if (node === old) return;
        if (old) old.dispatchEvent(new Event('caretOut'));
        (document.lastGrab = node).dispatchEvent(new Event('caretIn'));
    })
}

/**
 * When a user clicks or keyboard-navigates into a placeholder, remove the highlight and span wrapper.
 * @param {*} evt 
 */
const scrubSelectedPlaceholder = (evt) => {
    evt.target.removeAttribute('data-rich-text-format-boundary');
    const currentBlock = select(EDITOR_STORE).getSelectedBlock();
    console.log(currentBlock.attributes)
    switch(currentBlock.name) {
        case 'core/heading':
            dispatch(EDITOR_STORE).updateBlock(
                currentBlock.clientId, 
                { 
                    attributes: { 
                        className: ''
                    } 
                } 
            );
            break;
        case 'core/paragraph':
        default:
            dispatch(EDITOR_STORE).updateBlock(
                currentBlock.clientId, 
                { 
                    attributes: { 
                        content: replace(
                            currentBlock.attributes.content, 
                            evt.target.outerHTML, 
                            evt.target.innerText
                        ) 
                    } 
                } 
            );
            break;
    }
};

/**
 * Renders inside PrePublishValidation below.
 * 
 * Placeholder counts are extracted when this component renders inside the Slotfill.
 * 
 * @returns 
 */
const InnerValidationPanel = () => {
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
    if ( placeholdersDetected > 0 ) {
        return (
            <Notice status="warning" isDismissible={false}>
                {sprintf( _n(
                    'We found <strong>%s placeholder</strong> still in on this page. Look for words in [brackets] and replace with your own!',
                    'We found <strong>%s placeholders</strong> still in on this page. Look for words in [brackets] and replace with your own!',
                    placeholdersDetected,
                    'bluehost-wordpress-plugin'
                ), placeholdersDetected )}
            </Notice>
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
    }

    if (Array.isArray(placeholders)) {
        placeholders.forEach(el => {
            el.addEventListener('click', scrubSelectedPlaceholder);
            el.addEventListener('caretIn', scrubSelectedPlaceholder);
        })
    }
}

export default {
    setupCaretEvents,
    initHighlightEraser,
    PrePublishValidation
}