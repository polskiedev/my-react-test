const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const glob = require("glob");
const chokidar = require('chokidar');
const { format } = require('date-fns'); 

const srcDir = path.join(__dirname, 'src');
const generateFileComment = '/* Generated file */';
const backupFolder = '.backup';

function backupCSS(cssFile) {
  if(fs.existsSync(cssFile)) {
    const existingContent = fs.readFileSync(cssFile, 'utf8');
    if (!existingContent.startsWith(generateFileComment)) {

      const compilePath = path.dirname(cssFile).replace('/styles/scss', `/styles/${backupFolder}`);

      // Move the existing CSS file to the .backup/ directory with date-time in the filename
      const backupDir = path.join(compilePath, '.backup');
      const backupDateTime = format(new Date(), "yyyyMMdd_hhmma");

      const backupFileName = `${path.basename(cssFile, '.css')}.${backupDateTime}.css.bak`;
      const backupFilePath = path.join(backupDir, backupFileName);

      // Create the .backup/ directory if it doesn't exist
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
      }

      // Move the existing CSS file to the backup directory
      fs.renameSync(cssFile, backupFilePath);
      console.log(`Moved ${cssFile} to ${backupFilePath}`);
    }
  }
}

function compileSassFile(filePath) {
  const fileExt = path.extname(filePath);
  if(fileExt !== '.scss') return;

  // const srcPath = path.relative(srcDir, filePath);
  const cssFileName = path.basename(filePath, '.scss') + '.css';
  const compilePath = path.dirname(filePath).replace('/styles/scss', '/styles/');
  const compiledCSS = compilePath + cssFileName;

  backupCSS(compiledCSS);

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
        const cssContent = `${generateFileComment}\n` + result.css;
        fs.writeFileSync(compiledCSS, cssContent);
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
