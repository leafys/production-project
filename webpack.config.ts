import { Configuration } from "webpack";
import { BuildWebpackConfig } from "./config/build/BuildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { resolve } from "path";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const paths: BuildPaths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    build: resolve(__dirname, "build"),
    html: resolve(__dirname, "public", "index.html"),
  };

  const config: Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
