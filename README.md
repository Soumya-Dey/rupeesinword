<br>
<h1 align="center">₹upees in Word</h1>

<div align="center">

A Node.js package to convert rupees and show in words with support for 9 indian regional languages (Bangla, Hindi, Gujarati, Kannada, Marathi, Odia, Punjabi, Tamil, Telugu).

[![license](https://img.shields.io/npm/l/rupeesinword)](https://github.com/Soumya-Dey/rupeesinword/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/rupeesinword/latest)](https://www.npmjs.com/package/rupeesinword)
[![npm downloads](https://img.shields.io/npm/dm/rupeesinword)](https://www.npmjs.com/package/rupeesinword)
[![github stars](https://badgen.net/github/stars/Soumya-Dey/rupeesinword)](https://github.com/Soumya-Dey/rupeesinword)
[![minified size](https://img.shields.io/bundlephobia/min/rupeesinword)](https://bundlephobia.com/package/rupeesinword)
[![last commit](https://img.shields.io/github/last-commit/Soumya-Dey/rupeesinword)](https://github.com/Soumya-Dey/rupeesinword)
[![closed issues](https://badgen.net/github/closed-issues/Soumya-Dey/rupeesinword)](https://github.com/Soumya-Dey/rupeesinword/issues)
[![open issues](https://badgen.net/github/open-issues/Soumya-Dey/rupeesinword)](https://github.com/Soumya-Dey/rupeesinword/issues)

</div>

## Installing

- Using npm:

```bash
$ npm i rupeesinword
```

- Using yarn:

```bash
$ yarn add rupeesinword
```

## Usage

1. Import the package

```js
const rupeesInWord = require('rupeesinword');
```

2. For English

```js
const value = 1254.76;
const word = rupeesInWord(value);
console.log(word);
// One Thousand Two Hundred and Fifty-Four Rupees and Seventy-Six Paisa Only
```

3. For Other Indian Regional Languages

> Currently 9 regional languages are supported. Following is the list of supported regional languages.

> **Bangla, Hindi, Gujarati, Kannada, Marathi, Odia, Punjabi, Tamil, Telugu**

```js
const value = 1254.76;
const options = { lang: 'Bangla', outputCase: 'Title' };
const word = rupeesInWord(value, options);
console.log(word);
// এক হাজার দুই শত চুয়ান্ন টাকা ছিয়াত্তর পয়সা
```

```js
const value = 1254.76;
const options = { lang: 'Hindi', outputCase: 'Title' };
const word = rupeesInWord(value, options);
console.log(word);
// एक हज़ार दो सौ और चौवन रुपये और छिहत्तर पैसे
```

## Options

| Property   | Type   | Optional | Default   | Accepted Values                                                                                      |
| :--------- | :----- | :------- | :-------- | :--------------------------------------------------------------------------------------------------- |
| lang       | string | Yes      | "English" | "English", "Bangla", "Hindi", "Gujarati", "Kannada", "Marathi", "Odia", "Punjabi", "Tamil", "Telugu" |
| outputCase | string | Yes      | "Title"   | "Title", "Upper", "Lower"                                                                            |

## Issues

If you encounter any issue while using the package please report it here 👉 [Soumya-Dey/rupeesinword/Issues](https://github.com/Soumya-Dey/rupeesinword/issues)

## License

[MIT License](https://github.com/Soumya-Dey/rupeesinword/blob/main/LICENSE)
