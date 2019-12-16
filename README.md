# strcase

Provides functions to convert string to various cases

## Installation

```sh
npm i strcase
```

## Usage

**Camelize**

`camelize` function transforms text to camel case

```js
import { camelize } from "strcase";

camelize('SVGElement'); // svgElement
camelize('JavaScript'); // javaScript
camelize('my-little-pony'); // myLittlePony
camelize('load_action'); // loadAction
camelize('hello world'); // helloWorld
camelize('Hello World'); // helloWorld
```

**Capitalize**

`capitlize` function transforms first letter to capital letter

```js
import { capitalize } from "strcase";

capitalize('innerHTML')         // 'InnerHTML'
capitalize('action_name')       // 'Action_name'
capitalize('css-class-name')    // 'Css-class-name'
capitalize('my favorite items') // 'My favorite items'
```

**Classify**

`classify` function transforms text to pascal case

```js
import { classify } from "strcase";

classify('innerHTML');          // 'InnerHTML'
classify('action_name');        // 'ActionName'
classify('css-class-name');     // 'CssClassName'
classify('my favorite items');  // 'MyFavoriteItems'
```

**Constantize**

`constantize` function transforms text to constant case

```js
import { constantize } from "strcase";

constantize('innerHTML');         // 'INNER_HTML'
constantize('action_name');       // 'ACTION_NAME'
constantize('css-class-name');    // 'CSS_CLASS_NAME'
constantize('my favorite items'); // 'MY_FAVORITE_ITEMS'
```

**Dasherize**

`dasherize` function transforms text to param case

```js
import { dasherize } from "strcase";

dasherize('innerHTML');         // 'inner-html'
dasherize('action_name');       // 'action-name'
dasherize('css-class-name');    // 'css-class-name'
dasherize('my favorite items'); // 'my-favorite-items'
```

**propertize**

`propertize` function transforms text to proper case

```js
import { propertize } from "strcase";

propertize('innerHTML');          // 'Inner Html'
propertize('action_name');        // 'Action Name'
propertize('css-class-name');     // 'Css Class Name'
propertize('my favorite items');  // 'My Favorite Items'
```

**underscore**

`underscore` function transforms text to underscore case

```js
import { underscore } from "strcase";

underscore('innerHTML');          // 'inner_html'
underscore('action_name');        // 'action_name'
underscore('css-class-name');     // 'css_class_name'
underscore('my favorite items');  // 'my_favorite_items'
```

