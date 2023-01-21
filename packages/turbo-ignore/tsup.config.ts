import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["cjs"],
  minify: false,
  clean: true,
  // include internal package dependencies in the bundle
  noExternal: ["turbo-utils"],
  ...options,
}));
