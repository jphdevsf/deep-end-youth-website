# Deep End Youth Static Site Generator

This repository contains the Node.js app for generating and deploying a static one-page website for the band **Deep End Youth**. The site features links to various streaming and purchasing platforms and is built with modern web technologies.

## Project Overview
- The app generates static **HTML**, **CSS**, **JavaScript**, and **image assets** into the `/docs` folder.
- The resulting files in `/docs` are served via **GitHub Pages**.
- Built using **Gulp.js** for task automation and build processes.
- Utilizes **Pug**, **SCSS**, and **Babel** for templating, styling, and JavaScript transpilation.

---

## Features
- **Gulp Tasks**:
  - `compileHtml`: Compiles `Pug` templates (`src/index.pug`) to `HTML` in `/docs`.
  - `compileCss`: Compiles `SCSS` files in `src/scss/` to `CSS` in `/docs/css`.
  - `compileJs`: Transpiles `ES6+` JavaScript files in `src/js/` to `ES5` using `Babel`, outputting to `/docs/js`.
  - `uncss`: Removes unused CSS classes from the compiled styles using `PurgeCSS`.
  - `taskGroup`: A sequence of the above tasks that builds all static assets.

- **ESLint Configuration**:
  - Enforces consistent coding style and quality standards.
  - Key rules:
    - **2 spaces** for indentation.
    - **Single quotes** for strings.
    - No extraneous **semicolons**.
  - Automatically fixes linting errors on save via VSCode integration.

---

## Setup and Installation

### Prerequisites
- **Node.js** (LTS recommended: v20.x or later)
- **NPM** (or `Yarn`)
- **Gulp CLI** (if not installed globally):
  ```bash
  npm install -g gulp-cli
