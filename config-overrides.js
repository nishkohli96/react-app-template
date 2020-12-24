const {
    override,
    addWebpackAlias,
    addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@Components']: path.resolve(__dirname, './src/components'),
        ['@Images']: path.resolve(__dirname, './src/assets/images'),
        ['@Pages']: path.resolve(__dirname, './src/pages'),
        ['@Styles']: path.resolve(__dirname, './src/assets/styles'),
    }),
    addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
