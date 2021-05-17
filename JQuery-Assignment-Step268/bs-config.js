
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    server: {
        watch: true,
        baseDir: "./",
        middleware: {
        // overrides the second middleware default with new settings
        1: require('connect-history-api-fallback')({
            index: '/JQueryChallenge.html',
            verbose: true,
            directory: true
        }),
        },
    }
};