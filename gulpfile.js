const projectFolder = 'dist';
const sourceFolder = 'src';
const path = {
  build: {
    html: `${projectFolder}/`,
    css: `${projectFolder}/css/`,
    js: `${projectFolder}/js/`,
    ico: [`${projectFolder}/ico/`, `${projectFolder}/`],
    img: `${projectFolder}/img/`,
  },
  src: {
    html: [`${sourceFolder}/legacy/*.html`, `${sourceFolder}/*.html`, `!${sourceFolder}/components/_*.html`],
    css: `${sourceFolder}/scss/styles.scss`,
    js: ['src/js/tmp/main.js', 'src/js/modernizr.min.js', 'src/js/plugins.js'],
    ico: [`${sourceFolder}/ico/*.+(png|jpg|gif|ico|svg|webp)`, `${sourceFolder}/favicon.ico`],
    img: `${sourceFolder}/img/*.+(png|jpg|gif|ico|svg|webp)`,
    fonts: `${sourceFolder}/**/*.+(ttf|otf|woff|eot|woff2)`,
  },
  watch: {
    html: `${sourceFolder}/**/*.html`,
    css: `${sourceFolder}/scss/**/*.scss`,
    ico: [`${sourceFolder}/ico/*.+(png|jpg|gif|ico|svg|webp)`, `${sourceFolder}/favicon.ico`],
    img: `${sourceFolder}/**/*.+(png|jpg|gif|ico|svg|webp)`,
    js: `${sourceFolder}/**/*.js`,
  },
  scripts: {
    main: `${sourceFolder}/js/main.js`,
    modernizr: `${sourceFolder}/js/modernizr.min.js`,
  },
  clean: `./${projectFolder}/`,
  lint: [`${sourceFolder}/js/**/*.js`, './*.js'],
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
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-html');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const {exec} = require('child_process');

function html() {
  return src(path.src.html)
    .pipe(fileInclude())
    .pipe(webphtml())
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

function js(done) {
  exec('npm run webpack-dev');
  done();
  return src('./').pipe(browserSync.stream());
}

gulp.task('browser_sync', () => {
  browserSync.init({
    server: {
      baseDir: `./${projectFolder}/`
    },
    port: 3000,
    browser: 'firefox'
  });
});

gulp.task('jsProd', (done) => {
  exec('npm run webpack-build');
  done();
  return src('./').pipe(browserSync.stream());
});

gulp.task('icons', () => src(path.src.ico[0])
  .pipe(dest(path.build.ico[0]))
  .pipe(browserSync.stream()));

gulp.task('files', () => src([`${sourceFolder}/browserconfig.xml`, `${sourceFolder}/humans.txt`,
  `${sourceFolder}/robots.txt`, `${sourceFolder}/site.webmanifest`, `${sourceFolder}/LICENSE.txt`, path.src.ico[1],
  path.src.fonts])
  .pipe(dest(path.build.html))
  .pipe(browserSync.stream()));

gulp.task('copyLibs', () => src([path.scripts.modernizr])
  .pipe(dest(path.build.js))
  .pipe(browserSync.stream()));

gulp.task('watchFiles', () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.css, css);
  gulp.watch(path.watch.img, images);
  gulp.watch(path.watch.js, js);
});

gulp.task('clean', () => del(path.clean));

gulp.task('linter', () => src(path.lint)
  .pipe(eslint())
  .pipe(eslint.format()));

gulp.task('build', gulp.series('clean', js, gulp.parallel(html, css, images, 'icons', 'files', 'copyLibs')));
gulp.task('prod', gulp.series('clean', 'jsProd', gulp.parallel(html, css, images, 'icons', 'files', 'copyLibs')));
gulp.task('dev', gulp.series('linter', gulp.parallel('build', 'watchFiles', 'browser_sync')));
gulp.task('default', gulp.parallel('dev'));
