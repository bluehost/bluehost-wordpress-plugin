import ExclusiveGroup from './ExclusiveGroup';

export default function SearchFilters(
	{
		className = 'resources-search-filters',
		defaultValue,
		group,
		label,
		onChange,
		options
	}
) {
	return (
		<div className={ className }>
			<span className={ `${ className }__label screen-reader-text` }>{ label }</span>
			<ExclusiveGroup
				className={ className }
				defaultValue={ defaultValue }
				group={ group }
				onChange={ onChange }
				options={ options }
			/>
		</div>
	);
}
