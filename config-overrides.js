const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

const buildDate = new Date().toLocaleString();

module.exports = function override(config, env) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new ModuleFederationPlugin({
        name: "shell",
        remotes: {
          "@dulcon/bimbows_3_1": "bimbows_3_1@https://bimbows-3-1.herokuapp.com//remoteEntry.js",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    ]
  };
}
