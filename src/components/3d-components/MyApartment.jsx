import { RigidBody } from "@react-three/rapier";
import Room2 from "../../assets/models/Room2";
import { Room4 } from "../../assets/models/Room4";

export default function MyApartment({ onLoaded }) {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			{/* <Room2 onLoaded={onLoaded} /> */}
			<Room4 onLoaded={onLoaded} />
		</RigidBody>
	);
}
