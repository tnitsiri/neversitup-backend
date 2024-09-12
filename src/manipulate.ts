/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
    // permutations
    const permutations = (text: string): string[] => {
        // check is empty
        if (!text.trim()) {
            return [];
        }
        // single char
        else if (text.length == 1) {
            return [text];
        }

        // words
        const words: string[] = [];

        for (let index = 0; index < text.length; index++) {
            // left
            const left: string = `${text.substring(0, index)}${text.substring(index + 1, text.length)}`;

            // new text
            const newText: string[] = permutations(left);

            for (let _index = 0; _index < newText.length; _index++) {
                // word
                const word: string = `${text[index]}${newText[_index]}`;

                words.push(word);
            }
        }

        return words;
    };

    // words
    const words: string[] = permutations(text);

    // result
    const result: string[] = [];

    for (const word of words) {
        if (result.indexOf(word) < 0) {
            result.push(word);
        }
    }

    return result;
}
