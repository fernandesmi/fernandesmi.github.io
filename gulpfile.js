var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    concat = require('gulp-concat');
 
gulp.task('views', function() {  
  return gulp.src('layout/pug/**/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('layout'))
      .on('end', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src('layout/scss/**/all.scss') 
      .pipe(sass())
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('layout/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'layout'
      },
    })
})

gulp.task('watch', [ 'browserSync', 'sass', 'views'], function (){
    gulp.watch('layout/scss/**/*.scss', ['sass']); 
    gulp.watch('layout/pug/index.pug', ['views']);
    gulp.watch('layout/js/**/*.js', browserSync.reload); 
    // Other watchers
  });