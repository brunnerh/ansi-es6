import * as test from 'tape';
import { code, modify, FgRgb, BgRgb, FgHsl, BgHsl } from '../src/ansi.js';

test('Code', t =>
{
	t.equal(
		code(42),
		`\x1b[42m`
	);
	t.equal(
		code(1, 2, 3),
		`\x1b[1;2;3m`
	);

	t.end();
});

test('Modify', t =>
{
	t.equal(
		modify('hello', code(1), code(2)),
		'\x1b[1m\x1b[2mhello\x1b[0m'
	);
	t.end();
});

test('RGB', t =>
{
	t.equal(
		FgRgb(1,2,3),
		'\x1b[38;2;1;2;3m'
	)
	t.equal(
		BgRgb(1,2,3),
		'\x1b[48;2;1;2;3m'
	)

	t.end();
});

test('HSL', t =>
{
	t.equal(
		FgHsl(0,1,0.5),
		'\x1b[38;2;255;0;0m'
	)
	t.equal(
		FgHsl(0,0,0.5),
		'\x1b[38;2;128;128;128m'
	)
	// CSS mediumpurple
	t.equal(
		FgHsl(260, 0.57, 0.64),
		'\x1b[38;2;146;111;216m'
	);

	// (Correct first number is the important bit, rest uses same function as FG.)
	t.equal(
		BgHsl(0,1,0.5),
		'\x1b[48;2;255;0;0m'
	)

	t.end();
});