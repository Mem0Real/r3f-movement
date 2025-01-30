import { Suspense, useEffect, useMemo, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Environment, Html, KeyboardControls, Loader } from "@react-three/drei";

import Ecctrl, { EcctrlJoystick } from "ecctrl";

import { Experience } from "./Experience";
import { Land } from "./Land";
import Apartment from "./Apartment";
import Tutorial from "./Tutorial";
import Room2 from "../../assets/models/Room2";
import PlayerController from "../../utils/PlayerController";

import { MeshStandardMaterial } from "three";

export default function MyScene(props) {
	const keyboardMap = useMemo(
		() => [
			{ name: "forward", keys: ["ArrowUp", "KeyW"] },
			{ name: "backward", keys: ["ArrowDown", "KeyS"] },
			{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
			{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
			{ name: "jump", keys: ["Space"] },
			{ name: "run", keys: ["Shift"] },
		],
		[]
	);
	const [modelLoaded, setModelLoaded] = useState(false);
	const [tutorial, showTutorial] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function isMobile() {
			return window.matchMedia("(max-width: 767px)").matches;
		}

		const device = isMobile();

		setIsMobile(() => device);
	}, []);

	const closeTutorial = () => showTutorial(!tutorial);

	const { toggleScene } = props;

	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-white text-xl italic">Loading...</h1>
				</div>
			}
		>
			{isMobile && <EcctrlJoystick />}
			<Canvas
				shadows
				camera={{ position: [10, 10, 10], fov: 75 }}
				onPointerDown={(e) => {
					if (e.pointerType === "mouse") {
						e.target.requestPointerLock();
					}
				}}
			>
				<Html position={[0, 2, 0]}>
					<button
						className="px-3 py-1 bg-neutral-300/60 rounded cursor-pointer hover:px-4 hover:py-2"
						onClick={toggleScene}
					>
						Exit
					</button>
				</Html>
				{/* <color attach="background" args={["#ececec"]} /> */}
				<Suspense fallback={null}>
					<Physics>
						<RigidBody type="fixed" colliders="trimesh">
							<ambientLight intensity={0.5} />
							<directionalLight position={[-10, 10, 0]} intensity={2} />
							<Room2 onLoaded={() => setModelLoaded(true)} />
						</RigidBody>

						{modelLoaded && (
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
									position={[-1.2, 1, 0.05]}
									jumpVel={3}
									maxVelLimit={3}
								/>
								<PlayerController />
							</KeyboardControls>
						)}

						{/* <Experience /> */}
						{/* <Land /> */}
						{/* <Apartment /> */}
					</Physics>
				</Suspense>
				<Environment
					files="/assets/hdri/cloudy.exr"
					background="only"
					// environmentIntensity={0.5}
				/>
			</Canvas>
			{modelLoaded && tutorial && <Tutorial closeTutorial={closeTutorial} />}
			<Loader />
		</Suspense>
	);
}
