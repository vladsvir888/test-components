import gulp from 'gulp';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import gulpif from 'gulp-if';
import config from './config';

export const copyImages = (cb) => {
  gulp.src('app/images/**/*')
    .pipe(gulpif(config.isProd && config.imagesOptimize, imagemin()))
    .pipe(gulp.dest(`${config.dist}/assets/images/`));

  cb();
};

export const convertImagesToWebp = (cb) => {
  gulp.src('app/images/**/*.{jpg,png}')
    .pipe(webp({
      quality: 80,
    }))
    .pipe(gulp.dest(`${config.dist}/assets/images/`));

  cb();
};

export const images = gulp.series(copyImages, convertImagesToWebp);
