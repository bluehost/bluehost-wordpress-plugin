import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {ReactComponent as SearchIcon} from '@/assets/search.svg';
import './style.scss';

export default function Search({onChange, value = ''}) {

    const [query, setQuery] = useState(value);

    return (
        <form className="search-box" onSubmit={(e) => {
            e.preventDefault();
            onChange(e.target.querySelector('.search-box__input').value);
        }}>
            <label>
                <SearchIcon className="search-box__icon"/>
                <span className="search-box__label sr-only">{__('Search', 'bluehost-wordpress-plugin')}</span>
                <input
                    className="search-box__input"
                    type="search"
                    placeholder={__('Search', 'bluehost-wordpress-plugin')}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </label>
        </form>
    );
}
