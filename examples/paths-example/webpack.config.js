module.exports = {

    entry: './entry.js',

    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(nunj|nunjucks)$/,
                use: {
                    loader: path.resolve('../../index.js')
                }
            }
        ]
    },

    resolve: {
        root: [
            __dirname,
            __dirname + '/another/template/path',
            __dirname + '/path/to/templates'
        ]
    }
};
