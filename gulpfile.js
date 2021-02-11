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
    js: ['src/js/tmp/main.js', 'src/js/modernizr.min.js', 'src/js/plugins.js'],
    ico: [sourceFolder + '/ico/*.+(png|jpg|gif|ico|svg|webp)', sourceFolder + '/favicon.ico'],
    img: sourceFolder + '/img/*.+(png|jpg|gif|ico|svg|webp)',
  },
  watch: {
    html: sourceFolder + '/**/*.html',
    css: sourceFolder + '/scss/**/*.scss',
    ico: [sourceFolder + '/ico/*.+(png|jpg|gif|ico|svg|webp)', sourceFolder + '/favicon.ico'],
    img: sourceFolder + '/**/*.+(png|jpg|gif|ico|svg|webp)',
  },
  scripts: {
    main: sourceFolder + '/js/main.js',
    bundleMap: sourceFolder + '/js/tmp/main.map.js',
    bundled: sourceFolder + '/js/tmp/main.js',
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

// функции для тасков
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

gulp.task('browser_sync', function () {
  browserSync.init({
    server: {
      baseDir: './' + projectFolder + '/'
    },
    port: 3000,
    browser: 'firefox'
  });
});

gulp.task('js', function () {
  return src(path.src.js)
  // return src(['src/js/tmp/main.js', 'src/js/**/*.js', '!src/js/tmp/*.js', '!src/js/main.js'])
    .pipe(babel())
    .pipe(fileInclude())
    .pipe(uglify)
    .pipe(dest(path.build.js));
});

gulp.task('mapCopy', function () {
  return src(path.scripts.bundleMap)
    .pipe(dest(path.build.js));
});

gulp.task('icons', function () {
  return src(path.src.ico[0])
    .pipe(dest(path.build.ico[0]))
    .pipe(browserSync.stream());
});

gulp.task('files', function () {
  return src([sourceFolder + '/browserconfig.xml', sourceFolder + '/humans.txt',
    sourceFolder + '/robots.txt', sourceFolder + '/site.webmanifest', sourceFolder + '/LICENSE', path.src.ico[1]])
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
});

gulp.task('watchFiles', function () {
  gulp.watch('src/**/*.html', html);
  gulp.watch('src/scss/**/*.scss', css);
  gulp.watch('src/img/*.+(png|jpg|gif|ico|svg|webp)', images);
  // todo gulp.watch('src/js/main,js', npm update)
});

gulp.task('clean', function () {
  return del(path.clean);
});

gulp.task('linter', function () {
  return src([sourceFolder + '/js/**/*.js', '!' + sourceFolder + '/js/**/*.min.js', '!' + sourceFolder + '/js/tmp/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

// таски
// gulp.task('build', gulp.series(clean, bundle, gulp.parallel(bundleJs, js, css, html, files, images, icons)));
gulp.task('build', gulp.series('clean', 'js',  gulp.parallel('mapCopy', css, html, 'files', images, 'icons')));
// gulp.task('test', gulp.series('linter', 'build'));
// gulp.task('watch', gulp.parallel('build', 'browser_sync'));
gulp.task('server', gulp.parallel('watchFiles', 'browser_sync'));
gulp.task('default', gulp.parallel('build'));
// gulp.task('bundle', gulp.series('clean', 'bundleFiles', 'mapCopy'));
// browserify src/js/main.js --debug | exorcist src/js/tmp/bundle.map.js > src/js/tmp/main.js
