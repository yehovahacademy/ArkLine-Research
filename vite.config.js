import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: [
      "comfy-daintily-paralyses.ngrok-free.dev"
    ]
  }
});

  
