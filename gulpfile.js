const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('build', () => {
 return browserify('client/js')
   .transform(babelify, { presets: ['es2015'] })
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
 gulp.watch('client/**/*.js', ['build']);
});

gulp.task('default', ['watch', 'build']);