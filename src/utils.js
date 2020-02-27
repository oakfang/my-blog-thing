import afinn165 from 'afinn-165';

const NON_WHITE_SPACE_CHAR = /\S/;

export const hasNonWhitespace = text => NON_WHITE_SPACE_CHAR.test(text);

export const [positiveWords, negativeWords] = Object.entries(afinn165).reduce(
  (categories, [word, score]) => {
    const [positiveWords, negativeWords] = categories;
    if (score > 0) {
      positiveWords.push(word);
    } else {
      negativeWords.push(word);
    }
    return categories;
  },
  [[], []]
);

export const positiveRegex = new RegExp(
  `(?:^|\\W)(${positiveWords
    .sort((a, b) => b.length - a.length)
    .join('|')})(?:\\W|$)`,
  'ig'
);

export const negativeRegex = new RegExp(
  `(?:^|\\W)(${negativeWords
    .sort((a, b) => b.length - a.length)
    .join('|')})(?:\\W|$)`,
  'ig'
);
