import classNames from 'classnames';
import {findIndex} from 'lodash';
import {useState, useEffect, useRef} from '@wordpress/element';

import './style.scss';

export default function Dropdown({className = '', id, label, onChange, options = [], value, width = 200}) {

    if (!id) {
        console.error('All dropdowns must have an ID attribute for accessibility purposes!');
        return null;
    }

    let button = useRef(null);
    const component = useRef(null);

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const [selected, setSelected] = useState(findIndex(options, ['value', value]));
    const [selectedItemLabel, setSelectedItemLabel] = useState(options[0].label);

    const handleKeyDown = (e) => {

        let index = active;
        let increment = true;

        const ESCAPE = 27;
        const SPACE = 32;
        const UP_ARROW = 38;
        const DOWN_ARROW = 40;

        switch (e.keyCode) {
            case ESCAPE:
                button.current.blur();
                setOpen(false);
                return;
            case SPACE:
                e.preventDefault();
                setSelected(active);
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

        while (index < 0 || index >= options.length || index === selected) {

            if (index < 0) {
                index = options.length - 1;
            }

            if (index >= options.length) {
                index = 0;
            }

            if (index === selected) {
                increment ? index++ : index--;
            }

        }

        setActive(index);

    };

    const handleClick = (e) => {
        if (!component.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        onChange(options[selected].value);
        setSelectedItemLabel(options[selected].label);
        setOpen(false);
    }, [selected]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);
        return () => document.removeEventListener('mousedown', handleClick, false);
    }, []);

    return (
        <div className={classNames({
            'dropdown': true,
            [className]: true,
        })} ref={component}>
            <div className="dropdown__label" id={`${id}-label`}>{label}</div>
            <div className="dropdown__field" style={{width}}>
                <button
                    aria-expanded={open ? 'true' : 'false'}
                    aria-haspopup="listbox"
                    aria-labelledby={`${id}-label ${id}-value`}
                    className="dropdown__trigger"
                    onClick={() => setOpen(!open)}
                    onKeyDown={handleKeyDown}
                    ref={button}
                >
                    <div className="dropdown__value" id={`${id}-value`}>{selectedItemLabel}</div>
                </button>
                <ul
                    aria-activedescendant={`${id}-${options[active].value}`}
                    aria-hidden={!open}
                    className={classNames({
                        'dropdown__list': true,
                        '--is-visible': open,
                    })}
                    id={`${id}-list`}
                    role="listbox"
                    tabIndex="-1"
                >
                    {options.map(({label: itemLabel, value: itemValue}, index) => {
                        return (
                            <li
                                aria-selected={index === active ? 'true' : 'false'}
                                className={classNames({
                                    'dropdown__item': true,
                                    '--selected': value === itemValue,
                                    '--active': index === active,
                                })}
                                data-value={itemValue}
                                id={`${id}-${itemValue}`}
                                key={index}
                                onClick={() => setSelected(index)}
                                onMouseEnter={() => setActive(index)}
                                role="option"
                            >
                                <span className="dropdown__item-label">{itemLabel}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
