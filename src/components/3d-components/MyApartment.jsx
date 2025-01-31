import { RigidBody } from "@react-three/rapier";
import Room2 from "../../assets/models/Room2";

export default function MyApartment({ onLoaded }) {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			<ambientLight intensity={1} />
			<directionalLight position={[-10, 10, 0]} intensity={2} />
			<Room2 onLoaded={onLoaded} />
		</RigidBody>
	);
}
