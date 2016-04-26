
Test data for gulp-install issue number 38.

https://github.com/slushjs/gulp-install/issues/38

Get the dependencies
```
npm install
```

Try running gulp-install for all foo folders with
```
gulp broken
```
Note that the dependencies do not get installed.

Try running gulp-install in smaller batches
```
gulp works
```
Note that this works.
