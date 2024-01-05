import vono from "@gaiiaa/vono";
import { cloudflare } from "@gaiiaa/vono/adaptors";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vono({ adaptor: cloudflare() })],
});
