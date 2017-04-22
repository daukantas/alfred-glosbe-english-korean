const alfy = require('alfy');

const LANG = 'ko';
const DEFAULT_OUTPUT = [{
  title: "No result found"
}];
const phrase = alfy.input;
const url = 'https://glosbe.com/gapi/translate?from=en&dest=kor&format=json&pretty=true&phrase=' + phrase;

function pickupPhrases(item, input) {
  if (item.phrase) {
    return item.phrase.language === input;
  };
  return false;
}

alfy.fetch(url).then(data => {
  const items = alfy
    .matches(LANG, data.tuc, pickupPhrases)
    .map(item => {
      return {
        title: item.phrase.text,
      };
    });
  items.length ? alfy.output(items) : alfy.output(DEFAULT_OUTPUT);
});