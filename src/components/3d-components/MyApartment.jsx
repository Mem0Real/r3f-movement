import { RigidBody } from "@react-three/rapier";
import { Room4 } from "../../assets/models/Room4";

export default function MyApartment() {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			<Room4 />
		</RigidBody>
	);
}
