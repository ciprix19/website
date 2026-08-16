import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // used for github pages deploy
    // base: '/website/',
    base: '/',
});
