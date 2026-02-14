import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_DEV === "production" ? "/D10-Spoonful/" : "/",
  plugins: [react()],
});
