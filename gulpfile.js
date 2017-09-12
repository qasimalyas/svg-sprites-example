var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

// Basic configuration example
var config = {
  mode: {
    css: {
      // Activate the «css» mode
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};

gulp.task("sprite", function() {
  return gulp
    .src("**/*.svg", { cwd: "src" })
    .pipe(svgSprite(config))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["sprite"]);
