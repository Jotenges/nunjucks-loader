const path = require('path');

module.exports = {

    target: 'web',

    context: __dirname,

    entry: `mocha-loader!${__dirname}/web.js`,

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(njk|nunjucks)$/,
                loader: path.resolve(__dirname, '..', 'index.js'),
                options: {
                    jinjaCompat: true,
                    config: __dirname + '/nunjucks.config.js'
                }
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader',
                options: {
                    esModule: false,
                }
            }
        ]
    },

    resolve: {
        modules: [
            __dirname,
            __dirname + '/fixtures/templates',
            __dirname + '/fixtures/custom_modules',
            'web_loaders', 'web_modules', 'node_loaders', 'node_modules', '../'
        ]
    },

    devServer: {
        static: {
            directory: path.resolve('..', __dirname),
        }
    }
};
