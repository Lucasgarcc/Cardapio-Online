# Git-Emoji Dataset 📑

This repository contains emoji data and contextual keywords associated with them. It is meant to be used, **by everyone**, who needs a reference dataset of emojis applicable in git commit messages.

Note that the `main` branch may get updated at any time without notice.

## Installation

```sh
npm install @git-emoji/dataset-js
```

## Usage

```ts
const dataset = require('@git-emoji/dataset-js')
// or
import * as dataset from '@git-emoji/dataset-js'
```

Three kind of data are available in this package:

- Emoji data
- Contextual data
  - v1
  - v2
- Word data

### Emoji data

Emoji data are available under the `dataset.emoji` field:

```js
// nodejs REPL
> dataset.emoji._bug
{ s: '🐛', id: 'bug' }
> Object.keys(dataset.emoji).length
308
```

### Contextual data

*Contextual* emoji data are also available. Contextual emoji data describe the association between keywords and emojis. You can find them as an array assigned to the fields `dataset.context` and `dataset.contextV2`. 

Note that, the v2 revision has more focused and to-the-point entries, as opposed to the first version (v1) where associations are rather generic and multi-purpose.

This is an example of the contextual data (detailed result might be different):

```js
// nodejs REPL
> dataset.context.length
48
> dataset.context[0]
{
  keyword: [
    'bogus',     'bug',
    'bugfix',    'correct',
    'erroneous', 'fix',
    'incorrect', 'patch',
    'wrong'
  ],
  emoji: [
    { s: '🐞', id: 'beetle' },
    { s: '🐛', id: 'bug' },
    { s: '🗜', id: 'clamp' },
    { s: '🔨', id: 'hammer' },
    { s: '🔧', id: 'wrench' }
  ]
}
```

### Word data

Since words may have other variants with the same semantics, there's the words dataset in the package to help identify other variants. This data is accessible through the `dataset.word` property:

```js
// nodejs REPL
> dataset.word.authorize
{ cover: [ 'authorizing', 'authorization' ], tag: [ 'verb' ] }
> dataset.word.good
{ cover: [], tag: [] }
> Object.keys(dataset.word).length
373
```

## Thank you

Feel free to submit PRs and improve the dataset with your taste. 🍏
