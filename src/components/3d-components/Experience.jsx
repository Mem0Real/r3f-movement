import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export const Experience = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-10, 10, 0]} intensity={0.4} />

			{/* <OrbitControls /> */}

			<RigidBody position={[0, 5, 0]} colliders={"ball"}>
				<Sphere>
					<meshStandardMaterial color={"hotpink"} />
				</Sphere>
			</RigidBody>

			<RigidBody position={[3, 5, 0]}>
				<Box>
					<meshStandardMaterial color="royalblue" />
				</Box>
			</RigidBody>

			<RigidBody type="fixed">
				<Box position={[0, 0, 0]} args={[50, 1, 50]}>
					<meshStandardMaterial color="lightblue" />
				</Box>
			</RigidBody>
		</>
	);
};
