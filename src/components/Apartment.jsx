import Room from "../assets/models/Room";
import { RigidBody } from "@react-three/rapier";

export default function Apartment() {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-10, 10, 0]} intensity={0.4} />
			<RigidBody type="fixed" colliders="trimesh">
				<Room />
			</RigidBody>
		</>
	);
}
