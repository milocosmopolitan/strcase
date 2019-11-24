/**
 * Replaces underscores, spaces, or camelCase with dashes.
 * ```javascript
 * dasherize('innerHTML');         // 'inner-html'
 * dasherize('action_name');       // 'action-name'
 * dasherize('css-class-name');    // 'css-class-name'
 * dasherize('my favorite items'); // 'my-favorite-items'
 * ```
 * @method dasherize
 * @param {String} str The string to dasherize.
 * @return {String} the dasherized string.
 */
export function dasherize(str: string): string {
  const STRING_DECAMELIZE_REGEXP = (/([a-z\d])([A-Z])/g);
  const STRING_DASHERIZE_REGEXP = (/[ _]/g);
  return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2')
    .replace(STRING_DASHERIZE_REGEXP, '-')
    .toLowerCase();
}
