import Room from "../assets/models/Room";

function Apartment() {
	return (
		<RigidBody type="fixed" scale={0.01}>
			<Room />
		</RigidBody>
	);
}

export default Apartment;
