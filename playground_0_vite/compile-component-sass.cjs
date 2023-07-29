const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const glob = require("glob");
const chokidar = require('chokidar');

const srcDir = path.join(__dirname, 'src');

function compileSassFile(filePath) {
  const fileExt = path.extname(filePath);
  if(fileExt !== '.scss') return;

  // const srcPath = path.relative(srcDir, filePath);
  const cssFileName = path.basename(filePath, '.scss') + '.css';
  const compilePath = path.dirname(filePath).replace('/styles/scss', '/styles/');
  const compiledCSS = compilePath + cssFileName;

  sass.render(
    {
      file: filePath,
      outFile: compiledCSS,
      outputStyle: 'expanded', // Change to 'compressed' for minified output
    },
    (error, result) => {
      if (error) {
        console.error(`Error compiling ${filePath}: ${error.message}`);
      } else {
        fs.writeFileSync(compiledCSS, result.css);
        console.log(`Compiled ${cssFileName} to ${compilePath}`);
      }
    }
  );
}

function buildSassFiles() {
  const scssFiles  = glob.sync("src/components/**/scss/*.scss");
  scssFiles.forEach((file) => {
    compileSassFile(file);
  });
}

function watchSassFiles() {
  chokidar
    .watch(srcDir, { ignoreInitial: true, persistent: true, ignored: /[\/\\]\./ })
    .on('add', compileSassFile)
    .on('change', compileSassFile)
    .on('unlink', (filePath) => {
      const deleteCSSMatch = false;
      const fileExt = path.extname(filePath);

      if(fileExt !== '.scss') return;
      //We dont want to delete matching css file if we delete the scss file
      if(!deleteCSSMatch) return;

      const srcPath = path.relative(srcDir, filePath);
      const cssFileName = path.basename(filePath, '.scss') + '.css';
      const compilePath = path.dirname(filePath).replace('/styles/scss', '/styles/');
      const outputPath = compilePath + cssFileName;

      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
        console.log(`Deleted ${outputPath}`);
      }
    });
}

watchSassFiles();
