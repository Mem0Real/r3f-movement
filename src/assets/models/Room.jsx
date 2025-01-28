import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Room() {
	const gltf = useLoader(GLTFLoader, "/assets/models/apart/scene.gltf");
	return <primitive object={gltf.scene} />;
}

export default Room;
