import { camelize } from "./camelize";
import { capitalize } from "./capitalize";

/**
 * Returns the PascalCase form of a string.
 * ```javascript
 * classify('innerHTML');          // 'InnerHTML'
 * classify('action_name');        // 'ActionName'
 * classify('css-class-name');     // 'CssClassName'
 * classify('my favorite items');  // 'MyFavoriteItems'
 * ```
 * @method classify
 * @param {String} str the string to classify
 * @return {String} the classified string
 */
export function classify(str: string): string {
  return str.split('.').map(part => capitalize(camelize(part))).join('.');
}
