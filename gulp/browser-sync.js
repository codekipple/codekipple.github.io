var Gulp = require('gulp'),
    BrowserSync = require('browser-sync');

/*
    Browser sync
    ------------
    1. Set the baseDir
    2. Hide the browser sync notification on the front end
*/
Gulp.task('serve', function() {
    BrowserSync({
        server: {
            baseDir: "./"
        }, /* 1 */
        notify: false /* 2 */
    });

    Gulp.watch('sass/**/*.scss', ['styles:dev']);
});
