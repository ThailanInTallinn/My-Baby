import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import livereload from "vite-plugin-live-reload";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), livereload("src/**/*.{js,jsx,ts,tsx}")],
  };
});
