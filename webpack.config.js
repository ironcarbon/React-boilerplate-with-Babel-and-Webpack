const path = require('path')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }
},
    {
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader' }, //* Any js file inside of the application, go ahead and run the babel-loader on it.
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        },
        mode: 'development'
    }