First, `npm ci`. Then,

## 1) Observe source map support

Without changes, `npm test` yields the following (excerpt):

```
  1) #makeSandwich
       does not throw:
     Error: no ingredients
      at makeSandwich (a.js:2:9)
      at Context.<anonymous> (test.js:5:5)
      at processImmediate (internal/timers.js:439:21)
```

## 2) Enable `rollup-plugin-stub`

Uncomment the plugin inclusion in rollup.plugin.js. Then rerun `npm test`. One finds:

```
  1) #makeSandwich
       does not throw:
     Error: no ingredients
      at makeSandwich (dist/bundle.js:2:9)
      at Context.<anonymous> (dist/bundle.js:7:5)
      at processImmediate (internal/timers.js:439:21)
```

