# ismailia ![](http://img.shields.io/david/Spote/ismailia.svg?style=flat-square) ![](http://img.shields.io/david/dev/Spote/ismailia.svg?style=flat-square)

This directory contains an example of using ismailia with karma and jasmine. ES6 scripts are in the `src` directory and ES6 tests are in the `test` directory.

The scripts are compiled with Traceur using the RequireJS module feature, `test/test-main.js` is an ES5 script which loads the tests asynchronously after page load and triggers karma to begin the tests.

## Installation

### Dependencies

The parent folder contains package.json with the node.js dependencies to install. The dependencies required by this example can be installed by running

```sh
$ npm install
$ npm install ismailia
```

This will install the dependencies for this example and the main project.

To install the node.js dependencies solely for the example run

```sh
$ npm install karma
$ npm install karma-chrome-launcher
$ npm install Spote/karma-coverage
$ npm install karma-firefox-launcher
$ npm install karma-jasmine
$ npm install karma-requirejs
$ npm install karma-traceur-preprocessor
```

For the moment, a custom fork of karma-coverage needs to be installed which supports ismailia is an instrumenter.

Finally, the traceur-runtime needs to be installed. This is included in the
`bower.json` file in the parent directory which can be installed by running

```sh
$ npm install bower -g
$ bower install
```

## Usage

Ensure the `karma-cli` package is installed

```sh
$ npm install -g karma-cli
```

Then, in the `example` directory, run either

```sh
$ karma start --browsers Firefox
```

or

```sh
$ karma start --browsers Chrome
```

The example tests will be ran and the coverage report will be written to the `coverage` directory.

## License

> Copyright 2014 Jack Wakefield
>
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
>     http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.