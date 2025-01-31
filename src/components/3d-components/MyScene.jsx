import { Suspense, useEffect, useMemo, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import {
	Environment,
	Html,
	KeyboardControls,
	Loader,
	OrbitControls,
	PerformanceMonitor,
} from "@react-three/drei";

import Ecctrl, { EcctrlJoystick } from "ecctrl";

import { Experience } from "./Experience";
import { Land } from "./Land";
import Apartment from "./Apartment";
import Tutorial from "./Tutorial";
import Room2 from "../../assets/models/Room2";
import AudioController from "../../utils/AudioController";

import { DirectionalLightHelper, MeshStandardMaterial } from "three";
import MyApartment from "./MyApartment";
import PlayerController from "../../utils/PlayerController";
import Lights from "./Lights";

export default function MyScene(props) {
	const [modelLoaded, setModelLoaded] = useState(false);
	const [tutorial, showTutorial] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [dpr, setDpr] = useState(1.5);

	useEffect(() => {
		function isMobile() {
			return window.matchMedia("(max-width: 1023px)").matches;
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
				<Lights />
				<Html position={[0, 1.5, -0.25]}>
					<button
						className="px-3 py-1 bg-neutral-300/60 rounded cursor-pointer hover:px-4 hover:py-2"
						onClick={toggleScene}
					>
						Exit
					</button>
				</Html>
				<Suspense fallback={null}>
					<Physics>
						<MyApartment onLoaded={() => setModelLoaded(true)} />

						{modelLoaded && <PlayerController />}
					</Physics>
				</Suspense>
				<Environment
					files="/assets/hdri/cloudy.exr"
					background="only"
					environmentIntensity={0.5}
				/>
			</Canvas>
			{modelLoaded && tutorial && <Tutorial closeTutorial={closeTutorial} />}
			<Loader />
		</Suspense>
	);
}
