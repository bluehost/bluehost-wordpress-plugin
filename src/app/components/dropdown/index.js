export default function Dropdown({label, value, onChange, options = []}) {
    return (
        <label>
            <span>{label}</span>
            <select value={value} onChange={onChange}>
                {options.map(({label, value}, index) => {
                    return (
                        <option key={index} value={value}>{label}</option>
                    );
                })}
            </select>
        </label>
    );
}
