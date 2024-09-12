import { countSmilyFace } from './smily';

describe('countSmilyFace', () => {
    it('should return: 0', () => {
        expect(countSmilyFace([])).toStrictEqual(0);
    });

    it('should return: 2', () => {
        expect(countSmilyFace([':)', ';(', ';}', ':-D'])).toStrictEqual(2);
    });

    it('should return: 3', () => {
        expect(countSmilyFace([';D', ':-(', ':-)', ';~)'])).toStrictEqual(3);
    });

    it('should return: 1', () => {
        expect(countSmilyFace([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(
            1,
        );
    });

    it('should return: 1', () => {
        expect(countSmilyFace([':)', ':(', ':>'])).toStrictEqual(1);
    });
});
