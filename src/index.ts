import { magenta, bgMagenta, bgCyan, cyan, bgRed, red } from 'chalk';
import { manipulate } from './manipulate';
import { findOddNumber } from './odd-number';
import { countSmilyFace } from './smily';

// manipulate
console.log(bgMagenta('MANIPULATE'));

const _manipulate = (input: string) => {
    const result: string[] = manipulate(input);

    console.log(magenta(`INPUT: ${input} => RESULT:`), result);
};

_manipulate('');
_manipulate('a');
_manipulate('ab');
_manipulate('abc');
_manipulate('aabb');

// find odd number
console.log(bgCyan('\nFIND ODD NUMBER'));

const _findOddNumber = (inputs: number[]) => {
    const result: number | null = findOddNumber(inputs);

    console.log(cyan(`INPUT:`), inputs, cyan(`=> RESULT:`), result);
};

_findOddNumber([]);
_findOddNumber([-1, 0, 1.5]);
_findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
_findOddNumber([7]);
_findOddNumber([0]);
_findOddNumber([1, 1, 2]);
_findOddNumber([0, 1, 0, 1, 0]);
_findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// count smily face
console.log(bgRed('\nCOUNT SMILY FACE'));

const _countSmilyFace = (inputs: string[]) => {
    const result: number | null = countSmilyFace(inputs);

    console.log(red(`INPUT:`), inputs, red(`=> RESULT:`), result);
};

_countSmilyFace([]);
_countSmilyFace([':)', ';(', ';}', ':-D']);
_countSmilyFace([';D', ':-(', ':-)', ';~)']);
_countSmilyFace([';]', ':[', ';*', ':$', ';-D']);
_countSmilyFace([':)', ':(', ':>']);
