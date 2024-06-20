var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', defaultTask);

function defaultTask(done) {
    done();
}

gulp.task('minify-css', function(done) {
    return gulp.src('./css/style.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css/'))

        done();
});

gulp.task('htmlmin', function (done) {
    return gulp.src('*.html')
         .pipe(htmlmin({
             collapseWhitespace: true
         }))
        .pipe(gulp.dest('dist/'))

    done();
});