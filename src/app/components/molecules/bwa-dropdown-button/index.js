import './style.scss';

import { useEffect, useRef, useState } from '@wordpress/element';

import { BWAButton as Button } from '@app/components/atoms';
import { DownIcon } from '@app/assets';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { get } from '@app/functions';
import kebabCase from 'lodash/kebabCase';
import uniqueId from 'lodash/uniqueId';

/**
 * Display a button with a dropdown menu.
 *
 * @param {string} className An additional class name to add for styling purposes.
 * @param {number} defaultOptionIndex The default option index. Used to look up the appropriate action when button is clicked.
 * @param {boolean} disabled Whether or not the button is disabled.
 * @param {string} label The label, which is hidden and only used for screen readers.
 * @param {Array} options Each option object must have a `title` and `callback` property (where `callback` is a function). A `description` property is optional.
 * @param {boolean} triggerOnSelect Whether or not to immediately trigger a callback after selecting an item from the dropdown. Defaults to true.
 * @param {number} width The width of the list.
 * @return {string}
 */
export default function BWADropdownButton(
	{
		className = '',
		defaultOptionIndex = 0,
		disabled = false,
		label,
		options = [],
		triggerOnSelect = true,
		width = 200,
	}
) {
	const component = useRef( null );
	const toggle = useRef( null );

	const id = uniqueId( 'dropdown-button-' );
	const [ active, setActive ] = useState( null );
	const [ activeDescendant, setActiveDescendant ] = useState( null );
	const [ hasFocus, setHasFocus ] = useState( false );
	const [ isOpen, setIsOpen ] = useState( false );
	const [ selected, setSelected ] = useState( defaultOptionIndex );
	const [ actionName, setActionName ] = useState( get( [ selected, 'title' ], options ) );

	const labelId = id.replace( 'dropdown-button-', 'dropdown-button-label-' );
	const listId = id.replace( 'dropdown-button-', 'dropdown-button-list-' );

	const handleKeyDown = ( e ) => {
		let index = active;
		let increment = true;

		const ESCAPE = 27;
		const SPACE = 32;
		const UP_ARROW = 38;
		const DOWN_ARROW = 40;

		switch ( e.keyCode ) {
			case ESCAPE:
				toggle.current.blur();
				setIsOpen( false );
				return;
			case SPACE:
				e.preventDefault();
				setSelected( active );
				return;
			case UP_ARROW:
				e.preventDefault();
				index--;
				increment = false;
				break;
			case DOWN_ARROW:
				e.preventDefault();
				index++;
				break;
		}

		while ( index < 0 || index >= options.length || index === selected ) {
			if ( index < 0 ) {
				index = options.length - 1;
			}

			if ( index >= options.length ) {
				index = 0;
			}

			if ( index === selected ) {
				increment ? index++ : index--;
			}
		}

		setActive( index );
	};

	useEffect( () => {
		setActiveDescendant( `${ id }-${ get( [ active, 'label' ], options ) }` );
	}, [ active ] );

	useEffect( () => {
		setActionName( get( [ selected, 'title' ], options ) );
		if ( hasFocus && triggerOnSelect ) {
			const callback = get( [ selected, 'callback' ], options );
			if ( typeof callback === 'function' ) {
				callback( options[ selected ] );
			}
		}
	}, [ selected ] );

	useEffect( () => {
		if ( ! hasFocus ) {
			setIsOpen( false );
		}
	}, [ hasFocus ] );

	useEffect( () => {
		if ( ! isOpen ) {
			setActive( 0 );
		}
	}, [ isOpen ] );

	const triggerCallback = ( selected ) => {
		const callback = get( [ selected, 'callback' ], options );
		if ( typeof callback === 'function' ) {
			callback( options[ selected ] );
		}
	};

	const maybeTriggerCallback = ( index ) => {
		if ( triggerOnSelect && selected === index ) {
			triggerCallback( selected );
		}
	};

	return (
		<div
			className={ classNames( {
				'dropdown-button': true,
				'--is-open': isOpen,
				[ className ]: className.length,
			} ) }
			ref={ component }
		>
			<div className="dropdown-button__label" id={ labelId }>{ label }</div>
			<div className="dropdown-button__button-group">
				<Button
					className="dropdown-button__action"
					disabled={ disabled }
					isSecondary
					onClick={ () => {
						const callback = get( [ selected, 'callback' ], options );
						if ( typeof callback === 'function' ) {
							callback( options[ selected ] );
						}
					} }
				>
					{ actionName }
				</Button>
				<Button
					aria-expanded={ isOpen ? 'true' : 'false' }
					aria-haspopup="listbox"
					aria-labelledby={ labelId }
					className="dropdown-button__toggle components-button bluehost is-button is-default"
					disabled={ disabled }
					onClick={ () => setIsOpen( ! isOpen ) }
					onFocus={ () => setHasFocus( true ) }
					onBlur={ () => setHasFocus( false ) }
					onKeyDown={ handleKeyDown }
					ref={ toggle }
				>
					<DownIcon />
					<span className="sr-only">{ __( 'Select', 'bluehost-wordpress-plugin' ) }</span>
				</Button>
			</div>
			<ul
				aria-activedescendant={ activeDescendant }
				aria-hidden={ ! isOpen }
				className={ classNames( {
					'dropdown-button__list': true,
					'--is-visible': isOpen,
				} ) }
				id={ listId }
				role="listbox"
				style={ { width } }
				tabIndex="-1"
			>
				{ options.map( ( { callback: itemCallback, title: itemTitle, description: itemDescription }, index ) => {
					const itemId = `${ id.replace( 'dropdown-button-', 'dropdown-button-list-item-' ) }-${ kebabCase( itemTitle ) }`;
					return (
						<li
							aria-selected={ index === active ? 'true' : 'false' }
							className={ classNames( {
								'dropdown-button__list-item': true,
								'--is-active': index === active,
							} ) }
							id={ itemId }
							key={ index }
							onMouseDown={ () => {
								setSelected( index );
								maybeTriggerCallback( index );
							} }
							onMouseEnter={ () => setActive( index ) }
							onTouchStart={ () => {
								setSelected( index );
								maybeTriggerCallback( index );
							} }
							role="option"
						>
							<div className="dropdown-button__list-item-title">{ itemTitle }</div>
							<div className="dropdown-button__list-item-description">{ itemDescription }</div>
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
