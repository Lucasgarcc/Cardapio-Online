import * as e from './emoji';
import * as c1 from './context';
import * as c2 from './context_v2';
import * as w from './word';

export const version = require('../package.json').version as string;

export type EmojiDict = e.EmojiDict;
export type EmojiEntry = e.EmojiEntry;
export const emoji = e.emoji;

export type ContextEntry = c1.ContextEntry;
export const context = c1.context;
export const contextV1 = c1.context;

export const contextV2 = c2.contextV2;

export type WordTag = w.WordTag;
export type WordDict = w.WordDict;
export type WordEntry = w.WordEntry;
export const word = w.word;
