const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const styleSRC = 'src/sass/style.scss';
const styleDIST = './assets/css';
const styleWatch = 'src/sass/**/*.scss';

gulp.task( 'style', function(done) {

    gulp.src( styleSRC )
        .pipe( sourcemaps.init() )
        .pipe( sass( {
            errorLogToConsole: true,
            outputStyle: 'compressed'
        } ) )
        .on( 'error', console.error.bind( console ) )
        .pipe( autoprefixer( { 
            browsers: [ 'last 2 versions' ],
            cascade: false
        } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( styleDIST ) );
        done();

} );

// gulp.task( 'default', [ 'style' ] );

// gulp.task( 'watch', [ 'default' ] ,function() {
//     gulp.watch( styleWatch, [ 'style' ] );
// } );