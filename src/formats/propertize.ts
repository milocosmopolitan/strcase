import { capitalize } from "./capitalize";
import { dasherize } from "./dasherize";

/**
 * Returns the proper case form of a string.
 * ```javascript
 * 'innerHTML'.underscore();          // 'Inner Html'
 * 'action_name'.underscore();        // 'Action Name'
 * 'css-class-name'.underscore();     // 'Css Class Name'
 * 'my favorite items'.underscore();  // 'My Favorite Items'
 * ```
 * @method underscore
 * @param {String} str The string to underscore.
 * @return {String} the underscored string.
 */
export function propertize(str: string): string {
  return dasherize(str).split('-').map(word => capitalize(word)).join(' ');
}
