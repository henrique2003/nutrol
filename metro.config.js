const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

let config = getDefaultConfig(__dirname);

config = withNativeWind(config);

module.exports = config;
