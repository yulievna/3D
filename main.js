import * as THREE from 'three';
import {GLTFLoader} from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import {OrbitControls} from "./node_modules/three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, -2, 5);

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
let obj = null;

loader.load("/public/scene.gltf", function(gltf) {
    console.log(gltf)
    obj = gltf.scene;
    scene.add(gltf.scene);
});


const canvas = document.getElementById("c");
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 1, 0);
controls.update();

function animate(){
    requestAnimationFrame(animate)
    obj.rotation.y += 0.005;
    renderer.render(scene, camera)
}
animate();