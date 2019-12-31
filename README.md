# next-dom-find-ancestor
> Find the closest ancestor element that has a specific class.

## installation
```bash
npm install -S @feizheng/next-dom-find-ancestor
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
import '@feizheng/next-dom-find-ancestor';

const el1 = document.querySelector('#target1');
const el2 = document.querySelector('#target2');

nx.domFindAncestor(el1, '.ancestor'); // near
nx.domFindAncestor(el2, '.ancestor'); // far
```

## resources
- https://stackoverflow.com/questions/22119673/find-the-closest-ancestor-element-that-has-a-specific-class
