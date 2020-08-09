const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators",  { legacy: true }]
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'jsconfig',
                baseUrl: './src',
            },
        },
    ],
};
