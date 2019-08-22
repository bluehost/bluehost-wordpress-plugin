import {max, min, range, uniq} from 'lodash';
import classNames from 'classnames';
import './style.scss';

export default function Pagination({callback, currentPage = 1, pageCount, padding = 2}) {
    if (pageCount <= 1) {
        return null;
    }
    const pages = uniq([...range(max([currentPage - padding, 2]), min([currentPage + padding + 1, pageCount]))]);
    const previous = currentPage - 1;
    const next = currentPage + 1;
    const hasPrevious = previous >= 1;
    const hasNext = next <= pageCount;
    return (
        <ul className="pagination">
            {hasPrevious ? (
                <li className="pagination__item">
                    <button
                        aria-label="First"
                        className="pagination__link"
                        onClick={() => callback(1)}
                        type="button"
                    >
                        <span>«</span>
                    </button>
                </li>
            ) : null}
            {hasPrevious ? (
                <li className="pagination__item">
                    <button
                        aria-label="Previous"
                        className="pagination__link"
                        onClick={() => callback(previous)}
                        type="button"
                    >
                        <span>‹</span>
                    </button>
                </li>
            ) : null}
            <li className="pagination__item">
                <button
                    className={classNames({
                        'pagination__link': true,
                        '--is-active': currentPage === 1
                    })}
                    type="button"
                    onClick={() => callback(1)}
                >
                    <span>1</span>
                </button>
            </li>
            {
                currentPage - padding > 2 ?
                    (
                        <li className="pagination__item">
                            <button
                                aria-label="More"
                                className="pagination__link"
                                disabled
                                type="button"
                            >
                                <span>…</span>
                            </button>
                        </li>
                    )
                    : null
            }
            {pages.map((page) => {
                return (
                    <li key={page} className="pagination__item">
                        <button
                            className={classNames({
                                'pagination__link': true,
                                '--is-active': currentPage === page
                            })}
                            type="button"
                            onClick={() => callback(page)}
                        >
                            <span>{page}</span>
                        </button>
                    </li>
                )
            })}
            {
                currentPage + padding < pageCount - 1 ?
                    (
                        <li className="pagination__item">
                            <button
                                aria-label="More"
                                className="pagination__link"
                                disabled
                                type="button"
                            >
                                <span>…</span>
                            </button>
                        </li>
                    )
                    : null
            }
            <li className="pagination__item">
                <button
                    className={classNames({
                        'pagination__link': true,
                        '--is-active': currentPage === pageCount
                    })}
                    onClick={() => callback(pageCount)}
                    type="button"
                >
                    <span>{pageCount}</span>
                </button>
            </li>
            {hasNext ? (
                <li className="pagination__item">
                    <button
                        aria-label="Next"
                        className="pagination__link"
                        onClick={() => callback(next)}
                        type="button"
                    >
                        <span>›</span>
                    </button>
                </li>
            ) : null}
            {hasNext ? (
                <li className="pagination__item">
                    <button
                        aria-label="Last"
                        className="pagination__link"
                        type="button"
                        onClick={() => callback(pageCount)}
                    >
                        <span>»</span>
                    </button>
                </li>
            ) : null}
        </ul>
    );
}
