# norton-rating [![NPM version][npm-image]][npm-url]

> Get the safety rating of a site from Norton Safe Web

## Installation

```sh
$ npm install --save norton-rating
```

## Usage

```js
const nortonRating = require("norton-rating");

nortonRating("https://google.com", (err, rating) => {
  if (err) console.log(err);

  console.log(rating);
  // will print 'safe', 'warning' or 'untested'
});
```

## License

MIT © [Adam Kelly](https://adamisntdead.com)

[npm-image]: https://badge.fury.io/js/norton-rating.svg
[npm-url]: https://npmjs.org/package/norton-rating
