import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	// Konfiguracja ścieżek bazowych, użyteczna gdy aplikacja jest serwowana z podkatalogu
	base: "./",
	build: {
		// Wyjście buildu do określonego katalogu
		outDir: "dist",
		rollupOptions: {
			// Określ wejścia dla różnych stron HTML
			input: {
				index: path.resolve(__dirname, "index.html"),
				projects: path.resolve(__dirname, "projects.html"),
				// Dodaj więcej stron, jeśli to konieczne
			},
			// Opcje dotyczące podziału kodu, jeśli potrzebujesz
			output: {
				chunkFileNames: "js/[name]-[hash].js",
				entryFileNames: "js/[name]-[hash].js",
				assetFileNames: "[ext]/[name]-[hash].[ext]",
			},
		},
	},
	// Opcje serwera deweloperskiego, jeśli chcesz je dostosować
	server: {
		port: 3000, // Możesz ustawić port, na którym uruchomiony będzie serwer deweloperski
	},
	// Dodaj dodatkowe wtyczki Vite tutaj, jeśli są potrzebne
});
