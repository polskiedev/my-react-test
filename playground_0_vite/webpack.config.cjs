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
    const themeVars = glob.sync("src/css/theme/variables/*-theme-vars.css");
    
    themeVars.forEach(filePath => {
        let pathArr = filePath.replace("src/css/theme/variables/", "").split("/");
        let fileName = path.basename(filePath);
        let themeName = fileName.replace('-theme-vars.css', '');
        let themeFile = fileName.replace('-theme-vars.css', '-theme.css');
        let fileContent = '';

        const componentThemes = glob.sync(`src/components/**/styles/*.${themeName}-theme.css`);

        fileContent += `@import './variables/${fileName}';\n`;

        componentThemes.forEach(filePath => {
            let path = filePath.replace("src/components/", "../../components/")
            fileContent += `@import '${path}';\n`;
        });
        
        fs.writeFile('src/css/theme/'+themeFile, fileContent, (err) => {
            if (err) {
                console.error('Error creating the file:', err);
            } else {
                console.log(`File "${themeFile}" created successfully.`);
            }
        });
    });

    const themeStyles = glob.sync("src/css/theme/*-theme.css");
    themeStyles.forEach(filePath => {
        let pathArr = filePath.replace("src/css/theme/", "").split("/");
        let fileName = path.basename(filePath);
        let name = `/styles/theme/${fileName}`;
        let entryDir = `./src/css/theme/${fileName}`;

        entries[name] = entryDir;
    });

    return entries;
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