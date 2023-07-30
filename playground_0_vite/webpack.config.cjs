const path = require("path");
const glob = require("glob");
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function str_repeat(str, count) {
    let repeatedString = '';
    for (let i = 0; i < count; i++) {
      repeatedString += str;
    }
    return repeatedString;
}

function ThemeBuilder() {
    const entries = {};
    const themeTypes = ['theme', 'site', 'event'];

    themeTypes.forEach((type) => {
        let result = CSSThemeBuilder(type);
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
              const value = result[key];
              entries[key] = value;
            }
          }
    });

    return entries;
}

function CSSThemeBuilder(type) {
    const entries = {};
    const themeVars = glob.sync(`src/css/${type}/base.${type}.*.css`);
    
    themeVars.forEach(filePath => {
        // let pathArr = filePath.replace("src/css/theme/", "").split("/");
        let fileName = path.basename(filePath);
        let themeName = fileName.replace('base.', '');
        let fileContent = '';
        
        const componentThemes = glob.sync(`src/components/**/styles/*.${themeName}`);

        fileContent += `@import './${fileName}';\n`;

        componentThemes.forEach(filePath => {
            let path = filePath.replace("src/components/", "../../components/")
            fileContent += `@import '${path}';\n`;
        });
        
        fs.writeFile(`src/css/${type}/${themeName}`, fileContent, (err) => {
            if (err) {
                console.error('Error creating the file:', err);
            } else {
                console.log(`File "${themeName}" created successfully.`);
            }
        });
    });

    let themeStyles = glob.sync(`src/css/${type}/${type}.*.css`);
    // themeStyles = [];
    themeStyles.forEach(filePath => {
        let fileName = path.basename(filePath);
        let name = `/styles/${type}/${fileName}`;
        let entryDir = `./src/css/${type}/${fileName}`;
        entries[name] = entryDir;
    });


    return entries;
}

function CreateComponentListStyles() {
    let fileContent = '';
    const cssFile = 'components.css';
    const componentStyles = glob.sync(`src/components/**/styles/*.component.css`);

    componentStyles.forEach(filePath => {
        let path = filePath.replace("src/components/", "../components/")
        fileContent += `@import '${path}';\n`;
    });

    fs.writeFile(`src/css/${cssFile}`, fileContent, (err) => {
        if (err) {
            console.error('Error creating the file:', err);
        } else {
            console.log(`File "${cssFile}" created successfully.`);
        }
    });
}

function entriesChecker() {
    console.log(str_repeat('#', 20), '[Starting webpack process]...', str_repeat('#', 20));
    const entries = {};
    const images = glob.sync("src/assets/**/*.{png,jpeg,svg}", {});

    images.forEach(filePath => {
        const imgDir = ['games', 'cards', 'placeholders'];
        let pathArr = filePath.replace("src/assets/", "").split("/");
        let fileName = path.basename(filePath);

        if(pathArr.length > 0) {
            if(imgDir.includes(pathArr[0])) {

                let dir = pathArr[0];
                let name = `/assets/${dir}/${fileName}`;
                let entryDir = `./src/assets/${dir}/${fileName}`;

                entries[name] = entryDir;
            }
        }
    });

    const themeEntries = ThemeBuilder();
    for (const entryName in themeEntries) {
        const entryDir = themeEntries[entryName];
        entries[entryName] = entryDir;
    }
    
    CreateComponentListStyles();
    return entries;
}


const entriesRunner = entriesChecker();

module.exports = {
    mode: 'development',
    entry: entriesRunner,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    outputPath: (url, resourcePath, context) => {
                        let matchFolder = /^.*\/src\/assets\//g;
                        let cleanFolder = resourcePath.replace(matchFolder, '');
                        let countSlash = (cleanFolder.match(/\//g) || []).length;
            
                        if(countSlash == 1) {
                            let folderName = cleanFolder.replace('/'+url, '');

                            return `assets/${folderName}/${url}`;
                        }
                        return `assets/${url}`;
                    },
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ]
    },
    devtool: "source-map",
    plugins: [new MiniCssExtractPlugin({
        filename: "[name]",
    })]
}