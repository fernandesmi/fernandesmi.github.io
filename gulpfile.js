var gulp = require('gulp'),
    sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
 
gulp.task('views', function() {  
  return gulp.src('app/pug/**/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('app'))
      .on('end', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') 
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
})

gulp.task('watch', [ 'browserSync', 'sass', 'views'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/pug/index.pug', ['views']);
    gulp.watch('app/js/**/*.js', browserSync.reload); 
    // Other watchers
  });