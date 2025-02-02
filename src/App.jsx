import "./index.css";
import React, { useEffect, useState } from "react";
import MyScene from "./components/3d-components/MyScene";
import Navbar from "./components/webpage-components/Navbar";
import { useZus } from "./utils/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
	const [scene, showScene] = useState(false);

	const { model, setModel } = useZus();

	const toggleScene = (e) => {
		showScene(!scene);
		model === "B" && setModel("A");
	};

	return (
		<div className="bg-black size-full min-h-screen flex flex-col items-center gap-5">
			{scene ? (
				<MyScene toggleScene={toggleScene} />
			) : (
				<>
					<Navbar />
					<button
						className="px-3 py-2 bg-neutral-200 z-50 rounded-2xl cursor-pointer"
						onClick={toggleScene}
					>
						Open Scene
					</button>
					<div className="h-[90%] w-full">
						<Canvas shadows camera={{ position: [0, 1, -3], fov: 50 }}>
							<OrbitControls />
							<ambientLight intensity={1} />
							<directionalLight intensity={0.4} />
							<mesh position={[-2, 0, 0.5]}>
								<boxGeometry />
								<meshStandardMaterial color={"lightblue"} />
							</mesh>
							<mesh>
								<boxGeometry />
								<meshStandardMaterial color={"lightblue"} />
							</mesh>
							<mesh position={[2, 0, 0.5]}>
								<boxGeometry />
								<meshStandardMaterial color={"lightblue"} />
							</mesh>
						</Canvas>
					</div>
				</>
			)}
		</div>
	);
};

export default App;
