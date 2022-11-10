const languages = require('./languages');
const { langOptions, caseOptions } = require('./utils');

const requiredInput = (param) => {
  throw new Error(`${param} is required.`);
};

const ruppesInWord = (
  value = requiredInput('value'),
  { lang = 'English', outputCase = 'Title' } = {}
) => {
  lang = langOptions.includes(lang) ? lang : 'English';
  outputCase = caseOptions.includes(outputCase) ? outputCase : 'Title';

  let fraction = Math.round(frac(value) * 100);
  let fractionText = '';

  if (fraction > 0) {
    fractionText = ` ${languages['and'][lang]} ${convertNumber(
      fraction,
      lang
    )} ${languages['Paisa'][lang]}`;
  }

  let output = `${convertNumber(value, lang)} ${
    languages['Rupees'][lang]
  }${fractionText} ${languages['Only'][lang]}`;

  if (lang != 'English') {
    output.split('  ').forEach((word) => {
      if (word.includes('-')) {
        output = output.replace(
          word.trim(),
          languages['betweens'][lang][word.trim()]
        );
      }
    });
  }

  return outputCase == 'Title'
    ? output
    : outputCase == 'Upper'
    ? output.toUpperCase()
    : outputCase == 'Lower'
    ? output.toLowerCase()
    : output;
};

const frac = (f) => f % 1;
const convertNumber = (number, lang = 'English') => {
  if (number < 0 || number > 999999999) {
    throw new Error(`Number out of range!`);
  }
  let Gn = Math.floor(number / 10000000); /* Crore */
  number -= Gn * 10000000;
  let kn = Math.floor(number / 100000); /* lakhs */
  number -= kn * 100000;
  let Hn = Math.floor(number / 1000); /* thousand */
  number -= Hn * 1000;
  let Dn = Math.floor(number / 100); /* Tens (deca) */
  number = number % 100; /* Ones */
  let tn = Math.floor(number / 10);
  let one = Math.floor(number % 10);
  let res = '';

  if (Gn > 0) {
    res += convertNumber(Gn, lang) + ` ${languages['Crore'][lang]}`;
  }
  if (kn > 0) {
    res +=
      (res == '' ? '' : ' ') +
      convertNumber(kn, lang) +
      ` ${languages['Lakh'][lang]}`;
  }
  if (Hn > 0) {
    res +=
      (res == '' ? '' : ' ') +
      convertNumber(Hn, lang) +
      ` ${languages['Thousand'][lang]}`;
  }

  if (Dn) {
    res +=
      (res == '' ? '' : ' ') +
      convertNumber(Dn, lang) +
      ` ${languages['Hundred'][lang]}`;
  }

  let ones = languages['ones'][lang];
  let tens = languages['tens'][lang];

  if (tn > 0 || one > 0) {
    if (res != '') {
      res += ` ${languages['and'][lang]} `;
    }
    if (tn < 2) {
      res += ones[tn * 10 + one];
    } else {
      res += tens[tn];
      if (one > 0) {
        res += '-' + ones[one];
      }
    }
  }

  if (res == '') {
    res = languages['zero'][lang];
  }

  return res;
};

module.exports = ruppesInWord;
