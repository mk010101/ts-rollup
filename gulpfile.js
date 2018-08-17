/**
 * Created by max.kostin on 21/05/2015
 */

"use strict";

const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject('tsconfig.json');


const browserSync = require("browser-sync");



/* =====================================================================================
    MAIN
 ======================================================================================*/
    gulp.task('default', ['browserSync', 'ts_main', 'watch']);


/* =====================================================================================
 TYPESCRIPT
 ======================================================================================*/

gulp.task("ts_main",function () {
    clear();
    let tsRes = gulp.src("./src/ts/**/*.ts")
        .pipe(tsProject());

    return tsRes.js.pipe(gulp.dest("./tmp_js/"))
        //.pipe(browserSync.reload({stream: true}));


});


/* =====================================================================================
 ROLLUP
 ======================================================================================*/

gulp.task('package', function () {

    return new Promise(async resolve => {

        const rollup = require("./rollup");

        await rollup.build();

        console.log(1)

        browserSync.reload({stream: false});

        console.log(2)

        resolve();

    });



});


/* =====================================================================================
 WATCH
 ======================================================================================*/
gulp.task('watch', function () {
    gulp.watch('./src/ts/**/*.ts', ['ts_main']);
    gulp.watch('./tmp_js/**/*.*', ['package']);

});


/* =====================================================================================
 BROWSER SYNC
 ======================================================================================*/
gulp.task("browserSync", function () {
    clear();
    browserSync({
        server: {
            baseDir: './bin'
        }
    })
});


/* =====================================================================================
 CLEARS CONSOLE WINDOW
 ======================================================================================*/
function clear() {
    process.stdout.write("\u001b[2J\u001b[0;0H");
}








