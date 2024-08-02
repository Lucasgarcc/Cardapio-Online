import * as assert from 'assert';

export function assertSorted(actual: string[], message?: string) {
    const expected = Array.from(actual);
    expected.sort();
    assert.deepStrictEqual(actual, expected, message);
}

export function emojiIdToFieldName(id: string): string {
    return `_${id.replace('-', '_')}`;
}