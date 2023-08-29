import { createContext, useContext, useReducer } from "@wordpress/element";
import { Notifications } from "@newfold/ui-component-library";

const actions = { PUSH: "push", DISMISS: "dismiss" };

/**
 * @typedef FeedEntry
 * @property {string} title
 * @property {React.ReactNode | string[]} description
 * @property {"info" | "success" | "error" | "warning"} variant
 * @property {number} autoDismiss
 * @property {(id) => void | null} onDismiss
 * @property {"bottom-left" | "bottom-center" | "top-center"} position
 */

/**
 *
 * @typedef FeedReducerAction
 * @property {"push" | "dismiss"} type
 * @property {string} id
 * @property {FeedEntry?} message
 *
 * @param {Record<string, FeedEntry>} feed
 * @param {FeedReducerAction} action
 * @returns {Record<string, FeedEntry>}
 */
function feedReducer(feed, action) {
  switch (action.type) {
    case actions.PUSH:
      return { ...feed, [action.id]: action.message };
    case actions.DISMISS:
      return { ...feed, [action.id]: null };
    default:
      return feed;
  }
}

const FeedContext = createContext({
  push: (id, message) => {},
});

/** @type {() => { push: (id: string, message: FeedEntry) => void}}  */
export const useNotification = () => useContext(FeedContext);

export function NotificationFeed({ children }) {
  let [feed, dispatch] = useReducer(feedReducer, {});
  return (
    <>
      <FeedContext.Provider
        value={{
          push: (id, message) => dispatch({ type: actions.PUSH, id, message }),
        }}
      >
        {children}
      </FeedContext.Provider>
      <Notifications>
        {Object.entries(feed)
          .filter(([, value]) => value !== null)
          .map(([key, { description, ...entry }]) => {
            let contentProps = Array.isArray(description)
              ? { description }
              : { children: description };
            return (
              <Notifications.Notification
                id={key}
                key={key}
                {...entry}
                {...contentProps}
                dismissScreenReaderLabel="Dismiss"
                onDismiss={(id) => {
                  dispatch({ type: actions.DISMISS, id });
                  if (entry.onDismiss) {
                    entry.onDismiss(id);
                  }
                }}
              />
            );
          })}
      </Notifications>
    </>
  );
}
