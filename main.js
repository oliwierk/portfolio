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

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
// 	20,
// 	window.innerWidth / window.innerHeight,
// 	0.1,
// 	1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.TorusKnotGeometry(14, 1, 5, 16);
// const material = new THREE.MeshBasicMaterial({ color: 0xbb0000 });
// const torusKnot = new THREE.Mesh(geometry, material);
// scene.add(torusKnot);

// camera.position.z = 125;

// function animate() {
// 	requestAnimationFrame(animate);

// 	torusKnot.rotation.x += 0.01;
// 	torusKnot.rotation.y += 0.01;

// 	renderer.render(scene, camera);
// }

// animate();
