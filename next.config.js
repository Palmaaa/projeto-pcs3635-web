const withImages = require('next-images');
module.exports = {
    webpack(config) {
        withImages();
        config.module.rules.push({
            test: /.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};
