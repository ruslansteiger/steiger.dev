// Based on https://medium.com/@AndrewDelPrete/using-purifycss-to-remove-unused-tailwind-css-classes-173b3ee8ee01
let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let glob = require('glob-all');
let PurgecssPlugin = require('purgecss-webpack-plugin');

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

mix.setPublicPath('public')
    .postCss('./resources/css/app.css', './public/', [
        tailwindcss('./tailwind.config.js')
    ])
    .js('resources/app.js', 'public/')
    .browserSync({
        proxy: false,
        server: { baseDir: 'public' },
        files: [
            'public/app.css',
            'public/app.js',
            'public/**/*.+(html)',
        ]
    });

// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({
                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, 'public/**/*.html'),
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning for
                        // class names.
                        extensions: ['html', 'js'],
                    }
                ]
            })
        ]
    });
}
