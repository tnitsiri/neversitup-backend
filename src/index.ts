import { magenta, bgMagenta, bgCyan, cyan } from 'chalk';
import { manipulate } from './manipulate';
import { findOddNumber } from './odd-number';

// manipulate
const _manipulate = (input: string) => {
    const result: string[] = manipulate(input);

    console.log(magenta(`INPUT: ${input} => RESULT:`), result);
};

console.log(bgMagenta('MANIPULATE'));

_manipulate('');
_manipulate('a');
_manipulate('ab');
_manipulate('abc');
_manipulate('aabb');

// find odd number
const _findOddNumber = (inputs: number[]) => {
    const result: number | null = findOddNumber(inputs);

    console.log(cyan(`INPUT:`), inputs, cyan(`=> RESULT:`), result);
};

console.log(bgCyan('\nFIND ODD NUMBER'));

_findOddNumber([]);
_findOddNumber([-1, 0, 1.5]);
_findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
_findOddNumber([7]);
_findOddNumber([0]);
_findOddNumber([1, 1, 2]);
_findOddNumber([0, 1, 0, 1, 0]);
_findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
