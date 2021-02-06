const projectFolder = 'dist';
const sourceFolder = 'src';
const path = {
  build: {
    html: projectFolder + '/',
    css: projectFolder + '/css/',
    js: projectFolder + '/js/',
    ico: [projectFolder + '/ico/', projectFolder + '/'],
    img: projectFolder + '/img/',
  },
  src: {
    html: [sourceFolder + '/**/*.html', '!' + sourceFolder + '/components/_*.html'],
    css: sourceFolder + '/scss/styles.scss',
    js: [sourceFolder + '/js/**/*.js', '!' + sourceFolder + '/js/tmp/*.js', '!' + sourceFolder + '/js/main.js'],
    ico: [sourceFolder + '/ico/*.+(png|jpg|gif|ico|svg|webp)', sourceFolder + '/favicon.ico'],
    img: sourceFolder + '/img/*.+(png|jpg|gif|ico|svg|webp)',
  },
  watch: {
    html: sourceFolder + '/**/*.html',
    css: sourceFolder + '/scss/**/*.scss',
    js: sourceFolder + '/js/**/*.js',
    ico: [sourceFolder + '/ico/*.+(png|jpg|gif|ico|svg|webp)', sourceFolder + '/favicon.ico'],
    img: sourceFolder + '/**/*.+(png|jpg|gif|ico|svg|webp)',
  },
  clean: './' + projectFolder + '/',
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
const browserify = require('browserify');
const source = require('vinyl-source-stream');

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
    sourceFolder + '/robots.txt', sourceFolder + '/site.webmanifest', sourceFolder + '/LICENSE', path.src.ico[1]])
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function css() {
  return src(path.src.css)
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

function bundle() {
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('src/js/tmp'));
}

function bundleJs() {
  return src('src/js/tmp/main.js')
    .pipe(babel())
    .pipe(fileInclude())
    .pipe(uglify)
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({
        quality: 70,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest(path.build.img))
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
}

function icons() {
  return src(path.src.ico[0])
    .pipe(dest(path.build.ico[0]))
    .pipe(browserSync.stream());
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean() {
  return del(path.clean);
}

function linter() {
  return src(path.watch.js)
    .pipe(eslint())
    .pipe(eslint.format());
}

// таски
gulp.task('build', gulp.series(clean, bundle, gulp.parallel(bundleJs, js, css, html, files, images, icons)));
gulp.task('test', gulp.series(linter, 'build'));
gulp.task('watch', gulp.parallel('build', browser_sync));
gulp.task('run', gulp.parallel('build', watchFiles, browser_sync));
gulp.task('default', gulp.parallel('run'));
