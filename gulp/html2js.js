/**
 * Created by shaikp on 10/14/2014.
 */
'use strict';
var ngHtml2Js = require('gulp-ng-html2js'),
    gulp = require('gulp');
gulp.task('html2js', function () {
    gulp.src("./app/**/*.directive.html")
        .pipe(ngHtml2Js({
            moduleName: "typeMaster.cachedTemplates",
            prefix: ""
        }))
        .pipe(gulp.dest("./app/template-cache"));
});