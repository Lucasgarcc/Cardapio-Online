import * as assert from 'assert';

import { context } from "../context";
import { contextV2 } from "../context_v2";
import { emoji } from "../emoji";
import { word } from "../word";
import { assertSorted, emojiIdToFieldName } from "./util";

suite('Context data', () => {
    const allContexts = [
        { name: "context", data: context },
        { name: "contextV2", data: contextV2 },
    ];

    suite('should be ordered', () => {
        for (const { name, data } of allContexts) {
            for (const entry of data) {
                ((entry, name) => {
                    test(`(${name}) entry with keywords: ${entry.keyword.join(',')}`, () => {
                        assertSorted(entry.keyword, `(${name}) keyword: ${entry.keyword.join(',')}`);
                        const ids = entry.emoji.map(x => x.id);
                        assertSorted(ids, `(${name}) emoji: ${ids.join(',')}`);
                    });
                })(entry, name);
            }
        }
    });

    suite('should reference defined emojis', () => {
        for (const { name, data } of allContexts) {
            for (const entry of data) {
                ((entry, name) => {
                    test(`(${name}) entry with keywords: ${entry.keyword.join(',')}`, () => {
                        entry.emoji.forEach(e => assert.ok((emoji as any)[emojiIdToFieldName(e.id)], `(${name}) unknown emoji id: ${e.id}`));
                    });
                })(entry, name);
            }
        }
    });

    suite('should reference defined words', () => {
        for (const { name, data } of allContexts) {
            for (const entry of data) {
                ((entry, name) => {
                    test(`(${name}) entry with keywords: ${entry.keyword.join(',')}`, () => {
                        entry.keyword.forEach(kw => assert.ok((word as any)[kw], `(${name}) unknown word: ${kw}`));
                    });
                })(entry, name);
            }
        }
    });
});
