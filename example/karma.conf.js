/* Copyright 2014 Jack Wakefield
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.;
 */

module.exports = function(config) {
    config.set({
        // include the Traceur and RequireJS frameworks
        frameworks: ['jasmine', 'traceur', 'requirejs'],

        files: [
            // add the source files, and test specs to Karma's output directory
            // but don't include them in the DOM 
            { pattern: 'src/**/*.js', included: false },
            { pattern: 'test/**/*.spec.js', included: false },

            '../bower_components/traceur-runtime/traceur-runtime.js',

            // add the test-main.js file to the DOM which will load the required
            // files
            'test/test-main.js'
        ],

        preprocessors: {
            // don't preprocess the src files with Traceur as ismailia will
            // compile them
            'src/**/*.js': ['coverage'],

            // preprocess the tests with the Traceur plugin
            'test/**/*.spec.js': ['traceur']
        },

        reporters: ['dots', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Firefox', 'Chrome'],
        captureTimeout: 60000,
        singleRun: true,

        // set Traceur to compile the test/** scripts as AMD modules
        traceurPreprocessor: {
            options: {
                experimental: true,
                modules: 'amd'
            }
        },

        coverageReporter: {
            // configure the reporter to use ismailia for JavaScript coverage
            instrumenter: {
                '**/*.js': 'ismailia'
            },
            reporters: [
                {
                    type: 'lcov',
                    dir: 'coverage/'
                },
                {
                    type: 'text'
                }
            ]
        }
    });
};
