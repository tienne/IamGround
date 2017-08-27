const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');

const config = {
  src: path.join(__dirname, 'src'),
  assets: path.join(__dirname, 'src', 'assets')
};

gulp.task('themeBuild', () => {
  let themes = path.join(config.assets, 'styles/themes/*.scss');
  let dist = path.join(config.assets, 'styles');
  return gulp.src(themes)
    .pipe(sass())
    .pipe(gulp.dest(dist));
});