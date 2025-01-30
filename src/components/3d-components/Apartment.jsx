import { RigidBody } from "@react-three/rapier";
import Room from "../../assets/models/Room";
import Room2 from "../../assets/models/Room2";
import Room3 from "../../assets/models/Room3";
import Scaled from "../../assets/models/Scaled";

export default function Apartment() {
	return (
		<>
			<ambientLight intensity={0.1} />
			<directionalLight position={[-10, 10, 0]} intensity={0.8} />
			<RigidBody type="fixed" colliders="trimesh">
				{/* <Room /> */}
				<Room2 />
				{/* <Room3 /> */}
				{/* <Scaled /> */}
			</RigidBody>
		</>
	);
}
