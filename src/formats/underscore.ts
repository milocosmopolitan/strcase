/**
 * More general than decamelize. Returns the lower_case_and_underscored
 * form of a string.
 * ```javascript
 * underscore('innerHTML');          // 'inner_html'
 * underscore('action_name');        // 'action_name'
 * underscore('css-class-name');     // 'css_class_name'
 * underscore('my favorite items');  // 'my_favorite_items'
 * ```
 * @method underscore
 * @param {String} str The string to underscore.
 * @return {String} the underscored string.
 */
export function underscore(str: string): string {
  const STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
  const STRING_UNDERSCORE_REGEXP_2 = (/-|\s+/g);

  return str
    .replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2')
    .replace(STRING_UNDERSCORE_REGEXP_2, '_')
    .toLowerCase();
}
