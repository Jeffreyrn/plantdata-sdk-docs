'use strict'
const src = '../sdk/docs'
const docs = '.'
const del = require('del')
const gulp = require('gulp')

gulp.task('build', function () {
    return gulp.src([src + '/**/*']).pipe(gulp.dest(docs))
})
