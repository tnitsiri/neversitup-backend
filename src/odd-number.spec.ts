import { findOddNumber } from './odd-number';

describe('findOddNumber', () => {
    it('should return: null', () => {
        expect(findOddNumber([])).toStrictEqual(null);
        expect(findOddNumber([-1, 0, 1.5])).toStrictEqual(null);
        expect(findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual(
            null,
        );
    });

    it('should return: 7', () => {
        expect(findOddNumber([7])).toStrictEqual(7);
    });

    it('should return: 0', () => {
        expect(findOddNumber([0])).toStrictEqual(0);
    });

    it('should return: 2', () => {
        expect(findOddNumber([1, 1, 2])).toStrictEqual(2);
    });

    it('should return: 0', () => {
        expect(findOddNumber([0, 1, 0, 1, 0])).toStrictEqual(0);
    });

    it('should return: 4', () => {
        expect(
            findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
        ).toStrictEqual(4);
    });
});
