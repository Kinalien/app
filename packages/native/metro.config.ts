import path from "node:path";
import { type MetroConfig, getDefaultConfig } from "expo/metro-config";
import { wrapWithReanimatedMetroConfig } from "react-native-reanimated/metro-config";

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot];
// 2. Let Metro know where to resolve packages and in what order
if (config.resolver) {
  console.log(config.resolver.nodeModulesPaths);
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(monorepoRoot, "node_modules"),
  ];
}

module.exports = wrapWithReanimatedMetroConfig(config as MetroConfig);
