# testcafe-browser-provider-nightmare
[![Build Status](https://travis-ci.org/ryx/testcafe-browser-provider-nightmare.svg)](https://travis-ci.org/ryx/testcafe-browser-provider-nightmare)

This is the [nightmare](https://github.com/segmentio/nightmare) browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).
It provides an electron-based, headless Chrome browser environment for running your tests in.

## Install

```
npm install testcafe-browser-provider-nightmare
```

## Usage

When you run tests from the command line, use the provider name when specifying browsers:

```
testcafe nightmare 'path/to/test/file.js'
```


When you use API, pass the provider name to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('nightmare')
    .run();
```

## Author
Rico Pfaus
