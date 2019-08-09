import './style.scss';

export default function Dropdown({label, value, onChange, options = []}) {
    return (
        <label className="dropdown">
            <span className="dropdown__label">{label}</span>
            <select className="dropdown__input" value={value} onChange={onChange}>
                {options.map(({label, value}, index) => {
                    return (
                        <option key={index} value={value}>{label}</option>
                    );
                })}
            </select>
        </label>
    );
}
