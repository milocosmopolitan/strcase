/**
 * More general than decamelize. Returns the lower_case_and_underscored
 * form of a string.
 * ```javascript
 * 'innerHTML'.underscore();          // 'inner_html'
 * 'action_name'.underscore();        // 'action_name'
 * 'css-class-name'.underscore();     // 'css_class_name'
 * 'my favorite items'.underscore();  // 'my_favorite_items'
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
