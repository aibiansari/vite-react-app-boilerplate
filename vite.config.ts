import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/", //here goes your repository names
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
