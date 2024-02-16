import * as THREE from "three";

let scene, camera, points;

const container = document.getElementById("threejs-background");
const canvas = document.getElementById("threejs-canvas"); // Pobierz canvas po ID
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const renderer = new THREE.WebGLRenderer({
	canvas: canvas, // Użyj istniejącego elementu canvas
	alpha: true, // Ustawienie alpha: true czyni tło przezroczystym
});
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0x000000, 0); // Przezroczyste tło

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 10000; i++) {
	const x = THREE.MathUtils.randFloatSpread(2000);
	const y = THREE.MathUtils.randFloatSpread(2000);
	const z = THREE.MathUtils.randFloatSpread(2000);

	vertices.push(x, y, z);
}

geometry.setAttribute(
	"position",
	new THREE.Float32BufferAttribute(vertices, 3)
);

const material = new THREE.PointsMaterial({ color: 0x888888 });

points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 150;

function animate() {
	requestAnimationFrame(animate);

	points.rotation.x += 0.001;
	points.rotation.y += 0.001;

	renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(container.offsetWidth, container.offsetHeight);
});
