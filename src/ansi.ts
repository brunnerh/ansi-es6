/**
 * Creates a basic ANSI escape code string from one or more numeric codes.
 * @param codes Numeric ANSI escape codes.
 */
export const code = (...codes: number[]) => `\x1b[${codes.join(';')}m`;

/**
 * Adds ANSI escape codes to a string.
 * Resets **all** properties at the end of the string.
 * @param text Text to colorize.
 * @param modifiers ANSI escape code modifiers.
 */
export const modify = (text: string, ...modifiers: string[]) =>
	modifiers.join('') + text + code(0);

/** [0] Resets all attributes. */
export const Reset = code(0);
/** [1] */
export const Bold = code(1);
/** [2] */
export const Faint = code(2);
/** [3] */
export const Italic = code(3);
/** [4] */
export const Underline = code(4);
/** [5] */
export const BlinkSlow = code(5);
/** [6] */
export const BlinkRapid = code(6);
/** [7] Swaps foreground and background colors. */
export const ReverseVideo = code(7);
/** [8] */
export const Conceal = code(8);
/** [9] */
export const CrossedOut = code(9);
/** [10] */
export const PrimaryFont = code(10);
/** [11] */
export const AlternativeFont1 = code(11);
/** [12] */
export const AlternativeFont2 = code(12);
/** [13] */
export const AlternativeFont3 = code(13);
/** [14] */
export const AlternativeFont4 = code(14);
/** [15] */
export const AlternativeFont5 = code(15);
/** [16] */
export const AlternativeFont6 = code(16);
/** [17] */
export const AlternativeFont7 = code(17);
/** [18] */
export const AlternativeFont8 = code(18);
/** [19] */
export const AlternativeFont9 = code(19);
/** [20] */
export const Fraktur = code(20);
/** [21] */
export const DoublyUnderline = code(21);
/** [22] */
export const NormalColorOrIntensity = code(22);
/** [23] */
export const NotItalicOrFraktur = code(23);
/** [24] */
export const UnderlineOff = code(24);
/** [25] */
export const BlinkOff = code(25);
/** [27] */
export const InverseOff = code(27);
/** [28] */
export const Reveal = code(28);
/** [29] */
export const NotCrossedOut = code(29);
/** [51] */
export const Framed = code(51);
/** [52] */
export const Encircled = code(52);
/** [53] */
export const Overlined = code(53);
/** [54] */
export const NotFramedOrEncircled = code(54);
/** [55] */
export const NotOverlined = code(55);
/** [60] */
export const IdeogramUnderline = code(60);
/** [61] */
export const IdeogramDoubleUnderline = code(61);
/** [62] */
export const IdeogramOverline = code(62);
/** [63] */
export const IdeogramDoubleOverline = code(63);
/** [64] */
export const IdeogramStressMarking = code(64);
/** [65] */
export const IdeogramAttributesOff = code(65);

/** [30] */
export const FgBlack = code(30);
/** [31] */
export const FgRed = code(31);
/** [32] */
export const FgGreen = code(32);
/** [33] */
export const FgYellow = code(33);
/** [34] */
export const FgBlue = code(34);
/** [35] */
export const FgMagenta = code(35);
/** [36] */
export const FgCyan = code(36);
/** [37] */
export const FgWhite = code(37);

/** [90] */
export const FgBrightBlack = code(90);
/** [91] */
export const FgBrightRed = code(91);
/** [92] */
export const FgBrightGreen = code(92);
/** [93] */
export const FgBrightYellow = code(93);
/** [94] */
export const FgBrightBlue = code(94);
/** [95] */
export const FgBrightMagenta = code(95);
/** [96] */
export const FgBrightCyan = code(96);
/** [97] */
export const FgBrightWhite = code(97);

/** [39] */
export const FgDefault = code(39);

/** [40] */
export const BgBlack = code(40);
/** [41] */
export const BgRed = code(41);
/** [42] */
export const BgGreen = code(42);
/** [43] */
export const BgYellow = code(43);
/** [44] */
export const BgBlue = code(44);
/** [45] */
export const BgMagenta = code(45);
/** [46] */
export const BgCyan = code(46);
/** [47] */
export const BgWhite = code(47);

/** [100] */
export const BgBrightBlack = code(100);
/** [101] */
export const BgBrightRed = code(101);
/** [102] */
export const BgBrightGreen = code(102);
/** [103] */
export const BgBrightYellow = code(103);
/** [104] */
export const BgBrightBlue = code(104);
/** [105] */
export const BgBrightMagenta = code(105);
/** [106] */
export const BgBrightCyan = code(106);
/** [107] */
export const BgBrightWhite = code(107);

/** [49] */
export const BgDefault = code(49);


/**
 * Creates an RGB modifier for the foreground.
 * [38;2;r;g;b]
 * @param r Red channel value (0 to 255).
 * @param g Green channel value (0 to 255).
 * @param b Blue channel value (0 to 255).
 */
export const FgRgb = (r: number, g: number, b: number) => code(38, 2, r, g, b);

/**
 * Creates an RGB modifier for the background.
 * [48;2;r;g;b]
 * @param r Red channel value (0 to 255).
 * @param g Green channel value (0 to 255).
 * @param b Blue channel value (0 to 255).
 */
export const BgRgb = (r: number, g: number, b: number) => code(48, 2, r, g, b);

/**
 * Convert HSL to RGB.
 * @param h Hue [0, 359]
 * @param s Saturation [0, 1]
 * @param l Lightness [0, 1]
 * @returns RGB values [0, 255] as array.
 */
function hslToRgb(h: number, s: number, l: number): [number, number, number]
{
	h /= 360;

	let r, g, b;

	if (s == 0)
	{
		r = g = b = l; // achromatic
	}
	else
	{
		const hue2rgb = (p: number, q: number, t: number) =>
		{
			if (t < 0) t += 1;
			if (t > 1) t -= 1;

			if (t < 1 / 6)
				return p + (q - p) * 6 * t;
			if (t < 1 / 2)
				return q;
			if (t < 2 / 3)
				return p + (q - p) * (2 / 3 - t) * 6;

			return p;
		}

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [r, g, b].map(x => Math.round(x * 255)) as [number, number, number];
}

/**
 * Creates an RGB modifier (from HSL) for the foreground.
 * @param h Hue [0, 359]
 * @param s Saturation [0, 1]
 * @param l Lightness [0, 1]
 */
export const FgHsl = (h: number, s: number, l: number) =>
	FgRgb(...hslToRgb(h, s, l));

/**
 * Creates an RGB modifier (from HSL) for the background.
 * @param h Hue [0, 359]
 * @param s Saturation [0, 1]
 * @param l Lightness [0, 1]
 */
export const BgHsl = (h: number, s: number, l: number) =>
	BgRgb(...hslToRgb(h, s, l));