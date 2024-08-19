import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/vite-react-app-boilerplate/", //here goes your own repository names
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
