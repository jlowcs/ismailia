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
 * limitations under the License.
 */

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    traceur = require('gulp-traceur'),
    rimraf = require('gulp-rimraf');

var path = {};
path.src = './src';
path.lib = './lib';
path.js = path.src + '/**.js';

gulp.task('clean', function() {
    return gulp.src(path.lib, { read: false })
        .pipe(plumber())
        .pipe(rimraf());
});

gulp.task('build', ['clean'], function() {
    return gulp.src(path.js)
        .pipe(plumber())
        .pipe(traceur({
            experimental: true,
            modules: 'commonjs'
        }))
        .pipe(gulp.dest(path.lib));
});

gulp.task('watch', function() {
    watch({ glob: path.js }, ['build']);
});

gulp.task('default', ['clean', 'build']);
gulp.task('dev', ['default', 'watch']);
