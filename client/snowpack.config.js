// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    // mount: {},
    plugins: [
        [
            '@snowpack/plugin-babel',
            {
                input: ['.js'],
                transformOptions: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            },
        ],
    ],
    // installOptions: {},
    // devOptions: {},
    // buildOptions: {},
};
