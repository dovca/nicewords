import {Shape as S} from './shape';

export type LetterShape = [number, number, number, number, number, number];

export const letters: Record<string, LetterShape> = {
	A: [S.None, S.Corner, S.None, S.End, S.None, S.End],
	B: [S.Flat, S.Flat, S.Round, S.Flat, S.Flat, S.Round],
	C: [S.Round, S.Round, S.Round, S.Round, S.Round, S.Round],
	D: [S.Flat, S.Flat, S.Round, S.Flat, S.Flat, S.Round],
	E: [S.Flat, S.Flat, S.Flat, S.Flat, S.Flat, S.Flat],
	F: [S.Flat, S.Flat, S.Flat, S.End, S.None, S.None],
	G: [S.Round, S.Round, S.Round, S.Round, S.Round, S.Round],
	H: [S.End, S.None, S.End, S.End, S.None, S.End],
	I: [S.Flat, S.Flat, S.Flat, S.Flat, S.Flat, S.Flat],
	J: [S.None, S.None, S.End, S.Round, S.Round, S.Round],
	K: [S.End, S.None, S.End, S.End, S.None, S.End],
	L: [S.End, S.None, S.None, S.Flat, S.Flat, S.Flat],
	M: [S.Corner, S.None, S.Corner, S.End, S.None, S.End],
	N: [S.Corner, S.None, S.End, S.End, S.None, S.Corner],
	O: [S.Round, S.Round, S.Round, S.Round, S.Round, S.Round],
	P: [S.Flat, S.Flat, S.Round, S.End, S.None, S.None],
	Q: [S.Round, S.Round, S.Round, S.Round, S.Round, S.Round | S.End],
	R: [S.Flat, S.Flat, S.Round, S.End, S.None, S.End],
	S: [S.Round, S.Round, S.Round, S.Round, S.Round, S.Round],
	T: [S.Flat, S.Flat, S.Flat, S.None, S.End, S.None],
	U: [S.End, S.None, S.End, S.Round, S.Round, S.Round],
	V: [S.End, S.None, S.End, S.None, S.Corner, S.None],
	W: [S.End, S.Corner, S.End, S.Corner, S.None, S.Corner],
	X: [S.End, S.None, S.End, S.End, S.None, S.End],
	Y: [S.End, S.None, S.End, S.None, S.End, S.None],
	Z: [S.Flat, S.Flat, S.Flat, S.Flat, S.Flat, S.Flat],
}
