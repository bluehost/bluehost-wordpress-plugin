import {__} from '@wordpress/i18n';
import {ReactComponent as SearchIcon} from '@/assets/search.svg';
import './style.scss';

export default function Search({callback}) {
    return (
        <form className="search-box" onSubmit={callback}>
            <label>
                <SearchIcon className="search-box__icon"/>
                <span className="search-box__label sr-only">{__('Search', 'bluehost-wordpress-plugin')}</span>
                <input
                    className="search-box__input"
                    type="search"
                    placeholder={__('Search', 'bluehost-wordpress-plugin')}
                />
            </label>
        </form>
    );
}
