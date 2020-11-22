# next-dom-find-ancestor
> Find the closest ancestor element that has a specific class.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dom-find-ancestor
```

## usage
```html
<div class="far ancestor">
    <div id="target2">
      <div class="near ancestor">
          <p id="target1">Where am I?</p>
      </div>
    </div>
</div>
```

```js
import '@jswork/next-dom-find-ancestor';

const el1 = document.querySelector('#target1');
const el2 = document.querySelector('#target2');

nx.domFindAncestor(el1, '.ancestor'); // near
nx.domFindAncestor(el2, '.ancestor'); // far
```

## resources
- https://stackoverflow.com/questions/22119673/find-the-closest-ancestor-element-that-has-a-specific-class

## license
Code released under [the MIT license](https://github.com/afeiship/next-dom-find-ancestor/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dom-find-ancestor
[version-url]: https://npmjs.org/package/@jswork/next-dom-find-ancestor

[license-image]: https://img.shields.io/npm/l/@jswork/next-dom-find-ancestor
[license-url]: https://github.com/afeiship/next-dom-find-ancestor/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dom-find-ancestor
[size-url]: https://github.com/afeiship/next-dom-find-ancestor/blob/master/dist/next-dom-find-ancestor.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dom-find-ancestor
[download-url]: https://www.npmjs.com/package/@jswork/next-dom-find-ancestor
