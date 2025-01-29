import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Land } from "./components/Land";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { KeyboardControls } from "@react-three/drei";

import Ecctrl from "ecctrl";
import Tutorial from "./components/Tutorial";
import Apartment from "./components/Apartment";

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
				camera={{ position: [10, 10, 10], fov: 30 }}
				onPointerDown={(e) => {
					if (e.pointerType === "mouse") {
						e.target.requestPointerLock();
					}
				}}
			>
				<color attach="background" args={["#ececec"]} />
				<Suspense fallback={null}>
					<Physics>
						{/* <Experience /> */}
						{/* <Land /> */}
						<Apartment />
						<KeyboardControls map={keyboardMap}>
							{/* <Ecctrl
								camCollision={false} // disable camera collision detect (useless in FP mode)
								camInitDis={-0.01} // camera intial position
								camMinDis={-0.01} // camera zoom in closest position
								camMaxDis={-0.01} // max camera zoom in closest position
								camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
								camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
								turnVelMultiplier={1} // Turning speed same as moving speed
								turnSpeed={100} // give it big turning speed to prevent turning wait time
								mode={"CameraBasedMovement"} // character's rotation will follow camera's rotation in this mode
								jumpvel={1}
								autoBalance={false}
							>
								
							</Ecctrl> */}
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
								// position={[-0.5, 1, 0]}
								// rotation={[0, -Math.PI / 2, 0]}
							/>
						</KeyboardControls>
					</Physics>
				</Suspense>
			</Canvas>
			<Tutorial />
		</>
	);
}

export default App;
