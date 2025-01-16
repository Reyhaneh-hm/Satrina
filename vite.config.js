import Inspect from "vite-plugin-inspect";
import { resolve } from "path";


export default {
  plugins: [Inspect()],
  css: {
    devSourcemap: true,
    postcss: "./postcss.config.js",
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        showBlog: resolve(__dirname, "./showBlog.html"),
        showPost: resolve(__dirname, "./showPost.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // تنظیم خروجی فایل برای تصاویر به عنوان فایل جداگانه
          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    assetsInlineLimit: 0,
  },
};
