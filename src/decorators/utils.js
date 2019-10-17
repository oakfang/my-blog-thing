export function* iterateMatches(regex, text) {
  let matchArr = regex.exec(text);
  while (matchArr !== null) {
    let { index } = matchArr;
    let [match] = matchArr;
    yield { index, match };
    matchArr = regex.exec(text);
  }
}

export const decorateRegex = regex => (contentBlock, callback) => {
  for (let { match, index } of iterateMatches(regex, contentBlock.getText())) {
    callback(index, index + match.length);
  }
};
