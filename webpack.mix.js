// webpack.mix.js

let mix = require('laravel-mix');


mix.sass('src/style.scss', 'dist').options({
    processCssUrls: false
});

mix.copy('src/index.html', 'dist');

