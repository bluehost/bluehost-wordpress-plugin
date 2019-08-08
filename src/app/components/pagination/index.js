import {max, min, range, uniq} from 'lodash';

export default function Pagination({callback, currentPage = 1, pageCount, padding = 2}) {
    /*if (pageCount <= 1) {
        return null;
    }*/
    const pages = uniq([1, ...range(max([currentPage - padding, 1]), currentPage + padding + 1), pageCount]);
    const previous = max([currentPage - 1, 1]);
    const next = min(pageCount, currentPage + 1);
    return (
        <ul className="pagination">
            <li onClick={() => callback(1)}>First</li>
            <li onClick={() => callback(previous)}>Previous</li>
            {pages.map((page, i) => {
                return (
                    <li key={i} onClick={() => callback(page)}>{page}</li>
                )
            })}
            <li onClick={() => callback(next)}>Next</li>
            <li onClick={() => callback(pageCount)}>Last</li>
        </ul>
    );
}
