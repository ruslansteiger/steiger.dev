// Based on https://medium.com/@AndrewDelPrete/using-purifycss-to-remove-unused-tailwind-css-classes-173b3ee8ee01
const mix = require('laravel-mix');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

mix.setPublicPath('public')
    .postCss('./resources/css/app.css', './public/', [
        require('tailwindcss'),
    ])
    .browserSync({
        proxy: false,
        server: { baseDir: 'public' },
        files: [
            'public/app.css',
            'public/**/*.+(html)',
        ],
    });

// Only run PurgeCSS during production builds for faster development builds and
// so you still have the full set of utilities available during development.
if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({
                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, 'public/**/*.html'),
                ]),
                extractors: [{
                    // Custom PurgeCSS extractor for Tailwind that allows
                    // special characters in class names.
                    extractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || [],

                    // Specify the file extensions to include when scanning
                    // for class names.
                    extensions: ['html'],
                }],
            }),
        ],
    });
}
