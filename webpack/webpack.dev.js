const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            localsConvention: 'camelCase',
                            /* modules: {
                                localIdentName: '[local]___[hash:base64:5]',
                            }, */
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};
