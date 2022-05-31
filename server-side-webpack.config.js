const path = require("path");

const webpack = require("webpack");
// const DeclarationBundlerPlugin = require("types-webpack-bundler");

const getConfig = (env, argv) => {
  // different settings for dev
  // at this point they should probably just be different configs
  // but this was useful for getting them building correctly
  let defFile = "index.d.ts";
  let outputPath = "./pkg_build";
  let jsFileExtension = "mjs";
  let externals = {
    preact: "preact",
  };
  if (argv.mode === "development") {
    outputPath = "./dist";
    jsFileExtension = "js";
    externals = {}; // compile preact into the dev bundle
  }

  const config = {
    entry: "./src/server-side.tsx",
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: "server-side." + jsFileExtension,
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
          options: {
            compilerOptions: {
              outDir: outputPath,
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
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
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.IgnorePlugin({ resourceRegExp: /\.(css|scss|sass)$/ }),
    ],
    externals,

    target: "node12.18",
  };

  return config;
};

module.exports = getConfig;
