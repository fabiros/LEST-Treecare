const eslint = require('eslint');
const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    entry: commonPaths.entryPath,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    formatter: eslint.CLIEngine.getFormatter('stylish'),
                    emitWarning: process.env.NODE_ENV !== 'production',
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.imagesFolder,
                        },
                    },
                    /* {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: process.env.NODE_ENV === 'production',
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            /*  webp: {
                                quality: 75,
                            },
                        },
                    }, */
                ],
            },
            {
                test: /\.(woff2|ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.fontsFolder,
                        },
                    },
                ],
            },
        ],
    },
    serve: {
        add: app => {
            app.use(convert(history()));
        },
        content: commonPaths.entryPath,
        dev: {
            publicPath: commonPaths.outputPath,
        },
        open: true,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.gif',
            '.png',
            '.jpg',
            '.jpeg',
            '.svg',
        ],
        alias: {
            src: commonPaths.src,
            'react-dom': '@hot-loader/react-dom',
            images: commonPaths.images,
        },
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath,
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async',
        }),
    ],
};
