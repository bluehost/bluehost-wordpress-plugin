const Heading = ( { level, className, children } ) => {
	const TagName = 'h' + level;

	return (
		<TagName className={ classNames( 'heading', className ) }>
			{ children }
		</TagName>
	);
};

export default Heading;
