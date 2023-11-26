import { createContext, useContext, useReducer } from '@wordpress/element';
import { Notifications } from '@newfold/ui-component-library';

const ACTIONS = { PUSH: 'push', DISMISS: 'dismiss' };

const feedReducer = ( feed, action ) => {
	switch ( action.type ) {
		case ACTIONS.PUSH:
			return { ...feed, [ action.id ]: action.message };
		case ACTIONS.DISMISS:
			return { ...feed, [ action.id ]: null };
		default:
			return feed;
	}
};

const FeedContext = createContext( {
	// eslint-disable-next-line no-unused-vars
	push: ( id, message ) => {},
} );

export const useNotification = () => useContext( FeedContext );

export const NotificationFeed = ( { children } ) => {
	const [ feed, dispatch ] = useReducer( feedReducer, {} );
	return (
		<>
			<FeedContext.Provider
				value={ {
					push: ( id, message ) =>
						dispatch( { type: ACTIONS.PUSH, id, message } ),
				} }
			>
				{ children }
			</FeedContext.Provider>
			<Notifications>
				{ Object.entries( feed )
					.filter( ( [ , value ] ) => value !== null )
					.map( ( [ key, { description, ...entry } ] ) => {
						const contentProps = Array.isArray( description )
							? { description }
							: { children: description };
						return (
							<Notifications.Notification
								id={ key }
								key={ key }
								{ ...entry }
								{ ...contentProps }
								dismissScreenReaderLabel="Dismiss"
								onDismiss={ ( id ) => {
									dispatch( { type: ACTIONS.DISMISS, id } );
									if ( entry.onDismiss ) {
										entry.onDismiss( id );
									}
								} }
							/>
						);
					} ) }
			</Notifications>
		</>
	);
};
