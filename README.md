# Jest Circus Memory Leak

_Still seeing a memory leak when using Jest Circus._

## With Circus

run `yarn test-circus`

```
yarn run v1.15.2
$ JEST_CIRCUS=1 node --expose-gc ./node_modules/.bin/jest --logHeapUsage --runInBand funky
 PASS  tests/funky-84.test.js (24 MB heap size)
 PASS  tests/funky-41.test.js (26 MB heap size)
 PASS  tests/funky-75.test.js (28 MB heap size)
 PASS  tests/funky-91.test.js (30 MB heap size)
 PASS  tests/funky-56.test.js (32 MB heap size)
 PASS  tests/funky-66.test.js (34 MB heap size)
 PASS  tests/funky-51.test.js (37 MB heap size)
 PASS  tests/funky-96.test.js (39 MB heap size)
 PASS  tests/funky-30.test.js (41 MB heap size)
 PASS  tests/funky-29.test.js (44 MB heap size)
 PASS  tests/funky-43.test.js (46 MB heap size)
 PASS  tests/funky-88.test.js (48 MB heap size)
 PASS  tests/funky-64.test.js (51 MB heap size)
 PASS  tests/funky-74.test.js (53 MB heap size)
 PASS  tests/funky-52.test.js (55 MB heap size)
 PASS  tests/funky-19.test.js (58 MB heap size)
 PASS  tests/funky-54.test.js (60 MB heap size)
 PASS  tests/funky-32.test.js (62 MB heap size)
 PASS  tests/funky-26.test.js (64 MB heap size)
 PASS  tests/funky-48.test.js (67 MB heap size)
 PASS  tests/funky-11.test.js (69 MB heap size)
 PASS  tests/funky-83.test.js (71 MB heap size)
 PASS  tests/funky-44.test.js (74 MB heap size)
 PASS  tests/funky-45.test.js (76 MB heap size)
 PASS  tests/funky-60.test.js (78 MB heap size)
 PASS  tests/funky-80.test.js (81 MB heap size)
```

## Without Circus

run `yarn test`

```
yarn run v1.15.2
$ node --expose-gc ./node_modules/.bin/jest --logHeapUsage --runInBand funky
 PASS  tests/funky-84.test.js (28 MB heap size)
 PASS  tests/funky-41.test.js (27 MB heap size)
 PASS  tests/funky-64.test.js (27 MB heap size)
 PASS  tests/funky-51.test.js (27 MB heap size)
 PASS  tests/funky-37.test.js (27 MB heap size)
 PASS  tests/funky-69.test.js (27 MB heap size)
 PASS  tests/funky-30.test.js (27 MB heap size)
 PASS  tests/funky-74.test.js (27 MB heap size)
 PASS  tests/funky-91.test.js (27 MB heap size)
 PASS  tests/funky-79.test.js (27 MB heap size)
 PASS  tests/funky-70.test.js (27 MB heap size)
 PASS  tests/funky-34.test.js (27 MB heap size)
 PASS  tests/funky-61.test.js (27 MB heap size)
 PASS  tests/funky-28.test.js (27 MB heap size)
 PASS  tests/funky-33.test.js (27 MB heap size)
 PASS  tests/funky-80.test.js (27 MB heap size)
 PASS  tests/funky-45.test.js (27 MB heap size)
 PASS  tests/funky-96.test.js (27 MB heap size)
 PASS  tests/funky-54.test.js (27 MB heap size)
 PASS  tests/funky-57.test.js (27 MB heap size)
 PASS  tests/funky-85.test.js (27 MB heap size)
 PASS  tests/funky-81.test.js (27 MB heap size)
 PASS  tests/funky-53.test.js (27 MB heap size)
 PASS  tests/funky-92.test.js (27 MB heap size)
 PASS  tests/funky-97.test.js (27 MB heap size)
 PASS  tests/funky-19.test.js (27 MB heap size)
```
