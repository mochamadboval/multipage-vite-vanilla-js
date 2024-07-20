import { sync } from "glob";
import { resolve } from "path";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default {
  resolve: {
    alias: {
      "@js": resolve(__dirname, "src/assets/js"),
    },
  },
  plugins: [ViteMinifyPlugin()],
  appType: "mpa",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
};
