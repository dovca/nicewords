import {letters} from './letters';
import {areNiceTogether} from './nice';

if (Bun.argv.length < 3) {
	console.log('Usage: bun main.ts <length>');
	process.exit(1);
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getNiceLettersFor = (char: string): string[] => {
	const shape = letters[char];
	return Object
		.entries(letters)
		.reduce<string[]>((acc, [key, value]) => {
			if (areNiceTogether(shape, value)) {
				return [...acc, key];
			}

			return acc;
		}, []);
}

function recurse(depth: number, prefix: string, lastLetter: string) {
	const length = prefix.length;

	if (
		length >= 3
		&& prefix[length - 3] === prefix[length - 2]
		&& prefix[length - 2] === prefix[length - 1]
	) {
		return; //Don't allow 3 of the same letter in a row
	}

	if (depth === 1) {
		console.log(`${prefix}`);
	} else {
		for (const next of getNiceLettersFor(lastLetter)) {
			recurse(depth - 1, `${prefix}${next}`, next);
		}
	}
}

for (let i = 0; i < alphabet.length; i++) {
	const letter = alphabet[i];
	recurse(parseInt(Bun.argv[2]), letter, letter);
}
