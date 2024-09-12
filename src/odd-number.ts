/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number | null {
    // validate
    if (
        numbers.length < 1 ||
        numbers.filter((e) => !Number.isInteger(e)).length > 0
    ) {
        return null;
    }

    // accumulate
    const accumulate: { [key: string]: number } = {};

    for (const number of numbers) {
        const key: string = number.toString();

        if (accumulate[key]) {
            accumulate[key]++;
        } else {
            accumulate[key] = 1;
        }
    }

    // filter odds
    const keys: string[] = Object.keys(accumulate).filter((key) => {
        return accumulate[key] % 2 != 0;
    });

    if (keys.length != 1) {
        return null;
    }

    // odd
    const odd: number = parseInt(keys[0]);

    return odd;
}
