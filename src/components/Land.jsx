import { Box, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export const Land = () => {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[-10, 10, 0]} intensity={0.4} />

			<RigidBody>
				<mesh position={[0, 0, 10]}>
					<boxGeometry args={[10, 6, 0]} />
					<meshStandardMaterial color="lightgreen" />
				</mesh>
				<mesh position={[-5, 0, 10]} rotation={[0, Math.PI / 2, 0]}>
					<boxGeometry args={[10, 6, 0]} />
					<meshStandardMaterial color="gray" />
				</mesh>
				<mesh position={[5, 0, 5]} rotation={[0, Math.PI / 2, 0]}>
					<boxGeometry args={[10, 6, 0]} />
					<meshStandardMaterial color="gray" />
				</mesh>
				<mesh position={[-10, 0, 5]} rotation={[0, 0, 0]}>
					<boxGeometry args={[10, 6, 0]} />
					<meshStandardMaterial color="gray" />
				</mesh>
			</RigidBody>

			<RigidBody type="fixed">
				<Box position={[0, 0, 0]} args={[150, 1, 150]}>
					<meshStandardMaterial color="lightblue" />
				</Box>
			</RigidBody>
		</>
	);
};
