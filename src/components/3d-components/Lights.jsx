import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Lights() {
	const ref = useRef(null);

	// useHelper(ref, DirectionalLightHelper, 1, "green");

	return (
		<>
			<ambientLight intensity={0.5} />
			{/* <ambientLight intensity={1} /> */}
			<directionalLight ref={ref} intensity={1.5} />
			{/* <pointLight args={[-10, 0, 0]} intensity={2} color="green" /> */}
		</>
	);
}
