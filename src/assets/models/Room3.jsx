import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Room3() {
	const { scene } = useLoader(GLTFLoader, "/assets/models/apart3/scaled.glb");
	return <primitive object={scene} />;
}
