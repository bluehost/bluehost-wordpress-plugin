/**
 * External dependencies
 */
import classNames from 'classnames';
import { snakeCase } from 'snake-case';
import omit from 'lodash/omit';

/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { get, addUtmParams } from "@app/functions";
import './style.scss';

const BWAButton = forwardRef((props, ref) => {
	let {className = '', href, rel, target} = props;

	// Check if link is external
	if (href && typeof href === 'string' && href.includes('http') && !href.includes(window.location.origin)) {

		// Add class
		className += ' is-external';

		// Automatically add UTM params
		const anchorText = typeof props.children === 'string' ? props.children : '';
		href = addUtmParams(
			href,
			{
				utm_term: get(['utmTerm'], props, anchorText),
				utm_content: get(['utmContent'], props, snakeCase(anchorText)),
				utm_campaign: get(['utmCampaign'], props),
			}
		);

		// Ensure that rel attribute is set
		if (!rel) {
			rel = 'noreferrer noopener';
		}

		if (!target) {
			target = '_blank';
		}

	}

	return (
		<Button
			{ ...omit(props, ['utmCampaign', 'utmContent', 'utmTerm']) }
			className={ classNames({
				bluehost: true,
				[className]: className.length,
			}) }
			href={ href }
			ref={ ref }
			rel={ rel }
			target={ target }
		/>
	);
});

export default BWAButton;
