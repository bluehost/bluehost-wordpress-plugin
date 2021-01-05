import './style.scss';

import { BWABaseTemplate } from '@app/components/templates';

const BWACommonTemplate = ({ 
	type = 'common', 
	children, 
	...props 
}) => {
	return (
		<BWABaseTemplate
			type={type}
			{...props}
		>
			{children}
		</BWABaseTemplate>
	);
}

export default BWACommonTemplate;
