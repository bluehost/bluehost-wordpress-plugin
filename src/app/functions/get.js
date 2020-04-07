export default function get( props, object, fallback = null ) {
	return props.reduce( ( accumulator, currentValue ) => {
		return accumulator && accumulator[ currentValue ] ? accumulator[ currentValue ] : fallback;
	}, object );
}
