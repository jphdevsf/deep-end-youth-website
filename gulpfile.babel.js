import { src, dest } from 'gulp'
import purgecss from 'gulp-purgecss'
// import clean from './tasks/clean.js'
// import { compileMarkdown } from './tasks/compileMarkdown.js'

// const defaultTasks = series(
//   clean,
//   compileMarkdown
// )


const uncss = () => {
    return src('dist/css/**/*.css')
        .pipe(purgecss({
            content: ['dist/*.html']
        }))
        .pipe(dest('dist/css'))
}

export {
  uncss as default
}