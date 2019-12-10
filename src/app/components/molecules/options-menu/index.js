import classNames from 'classnames';
import { kebabCase, uniqueId } from 'lodash';
import { useEffect, useRef, useState } from '@wordpress/element';
import { get } from './node_modules/@/functions';
import { ReactComponent as Ellipsis } from './node_modules/@/assets/ellipsis.svg';
import './style.scss';

/**
 * Display an options menu.
 *
 * @param {string} className An additional class name to add for styling purposes.
 * @param {string} label The label, which is hidden and only used for screen readers.
 * @param {Array} options Each option object must have a `label` and `callback` property (where `callback` is a function).
 * @param {number} width The width of the list.
 * @return {string}
 */
export default function BWAOptionsMenu(
	{
		className = '',
		disabled = false,
		label,
		options = [],
		width = 200,
	}
) {
	const component = useRef( null );
	const toggle = useRef( null );

	const id = uniqueId( 'options-menu-' );
	const [ active, setActive ] = useState( null );
	const [ activeDescendant, setActiveDescendant ] = useState( null );
	const [ hasFocus, setHasFocus ] = useState( false );
	const [ isOpen, setIsOpen ] = useState( false );
	const [ selected, setSelected ] = useState( null );

	const labelId = id.replace( 'options-menu-', 'options-menu-label-' );
	const listId = id.replace( 'options-menu-', 'options-menu-list-' );

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
		const callback = get( [ selected, 'callback' ], options );
		if ( callback ) {
			callback( options[ selected ] );
		}
		setIsOpen( false );
	}, [ selected ] );

	useEffect( () => {
		if ( ! hasFocus ) {
			setIsOpen( false );
		}
	}, [ hasFocus ] );

	useEffect( () => {
		if ( ! isOpen ) {
			setActive( null );
			setSelected( null );
		}
	}, [ isOpen ] );

	return (
		<div className={ classNames( {
			'options-menu': true,
			'--is-open': isOpen,
			[ className ]: className.length,
		} ) } ref={ component }>
			<div className="options-menu__label" id={ labelId }>{ label }</div>
			<button
				aria-expanded={ isOpen ? 'true' : 'false' }
				aria-haspopup="listbox"
				aria-labelledby={ labelId }
				className="options-menu__toggle"
				disabled={ disabled }
				onClick={ () => setIsOpen( ! isOpen ) }
				onFocus={ () => setHasFocus( true ) }
				onBlur={ () => setHasFocus( false ) }
				onKeyDown={ handleKeyDown }
				ref={ toggle }
				type="button"
			>
				<Ellipsis />
			</button>
			<ul
				aria-activedescendant={ activeDescendant }
				aria-hidden={ ! isOpen }
				className={ classNames( {
					'options-menu__list': true,
					'--is-visible': isOpen,
				} ) }
				id={ listId }
				role="listbox"
				style={ { width } }
				tabIndex="-1"
			>
				{ options.map( ( { label: itemLabel }, index ) => {
					const itemId = `${ id.replace( 'options-menu-', 'options-menu-list-item-' ) }-${ kebabCase( itemLabel ) }`;
					return (
						<li
							aria-selected={ index === active ? 'true' : 'false' }
							className={ classNames( {
								'options-menu__list-item': true,
								'--is-active': index === active,
							} ) }
							id={ itemId }
							key={ index }
							onMouseDown={ () => setSelected( index ) }
							onMouseEnter={ () => setActive( index ) }
							onTouchStart={ () => setSelected( index ) }
							role="option"
						>
							{ itemLabel }
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
