/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
    // check empty list
    if (texts.length < 1) {
        return 0;
    }

    // count
    let count: number = 0;

    for (const text of texts) {
        if (
            (text.length == 2 || text.length == 3) &&
            /[:;][-~]?[)D]/.test(text)
        ) {
            count++;
        }
    }

    return count;
}
