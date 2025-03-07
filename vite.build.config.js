import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// Common configuration for both builds
const baseConfig = ({ isDev }) => ({
  plugins: [
    react(),
    dts({ rollupTypes: true,
      entry: "types_raw/index.d.ts",
      outDir: "pkg_build/types",
      insertTypesEntry: true,
      esModuleInterop: true,
      declaration:true,
      module: "es6",
      target: "es6",
      moduleResolution: "node",
      typeRoots: [
        "node_modules/@types",
      ],
      outputDir: "pkg_build/types",
      include: ["src/lib/**/*.ts", "src/lib/**/*.tsx","src/global.d.ts"],
     }),
  ],
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
    },
  },
  
  publicDir: "prod_public",
  
});

// Build configuration that externalizes React
const buildWithoutReact = ({ isDev }) => ({
  build: {
    emptyOutDir: false,
    outDir: "pkg_build/without-react",
    lib:{
          entry: "src/lib/index.tsx",
          name: "unb-editor",
          fileName: (format) => `index.${format}.js`,
          formats: ["es", "umd", "cjs"],
        },
    rollupOptions: {
      // Mark React libraries as external so they won’t be bundled
      external: ["react", "react-dom"],
      
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        exports:"named"
      },
    },
    sourcemap: true,
  },
});

// Build configuration that bundles React into the output
const buildWithReact = ({ isDev }) => ({
  build: {
    emptyOutDir: false,
    outDir: "pkg_build/with-react",
    lib:{
      entry: "src/lib/index.tsx",
      name: "unb-editor",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      // By not listing React as external here, it will be bundled in.
      output: {
        exports:"named"
      }
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
      mode: "production",
    }
});
