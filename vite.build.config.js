import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// Common configuration for both builds
const baseConfig = ({ isDev }) => ({
  root: path.resolve(__dirname, "src"),
  plugins: [
    react(),
    dts({
      // Output types once (they’ll be identical for both builds)
      outDir: "../pkg_build/types",
      insertTypesEntry: true,
      entryPoint: isDev ? path.resolve(__dirname, "src/app.tsx") : path.resolve(__dirname, "src/lib/index.tsx"),
    }),
  ],
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
    },
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: true,
  },
  
  publicDir: "../public",
  
});

// Build configuration that externalizes React
const buildWithoutReact = ({ isDev }) => ({
  build: {
    outDir: "../pkg_build/without-react",
    lib: isDev
      ? undefined
      : {
          entry: path.resolve(__dirname, isDev ? "src/app.tsx" : "src/lib/index.tsx"),
          name: "UnboundPageEditor",
          fileName: (format) => `index.${format}.js`,
          formats: ["es", "umd", "cjs"],
        },
    rollupOptions: {
      input: isDev ? path.resolve(__dirname, "src/index.html") : undefined,
      // Mark React libraries as external so they won’t be bundled
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
});

// Build configuration that bundles React into the output
const buildWithReact = ({ isDev }) => ({
  build: {
    emptyOutDir: false,
    outDir: "../pkg_build/with-react",
    lib: isDev
      ? undefined
      : {
          entry: path.resolve(__dirname,  isDev ? "src/app.tsx" : "src/lib/index.tsx"),
          name: "UnboundPageEditor",
          fileName: (format) => `index.${format}.js`,
          formats: ["es", "umd", "cjs"],
        },
    rollupOptions: {
      input: isDev ? path.resolve(__dirname, "src/index.html") : undefined,
      // By not listing React as external here, it will be bundled in.
    },
    sourcemap: true,
  },
});

// Export an array of configurations for the two builds
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const withReact = mode === "with-react";
  return {...baseConfig({ isDev }),
      ...(withReact ? buildWithReact({ isDev }) : buildWithoutReact({ isDev })),
    }
});
