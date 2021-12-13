const path  = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'DOUI',
        libraryTarget: 'umd',
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use:[
                    {
                    loader: 'ts-loader',
                    options:{
                        transpileOnly: true
                    }
                }
                ]
            }
        ]
    },
}