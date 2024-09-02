import Inspect from "vite-plugin-inspect";
import { resolve } from "path";


export default {
  plugins: [Inspect()],
  // base: "/linom/v2",
  css: {
    devSourcemap: true,
    postcss: "./postcss.config.js",
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        // listBlog: resolve(__dirname, "./listBlog.html"),
        showBlog: resolve(__dirname, "./showBlog.html"),
      },
    },
  },
};
