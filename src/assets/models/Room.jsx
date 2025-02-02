import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Room() {
	const gltf = useLoader(GLTFLoader, "/assets/models/apart/scene.gltf");
	return <primitive object={gltf.scene} scale={0.009} />;
}
