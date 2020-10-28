import classnames from 'classnames';

export default function ExclusiveOption({className, group, isChecked, onChange, value}) {
	return (
		<label
			className={
				classnames(
					{
						'btn': true,
						'btn-secondary': true,
						[`${ className }__option`]: true,
						'--is-active': isChecked
					}
				)
			}
		>
			<input
				checked={ isChecked }
				className={ `${ className }__option-field` }
				name={ group }
				onClick={ () => {
					if (isChecked) {
						onChange('');
					}
				} }
				onChange={ () => {
					onChange(value);
				} }
				type="radio"
				value={ value }
			/>
			<span className={ `${ className }__option-field-label` }>{ value }</span>
		</label>
	);
}
