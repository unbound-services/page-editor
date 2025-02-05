import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    // Set the root to the src folder
    root: path.resolve(__dirname, "src"),
    
    plugins: [
      react(),
      dts({
        outDir: "../dist/types",
        insertTypesEntry: true,
      }),
    ],
    build: {
      outDir: "../dist",
      lib: isDev ? undefined : {
        entry: path.resolve(__dirname, "src/index.tsx"),
        name: "MyLibrary",
        fileName: (format) => `index.${format}.js`,
        formats: ["es", "umd", "cjs"],
      },
      rollupOptions: {
        input: isDev ? path.resolve(__dirname, "src/index.html") : undefined,
        external: ["react", "react-dom", "react/jsx-runtime"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      sourcemap: true,
    },
    resolve: {
      alias: {
        "@sass": path.resolve(__dirname, "src/sass")
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});