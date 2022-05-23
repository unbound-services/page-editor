const path = require("path");
const webpack = require("webpack");
// const DeclarationBundlerPlugin = require("types-webpack-bundler");

const getConfig = (env, argv) => {
  // different settings for dev
  let defFile = "index.d.ts";
  let outputPath = "pkg_build";
  let externals = {
    preact: "preact",
  };
  if (argv.mode === "development") {
    outputPath = "dist";
  }

  const config = {
    entry: "./src/app.ts",
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "index.mjs",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".css", ".ts", ".tsx", ".js", ".jsx", ".scss", ".sass"],
      alias: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat", // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime",
      },
      fallback: {
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    externals,

    target: "web",
  };

  return config;
};

module.exports = getConfig;
