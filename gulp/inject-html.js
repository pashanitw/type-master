var gulp = require('gulp'),
    buildConfig = require('../config/build.config.js'),
    inject = require("gulp-inject");


gulp.task('inject-debug', function () {
    console.log(buildConfig.getThirdParthJsFiles());
    return gulp.src('index.html')
        .pipe(inject(gulp.src(buildConfig.getThirdParthJsFiles(), {read: false}),
            {
                ignorePath: 'app',
                addRootSlash: false,
                starttag: '<!-- inject:bower:{{ext}} -->'
            }))
        .pipe(inject(gulp.src(buildConfig.typeMasterFiles, {read: false}),
            {
                ignorePath: 'app',
                addRootSlash: false,
                starttag: '<!-- inject:application:{{ext}} -->'
            }))
        .pipe(gulp.dest("./app"));
});
