import * as THREE from "three";

let scene, camera, renderer, points;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

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

	camera.position.z = 1000;

	animate();
}

function animate() {
	requestAnimationFrame(animate);

	points.rotation.x += 0.001;
	points.rotation.y += 0.001;

	renderer.render(scene, camera);
}

init();
