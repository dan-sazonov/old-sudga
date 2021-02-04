const projectFolder = 'dist';
const sourceFolder = 'src';
const path = {
  build: {
    html: projectFolder + '/',
    css: projectFolder + '/css/',
    js: projectFolder + '/js/',
    img: projectFolder + '/',
  },
  src: {
    html: [sourceFolder + '/**/*.html', '!' + sourceFolder + '/components/_*.html'],
    css: sourceFolder + '/scss/styles.scss',
    js: sourceFolder + '/js/**/*.js',
    img: sourceFolder + '/**/*.{jpg,png,svg,gif,ico,webp}',
  },
  watch: {
    html: sourceFolder + '/**/*.html',
    css: sourceFolder + '/scss/**/*.scss',
    js: sourceFolder + '/js/**/*.js',
    img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
  },
  clean: './' + projectFolder + '/'
};

// переменные плагинов
const {src, dest} = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const groupMedia = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default();
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-html');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');

// функции для тасков
function browser_sync() {
  browserSync.init({
    server: {
      baseDir: './' + projectFolder + '/'
    },
    port: 3000,
    browser: 'firefox'
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function files() {
  return src([sourceFolder + '/browserconfig.xml', sourceFolder + '/humans.txt',
    sourceFolder + '/robots.txt', sourceFolder + '/site.webmanifest', sourceFolder + '/LICENSE'])
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function css() {
  return src(['node_modules/bootstrap/scss/bootstrap.scss', path.src.css])
    .pipe(sass())
    .pipe(groupMedia())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true
      })
    )
    .pipe(cleanCSS())
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(babel())
    .pipe(fileInclude())
    .pipe(uglify)
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

function bootstrapJs() {
  return src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 80
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 4
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss'], css);
  gulp.watch(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'], js);
}

function clean() {
  return del(path.clean);
}

function linter() {
  return src(sourceFolder + '/**/*.js',)
    .pipe(eslint())
    .pipe(eslint.format());
}

// таски
gulp.task('build', gulp.series(clean, gulp.parallel(js, bootstrapJs, css, html, files, images)));
gulp.task('test', gulp.series(linter, 'build'));
gulp.task('watch', gulp.parallel('build', browser_sync));
gulp.task('run', gulp.parallel('build', watchFiles, browser_sync));
gulp.task('default', gulp.parallel('run'));
