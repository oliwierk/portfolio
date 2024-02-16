import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	base: "./",
	build: {
		outDir: "dist",
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, "index.html"),
				projects: path.resolve(__dirname, "projects.html"),
				timeline: path.resolve(__dirname, "timeline.html"),
				contact: path.resolve(__dirname, "contact.html"),
			},
			output: {
				chunkFileNames: "js/[name]-[hash].js",
				entryFileNames: "js/[name]-[hash].js",
				assetFileNames: "[ext]/[name]-[hash].[ext]",
			},
		},
	},

	server: {
		port: 3000,
	},
});
