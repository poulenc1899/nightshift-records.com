var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');

// Task for building site when something changed:
gulp.task('build', shell.task(['bundle exec jekyll serve --incremental']));

// Task for serving site with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});


// Building for production & pushing site to server
gulp.task('build-production', shell.task('JEKYLL_ENV=production bundle exec jekyll build'));
gulp.task('upload', ['build-production'], shell.task('s3_website push'));
gulp.task('default', ['build', 'serve']);