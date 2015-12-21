var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/client/scripts/entry.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel?presets[]=react"
        }, {
            test: /client\/src\/.+.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.s(a|c)ss$/,
            exclude: /node_modules/,
            loaders: ["style", "css", "sass"]
        }]
    },

    sassLoader: {
        indentedSyntax: true
    },

    resolve: {
        alias: {
            "backbone": path.join(__dirname, "./libs/backbone.js")
        },
    }
};