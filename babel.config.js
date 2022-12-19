module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo"],
      ["@babel/preset-env", { targets: { node: "current" } }],
      [
        "module:metro-react-native-babel-preset",
        { targets: { node: "current" } },
      ],
    ],
    plugins: [
      ["react-native-reanimated/plugin"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  };
};
