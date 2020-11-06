import { useState } from '@wordpress/element';

import ExclusiveOption from './ExclusiveOption';

export default function ExclusiveGroup({className, defaultValue = '', group, onChange, options}) {

	const [selected, setSelected] = useState(defaultValue);

	return (
		<div className={ `${ className }__group` }>
			{
				options.map(
					(option, index) => {
						return (
							<ExclusiveOption
								className={ className }
								group={ group }
								isChecked={ selected === option }
								key={ index }
								value={ option }
								onChange={
									(value) => {
										setSelected(selected !== value ? value : '');
										onChange(value);
									}
								}
							/>
						);
					}
				)
			}
		</div>
	);
}
