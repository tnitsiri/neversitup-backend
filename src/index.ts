import { magenta, bgMagenta } from 'chalk';
import { manipulate } from './manipulate';

// manipulate
const _manipulate = (input: string) => {
    // result
    const result: string[] = manipulate(input);

    console.log(magenta(`INPUT: ${input} => RESULT:`), result);
};

// manipulate
console.log(bgMagenta('MANIPULATE'));

_manipulate('');
_manipulate('a');
_manipulate('ab');
_manipulate('abc');
_manipulate('aabb');
