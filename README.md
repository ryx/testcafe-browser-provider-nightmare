# testcafe-browser-provider-nightmare
[![Build Status](https://travis-ci.org/ryx/testcafe-browser-provider-nightmare.svg)](https://travis-ci.org/ryx/testcafe-browser-provider-nightmare)

This is the [nightmare](https://github.com/segmentio/nightmare) browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).
It provides an electron-based, headless Chrome browser environment for running your tests in. It is popular for being more
solid and reliable than phantomjs, while at the same time giving better performance.


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


## Debugging

It is incredibly useful to be able to see what is happening inside your browser. Nightmare's big advantage over phantomjs is
that you can easily enable a visual output to aid in local debugging. The nightmare provider uses the fairly popular
[debug](https://github.com/visionmedia/debug) library (as does nightmare itself), so you can enable debugging with the
follwoing commandline:

```
DEBUG=* testcafe nightmare 'path/to/test/file.js'
```

This activates the `show` and `openDevTools` options for nightmare, so the browser window becomes visible throughout the test
run and the dev tools are already opened. Well, it also enables debug output for any other module using debug, so you will
get a lot debug messages in the console. I'm still figuring out how to properly use filtering in that case ;) ..

NOTE: When running nightmare from a gulp task (e.g. using `child_process.spawn`) you can use `process.env.DEBUG = '*';` to set the
debug flag in the environment, before spawning the testcafe process. Another option is to already set the variable when executing your
test runner, e.g. `gulp`:

```
DEBUG=* gulp test
```


## Author
Rico Pfaus
