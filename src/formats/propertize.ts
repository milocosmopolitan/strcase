import { capitalize } from "./capitalize";
import { dasherize } from "./dasherize";

/**
 * Returns the proper case form of a string.
 * ```javascript
 * propertize('innerHTML');          // 'Inner Html'
 * propertize('action_name');        // 'Action Name'
 * propertize('css-class-name');     // 'Css Class Name'
 * propertize('my favorite items');  // 'My Favorite Items'
 * ```
 * @method underscore
 * @param {String} str The string to underscore.
 * @return {String} the underscored string.
 */
export function propertize(str: string): string {
  return dasherize(str).split('-').map(word => capitalize(word)).join(' ');
}
