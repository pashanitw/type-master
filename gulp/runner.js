/**
 * Created by shaikp on 16/10/14.
 */

var gulp=require('gulp');

gulp.task('debug-build',['html2js','inject-debug', 'partials','styles','watch']);