module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    externals: {
        jquery: "$",
        paper: "paper"
    },
    devtool: "source-map",
    module: {
        rules: [
            {test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/},
        ],
    },
};
