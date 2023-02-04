import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
export default defineConfig(function ({ mode }) {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return {
        plugins: [
            laravel(["resources/css/app.css", "resources/js/app.js"]),
            react(),
        ],
        define: {
            "process.env.SHOPIFY_API_KEY": JSON.stringify(
                process.env.VITE_SHOPIFY_API_KEY
            ),
        },
        resolve: {
            preserveSymlinks: true,
        },
        server: {
            host: "localhost",
            // https: {
            //     key: fs.readFileSync("../../etc/ssl/laragon.key"),
            //     cert: fs.readFileSync("../../etc/ssl/laragon.crt"),
            // },
        },
    };
});
