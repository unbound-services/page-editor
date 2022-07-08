const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const webpackNodeExternals = require("webpack-node-externals");
// const DeclarationBundlerPlugin = require("types-webpack-bundler");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getConfig = (env, argv) => {
  // different settings for dev
  // at this point they should probably just be different configs
  // but this was useful for getting them building correctly
  let defFile = "index.d.ts";
  let outputPath = "./pkg_build";
  let jsFileExtension = "js";
  let externals = {
    // preact: "preact",
    // canvas: "canvas",
    // jsdom: "jsdom",
  };

  // fs.readdirSync("node_modules")
  //   .filter(function (x) {
  //     return [".bin"].indexOf(x) === -1;
  //   })
  //   .forEach(function (mod) {
  //     externals[mod] = "commonjs " + mod;
  //   });

  const config = {
    entry: "./src/server-side.tsx",
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "server-side." + jsFileExtension,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            compilerOptions: {
              outDir: outputPath,
              // lib: ["node"],
              // target: "es6",
              // module: "es5",
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css|sass)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                emit: false, // eliminates all the imports
              },
            },
            "css-loader",
            "sass-loader",
          ],
        },
        // { test: /\.(css|scss|sass)$/, loader: "ignore-loader" },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat", // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime",
      },
      fallback: {
        // buffer: require.resolve("buffer/"),
        // canvas: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new MiniCssExtractPlugin(),

      // new NodePolyfillPlugin(),
      // new webpack.IgnorePlugin(["canvas"]),
    ],
    externals: { ...webpackNodeExternals(), ...externals },

    // target: "node",
    externalsPresets: { node: true },
  };

  return config;
};

module.exports = getConfig;
