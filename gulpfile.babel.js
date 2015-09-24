import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";
import browserSync from "browser-sync";

// Option #1 (source not accessible).
//let cssSrc = "src/*.scss";
//let cssDest = "dist";

// Option #2 (source accessible).
let cssSrc = "dist/test/*.scss";
let cssDest = "dist";

gulp.task("build", () => {
    return gulp.src(cssSrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssDest));
});

gulp.task("serve", ["build"], () => {
    browserSync.create().init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task("default", ["serve"]);