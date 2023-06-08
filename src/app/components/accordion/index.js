import './stylesheet.scss';

const Accordion = ( { summary, className, children } ) => {
	return (
		<details className={ classNames( 'accordion', className ) }>
			<summary className="accordion-summary">
				<p>{ summary }</p>
			</summary>
			<div className="accordion-content">{ children }</div>
		</details>
	);
};

export default Accordion;
