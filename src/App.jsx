import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, Loader } from "@react-three/drei";

import Ecctrl from "ecctrl";

import { Experience } from "./components/3d-components/Experience";
import { Land } from "./components/3d-components/Land";
import Apartment from "./components/3d-components/Apartment";
import Tutorial from "./components/3d-components/Tutorial";

function App() {
	const keyboardMap = [
		{ name: "forward", keys: ["ArrowUp", "KeyW"] },
		{ name: "backward", keys: ["ArrowDown", "KeyS"] },
		{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
		{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
		{ name: "jump", keys: ["Space"] },
		{ name: "run", keys: ["Shift"] },
	];
	return (
		<>
			<Canvas
				shadows
				camera={{ position: [10, 10, 10], fov: 75 }}
				onPointerDown={(e) => {
					if (e.pointerType === "mouse") {
						e.target.requestPointerLock();
					}
				}}
			>
				<color attach="background" args={["#ececec"]} />
				<Suspense fallback={null}>
					<Physics>
						<KeyboardControls map={keyboardMap}>
							<Ecctrl
								camCollision={false} // disable camera collision detect (useless in FP mode)
								camInitDis={-0.01} // camera intial position
								camMinDis={-0.01} // camera zoom in closest position
								camMaxDis={-0.01} // max camera zoom in closest position
								camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
								camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
								turnVelMultiplier={1} // Turning speed same as moving speed
								turnSpeed={100} // give it big turning speed to prevent turning wait time
								autoBalance={false}
								// debug
								position={[-1.5, 1, 0.05]}
							/>
						</KeyboardControls>

						{/* <Experience /> */}
						{/* <Land /> */}
						<Apartment />
					</Physics>
				</Suspense>
			</Canvas>
			<Tutorial />
			<Loader />
		</>
	);
}

export default App;
