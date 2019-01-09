'use strict'
const src = '../sdk/docs'
const config = require('../sdk/docs/hiekn-config.json')
const docs = './dist/' + config.version;
const del = require('del')
const gulp = require('gulp')

gulp.task('build', ['clear'], function () {
    return gulp.src([src + '/**/*']).pipe(gulp.dest(docs))
})

gulp.task('clear', function (cb) {
    return del([docs + '/**/*'], cb)
})
