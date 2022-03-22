const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const out =
  process.env.FVTT_SETTLEMENTS_OUT_LOCATION || path.resolve(__dirname, "dist");
const mode = process.env.MODE || "development";

fs.rmSync(out, { recursive: true, force: true });

if (mode === "development") console.log(`creating development build in ${out}`);

module.exports = {
  entry: "./src/index.ts",
  mode,
  mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(txt|html)$/,
        use: "raw-loader",
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "static",
          to: "./",
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    publicPath: "modules/fvtt-settlements/",
    filename: "index.js",
    path: out,
  },
  experiments: {
    asyncWebAssembly: true,
  }
};