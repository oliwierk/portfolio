import * as THREE from "three";

document.addEventListener("DOMContentLoaded", () => {
	const themeToggles = document.querySelectorAll(".theme-controller");

	// Sprawdź stan z localStorage i zaktualizuj radio buttons
	const isDark = JSON.parse(localStorage.getItem("isdark"));

	themeToggles.forEach(toggle => {
		if (
			(isDark && toggle.value === "dark") ||
			(!isDark && toggle.value === "light")
		) {
			toggle.checked = true;
		}
	});

	// Aktualizacja klasy body na podstawie stanu
	document.body.classList.toggle("dark", isDark);

	themeToggles.forEach(toggle => {
		toggle.addEventListener("change", () => {
			const isDark = toggle.value === "dark";
			localStorage.setItem("isdark", JSON.stringify(isDark));
			document.body.classList.toggle("dark", isDark);
		});
	});
});

// const container = document.getElementById("threejs-background");
// const canvas = document.getElementById("threejs-canvas"); // Pobierz canvas po ID

// // Ustawienia sceny i kamery
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
// 	20,
// 	container.offsetWidth / container.offsetHeight,
// 	0.1,
// 	1000
// );

// // Ustawienia renderera
// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas, // Użyj istniejącego elementu canvas
// 	alpha: true, // Ustawienie alpha: true czyni tło przezroczystym
// });
// renderer.setSize(container.offsetWidth, container.offsetHeight);
// renderer.setClearColor(0x000000, 0); // Przezroczyste tło

// // Tworzenie geometrii i materiału
// const geometry = new THREE.TorusKnotGeometry(14, 1, 5, 16);
// const material = new THREE.MeshBasicMaterial({ color: 0xbb0000 });
// const torusKnot = new THREE.Mesh(geometry, material);
// scene.add(torusKnot);

// // Ustawienie kamery
// camera.position.z = 150;

// // Funkcja animująca
// function animate() {
// 	requestAnimationFrame(animate);

// 	torusKnot.rotation.x += 0.01;
// 	torusKnot.rotation.y += 0.01;

// 	renderer.render(scene, camera);
// }

// animate();

// // Dostosowanie renderer do zmian rozmiaru kontenera
// window.addEventListener("resize", () => {
// 	camera.aspect = container.offsetWidth / container.offsetHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(container.offsetWidth, container.offsetHeight);
// });
