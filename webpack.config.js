const webpack = require("webpack");
const path = require("path");
const RemovePlugin = require("remove-files-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

const server = {
  entry: "./server/server.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, "server")],
      },
      watch: {
        include: [path.resolve(buildPath, "server")],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      '@server/weapons': path.resolve(__dirname, 'server/weapons/weapon.controller'),
      '@server/player': path.resolve(__dirname, 'server/player/player.controller'),
      '@server/account': path.resolve(__dirname, 'server/account/account.controller'),
      '@server/db': path.resolve(__dirname, 'server/utils/db'),
    },
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[contenthash].server.js",
    path: path.resolve(buildPath, "server"),
  },
  target: "node",
};

const client = {
  entry: "./client/client.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, "client")],
      },
      watch: {
        include: [path.resolve(buildPath, "client")],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      '@client/vehicles': path.resolve(__dirname, 'client/vehicles/vehicle.controller'),
      '@client/peds': path.resolve(__dirname, 'client/peds/ped.controller'),
      '@utils/fivem': path.resolve(__dirname, 'client/utils/fivem.ts')
    },
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[contenthash].client.js",
    path: path.resolve(buildPath, "client"),
  },
};

const shared = {
  entry: "./shared/shared.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, "shared")],
      },
      watch: {
        include: [path.resolve(buildPath, "shared")],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      '@decorators/command': path.resolve(__dirname, 'shared/decorators/command.ts'),
      '@decorators/events': path.resolve(__dirname, 'shared/decorators/events.ts'),
    },
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[contenthash].shared.js",
    path: path.resolve(buildPath, "shared"),
  },
  target: "node",
};

module.exports = [server, client, shared];
