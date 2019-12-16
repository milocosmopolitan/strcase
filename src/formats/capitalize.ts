
/**
 * Returns the Capitalized form of a string
 * ```javascript
 * capitalize('innerHTML')         // 'InnerHTML'
 * capitalize('action_name')       // 'Action_name'
 * capitalize('css-class-name')    // 'Css-class-name'
 * capitalize('my favorite items') // 'My favorite items'
 * ```
 * @method capitalize
 * @param {String} str The string to capitalize.
 * @return {String} The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
