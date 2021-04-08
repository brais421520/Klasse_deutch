const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader'
});

// Bootstrap 4 requres that jquery  and popper to be available globally
environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery',
        jquery: 'jquery',
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'], // for Bootstrap 4
    })
)

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment