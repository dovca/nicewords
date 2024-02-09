import type {LetterShape} from './letters';
import {Shape as S, Position as P} from './shape';

export const nice: [LetterShape, LetterShape][] = [
	[[S.Any, S.Any, S.Flat, S.Any, S.Any, S.Any], [S.Flat, S.Any, S.Any, S.Any, S.Any, S.Any]], // TT
	[[S.Any, S.Any, S.Any, S.Any, S.Any, S.Flat], [S.Any, S.Any, S.Any, S.Flat, S.Any, S.Any]], // LL
	[[S.Any, S.Any, S.Round, S.Any, S.Any, S.Any], [S.Round, S.Any, S.Any, S.Any, S.Any, S.Any]], //DC
	[[S.Any, S.Any, S.Any, S.Any, S.Any, S.Round], [S.Any, S.Any, S.Any, S.Round, S.Any, S.Any]], //DJ
	[[S.Any, S.Any, S.Any, S.Any, S.Any, S.End], [S.Any, S.Any, S.Any, S.End, S.Any, S.Any]], //AX
	[[S.Any, S.Any, S.Any, S.Any, S.Any, S.Round], [S.Any, S.Any, S.Any, S.Round, S.Any, S.Any]],
]

export function areNiceTogether(a: LetterShape, b: LetterShape): boolean {
	return (
		(a[P.TopRight] === b[P.TopLeft] && a[P.BottomRight] === b[P.BottomLeft])
		|| (
			a[P.TopRight] === S.None
			&& a[P.BottomRight] !== S.None
			&& b[P.TopLeft] !== S.None
			&& b[P.BottomLeft] === S.None
		)
		|| (
			a[P.TopRight] !== S.None
			&& a[P.BottomRight] === S.None
			&& b[P.TopLeft] === S.None
			&& b[P.BottomLeft] !== S.None
		)
		|| (
			a[P.BottomRight] & S.End
			&& b[P.TopLeft] === S.None
			&& b[P.BottomLeft] & S.End
		)
	);
}
