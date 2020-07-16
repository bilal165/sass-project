var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    auto = require('gulp-autoprefixer'),
    zip = require('gulp-zip'),
    git = require('gulp-git'),
    i = 1;

// watch pug files
function html () {
  return gulp.src('./stage/pug/*.pug')
          .pipe(pug())
          .pipe(gulp.dest('./dist/'));
}

// watch sass files
function css () {
  return gulp.src('./stage/sass/main.scss')
          .pipe(sass())
          .pipe(auto())
          .pipe(gulp.dest('./dist/css'));
}

// compress the files into one file
function compress () {
  return gulp.src('./dist/**/*.*')
          .pipe(zip('sass and pug.zip'))
          .pipe(gulp.dest('../'));
}

// git automating
// function myGit() {
  // return gulp.src('./dist/*.*, ./stage/*.*')
          // .pipe(git.add())
          // .pipe(git.commit(`this is commit`));
// }


// the watch function
function watch() {
  // gulp.watch('./stage/**/*.*', myGit);
  gulp.watch('./stage/**/*.pug', html);
  gulp.watch('./stage/**/*.scss', css);
  gulp.watch('./**/*.*', compress);
}

// define the tasks
exports.html = html;
exports.css = css;
exports.compress = compress;
// exports.myGit = myGit;
exports.watch = watch;
