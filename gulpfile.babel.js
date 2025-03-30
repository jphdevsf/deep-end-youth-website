const { src, dest, series } = require('gulp')
const fs = require('fs')
const path = require('path')
const purgecss = require('gulp-purgecss')
const pug = require('pug')
const sass = require('gulp-sass')(require('sass'))
const babel = require('gulp-babel')

const compileCss = () => {
  return src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./docs/css'))
}

const compileJs = () => {
  return src('./src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(dest('./docs/js'))
}

const uncss = () => {
  return src('./docs/css/**/*.css')
    .pipe(
      purgecss({
        content: ['./docs/*.html'],
      })
    )
    .pipe(dest('./docs/css'))
}

const compileHtml = (done) => {
  const inputFilePath = './src/index.pug'
  const outputFilePath = './docs/index.html'
  const compiledHtml = pug.renderFile(inputFilePath, { pretty: true })
  const outputDir = path.dirname(outputFilePath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  fs.writeFileSync(outputFilePath, compiledHtml)
  done()
}

const taskGroup = series([
  compileHtml,
  compileCss, 
  compileJs,  
  uncss,      
])

export {
  taskGroup as default,
  compileCss,
  compileJs,
}
