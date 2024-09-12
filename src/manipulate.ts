/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
    // TODO : Start your code here
    // throw new Error("Not implemented");

    // check is empty
    if (!text.trim()) {
        return [];
    }
    // single char
    else if (text.length == 1) {
        return [text];
    }

    return [];
}
