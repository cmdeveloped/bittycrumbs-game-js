// gulp dependencies
const { series, parallel, src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");

const serverURL = "http://localhost";
const paths = {
  scss: "./scss/*.scss",
  js: "./js/*.js",
  base: "./index.html"
};

const style = () => {
  return (
    src("scss/main.scss")
      // compress & minify
      .pipe(
        sass({
          outputStyle: "compressed"
        }).on("error", sass.logError)
      )
      // add autoprefixers
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"]
        })
      )
      // rename file
      .pipe(rename("app.min.css"))
      .pipe(dest("./"))
      .pipe(browserSync.stream())
  );
};

const script = () => {
  return src(paths.js)
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(dest("./"));
};

const lint = () => {
  return src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
};

const reload = cb => {
  browserSync.reload();
  cb();
};

const watcher = () => {
  browserSync.init({
    server: true
  });
  watch(paths.scss, style);
  watch(paths.js, series(script, lint, reload));
  watch(paths.base, reload);
};

const tasks = series(style, script, lint);

exports.default = series(tasks, watcher);
