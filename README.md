# ansi-es6

A small ES6 module utility library for creating [ANSI escaped](https://en.wikipedia.org/wiki/ANSI_escape_code) strings. Primarily useful for highlighting text with colors. Which colors are displayed and which codes are actually supported depends on the terminal being used.

## Installing

The module can be installed from [npm](https://www.npmjs.com/):

```shell
npm install ansi-es6
```

## Usage

The main function exposed by the module is `modify`, which takes a string and a list of modifiers as arguments and returns a new string in which the modifiers are applied at the beginning and all modifiers are reset at the end (this means the output *cannot* easily be nested in an already modified string).

Many of the common codes are provided as constants:
- Foreground colors, e.g. `FgGreen`, `FgBrightRed`, etc.
- Background colors, e.g. `BgGreen`, `BgBrightRed`, etc.
- Styles, e.g. `Italic`, `Bold`, `Underline`, etc.

```js
import { modify, FgGreen } from 'ansi-es6';

console.log(modify('Hello Green World', FgGreen));
```

There also is the function `code` which creates arbitrary escaped strings from numerical codes; most relevant codes should already exist in the form of the various constants however.

### Custom Colors

The functions `FgRgb` and `BgRgb` create foreground/background modifiers which correspond to arbitrary [RGB](https://en.wikipedia.org/wiki/RGB_color_model) color values. There are equivalent functions for [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) (which ultimately is converted to RGB).

```js
import { modify, FgHsl } from 'ansi-es6';

// Print a rainbow
for (let h = 0; h < 359; h++)
	console.log(modify("Hello Console", FgHsl(h, 1, 0.5)));
```

## Types and API Documentation

Type declarations (`.d.ts`) are provided by the module; these also contain function/argument descriptions. The constants for the most part are currently not documented but you can look up the codes [on Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters) for example.