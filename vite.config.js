import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const devServerUrl = env.VITE_DEV_SERVER_URL
        ? new URL(env.VITE_DEV_SERVER_URL)
        : new URL('http://localhost:5173');

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.jsx'],
                refresh: true,
            }),
            react(),
            tailwindcss(),
        ],
        server: {
            host: devServerUrl.hostname,
            port: 5173,
            strictPort: true,
            cors: true,
            watch: {
                ignored: ['**/storage/framework/views/**'],
            },
            hmr: {
                protocol: devServerUrl.protocol === 'https:' ? 'wss' : 'ws',
                host: devServerUrl.hostname,
                clientPort: devServerUrl.protocol === 'https:' ? 443 : Number(devServerUrl.port || 5173),
            },
        },
    };
});
