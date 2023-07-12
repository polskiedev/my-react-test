const path = require("path");
const glob = require("glob");

function str_repeat(str, count) {
    let repeatedString = '';
    for (let i = 0; i < count; i++) {
      repeatedString += str;
    }
    return repeatedString;
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
        ]
    },
    devtool: "source-map"
}