const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-[hash].[ext]'
                    }
                }]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 sourceMap: true,
            //             }
            //         },
            //         'less-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new htmlPlugin(),
    ]
}

if (isDev) {
    config.module.rules.push({
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            },
            'less-loader'
        ]
    });
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkHash:8].js';
    config.module.rules.push({
        test: /\.less$/,
        use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'less-loader'
            ]
        })
    });
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }), //单独打包公共库
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }) //单独打包webpack相关代码
    )

}

module.exports = config;

// hash--打包的hash
// chunckhash--chunk的hash,文件单独output