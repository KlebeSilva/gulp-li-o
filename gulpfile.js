const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function compilacaoSass () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest("./build/styles"));
}

function comprimirJS() {
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImg() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


exports.sass = compilacaoSass;
exports.JS = comprimirJS;
exports.comprimir = comprimeImg;
