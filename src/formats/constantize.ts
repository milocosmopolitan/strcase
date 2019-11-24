import { underscore } from "./underscore";

/**
 * Returns the constant form of a string.
 * ```javascript
 * constantize('innerHTML');         // 'INNER_HTML'
 * constantize('action_name');       // 'ACTION_NAME'
 * constantize('css-class-name');    // 'CSS_CLASS_NAME'
 * constantize('my favorite items'); // 'MY_FAVORITE_ITEMS'
 * ```
 * @method constantize
 * @param {String} str The string to constantize.
 * @return {String} the constantize string.
 */
export function constantize(str: string): string {
  return underscore(str).toUpperCase();
}
