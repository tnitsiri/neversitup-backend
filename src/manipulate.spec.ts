import { manipulate } from './manipulate';

describe('manipulate', () => {
    // it('should return: []', () => {
    //     expect(manipulate('')).toStrictEqual([]);
    //     expect(manipulate('    ')).toStrictEqual([]);
    // });

    // it('should return: [\'a\']', () => {
    //     const result: string[] = manipulate('a');

    //     expect(result).toStrictEqual(['a']);
    // });

    // it('should return: [\'ab\', \'ba\']', () => {
    //     const result: string[] = manipulate('ab');

    //     expect(result).toStrictEqual(['ab', 'ba']);
    // });

    it("should return: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']", () => {
        const result: string[] = manipulate('abc');

        expect(result).toStrictEqual([
            'abc',
            'acb',
            'bac',
            'bca',
            'cab',
            'cba',
        ]);
    });

    // it('should return: [\'aabb\', \'abab\', \'abba\', \'baab\', \'baba\', \'bbaa\']', () => {
    //     const result: string[] = manipulate('aabb');

    //     expect(result).toStrictEqual([
    //         'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa',
    //     ]);
    // });
});
