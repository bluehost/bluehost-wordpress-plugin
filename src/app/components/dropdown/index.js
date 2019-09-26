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

    const [hasFocus, setHasFocus] = useState(false);
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

    useEffect(() => {
        onChange(options[selected].value);
        setSelectedItemLabel(options[selected].label);
        setOpen(false);
    }, [selected]);

    useEffect(() => {
        if (!hasFocus) {
            setOpen(false);
        }
    }, [hasFocus]);

    useEffect(() => {
        setSelected(findIndex(options, ['value', value]));
    }, [value]);

    return (
        <div className={classNames({
            'dropdown': true,
            '--is-open': open,
            [className]: className.length,
        })} ref={component}>
            <div className="dropdown__label" id={`${id}-label`}>{label}</div>
            <div className="dropdown__field" style={{width}}>
                <button
                    aria-expanded={open ? 'true' : 'false'}
                    aria-haspopup="listbox"
                    aria-labelledby={`${id}-label ${id}-value`}
                    className="dropdown__trigger"
                    onClick={() => setOpen(!open)}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
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
                                onMouseDown={() => setSelected(index)}
                                onMouseEnter={() => setActive(index)}
                                onTouchStart={() => setSelected(index)}
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
