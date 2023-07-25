# Installs
x npm install react react-dom
npm create vite@4.1.0
npm i bootstrap@5.2.3
npm i -D tailwindcss postcss autoprefixer
npx tailwind init
npm install -g postcss-cli
npm install axios
x npm install --save-dev cross-env
x npm install --save-dev @types/node
x npm install dotenv
npm install webpack webpack-cli webpack-dev-server --save-dev
npm i file-loader 
=> will be used in webpack for processing image
npm install --save-dev @vitejs/plugin-legacy
=> will be used in vite.config to skip processing images, will leave it to webpack
=========
cross-env is for forcing application environment (.env)
@types/node is for reading/using environment vars
========
npm uninstall @types/node
npm uninstall cross-env
npm uninstall dotenv
========

# vscode plugin 
- [ ] es7+ => to use type `rafce` on a file
- [ ] prettier - code formatter
- [ ] Multiple cursor case preserve by Cardinal90
- [ ] Auto Rename Tag by Jun Han
- [ ] Bracket Pair Colorization Toggler by Dzhavat Ushev
- [ ] Toggle Quotes by BriteSnow
    - [ ] Ctrl + “
- [ ] CodeSnap by adpyke
    - [ ] Ctrl + shift + P; Select CodeSnap
- [ ] Inline fold
    - [ ] For tailwindcss dev
- [ ] Thunder Client
#Chrome addons
React Developer Tools


#Useful sites
svg icons - https://heroicons.com/


#Cheat sheets
https://nerdcave.com/tailwind-cheat-sheet
https://docs.emmet.io/cheat-sheet/



#Others

"build-css": "tailwindcss build src/css/style.css -o public/style.css",

disabled vscode @ settings (ctrl + , for shortcut) look for "css lint unknown at rules" select ignore on the dropdown options

Error @apply in css file -> in the vscode settings add the following lines:
    "files.associations": {
      "*.css": "tailwindcss"
    }
Emmet
- |c for html comments
- emmet snippets


