import { RigidBody } from "@react-three/rapier";
import Room2 from "../../assets/models/Room2";

export default function MyApartment({ onLoaded }) {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			<Room2 onLoaded={onLoaded} />
		</RigidBody>
	);
}
