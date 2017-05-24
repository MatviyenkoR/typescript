"use strict";
module.exports = {
    entry: './app/scripts/typescript/test.ts',
    output: {
        filename: './dist/scripts/typescripts.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      loaders: [
       {
         test: /\.tsx?$/,
         loader: 'awesome-typescript-loader'
       }
     ]
    }
}
