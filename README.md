## flatten

`flatten()` should take mulidimensional arrays and return a one-dimensional array of all of the elements.

```js
const array = [1, [2, 3], 4];

flatten(array); // returns [1, 2, 3, 4];
```

This should work regardless of how deep the array is nested.

```js
const array = [[1, [[2, 3]], [4]]];

flatten(array); // returns [1, 2, 3, 4];
```
