const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:  [__dirname + "/js/liveSDK.js", __dirname + "/js/playbackSDK.js"],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};