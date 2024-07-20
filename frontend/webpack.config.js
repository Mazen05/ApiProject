const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "url": require.resolve("url"),
            "buffer": require.resolve("buffer"),
            "util": require.resolve("util")
        }
    },
    // Autres configurations Webpack
};
