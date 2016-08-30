'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var proxy = [{
    path: "",
    target: "http://www.jimstyle.cn/",
    host: "http://www.jimstyle.cn/"
}];

var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy
});
app.listen(8090);