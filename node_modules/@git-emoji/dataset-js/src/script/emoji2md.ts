/**
 * Script to create the contextual list of emoji/words (based on ContextV2), in markdown format.
 */

import * as dataset from '../index';
import { EOL } from 'os';

export function contextV2ToMarkdownTable() {
    const md: string[] = [
        '|Emoji|Meaning|',
        '|-|-|',
    ];
    const br = '<br/>'
    for (const x of dataset.contextV2) {
        const keywordCopy = x.keyword.map(x => dataset.word[x] ? [x, ...dataset.word[x].cover] : []).flat().sort();
        const emojiCopy = Array.from(x.emoji).sort((a, b) => a.id.localeCompare(b.id));
        md.push(`|${emojiCopy.map(x => `${x.s} \`:${x.id}:\``).join(br)}|${keywordCopy.join(br)}|`);
    }
    return md.join(EOL);
}

if (require.main === module) {
    console.log(contextV2ToMarkdownTable());
}