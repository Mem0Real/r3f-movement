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
import { useZus } from "../../utils/store";
import { ZoomExperience } from "./ZoomExperience";

export default function MyScene(props) {
	const [modelLoaded, setModelLoaded] = useState(false);
	const [tutorial, showTutorial] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [dpr, setDpr] = useState(1.5);

	const { overlayOpacity, model } = useZus();

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
		<>
			<div
				className="w-screen h-screen bg-white absolute top-0 left-0 z-50 pointer-events-none"
				style={{ opacity: overlayOpacity }}
			/>
			{isMobile && <EcctrlJoystick />}
			<Canvas
				shadows
				camera={{ position: [0, 3.5, 12], fov: 45 }}
				onPointerDown={(e) => {
					if (e.pointerType === "mouse") {
						e.target.requestPointerLock();
					}
				}}
			>
				<Lights />
				{modelLoaded && (
					<Html position={[0, 1.5, -0.25]}>
						<button
							className="px-3 py-1 bg-neutral-300/60 rounded cursor-pointer hover:px-4 hover:py-2"
							onClick={toggleScene}
						>
							Exit
						</button>
					</Html>
				)}
				{model === "A" ? (
					<ZoomExperience />
				) : (
					<Suspense fallback={null}>
						<Physics>
							<MyApartment onLoaded={() => setModelLoaded(true)} />

							{modelLoaded && <PlayerController />}
						</Physics>
					</Suspense>
				)}
				<Environment
					files="/assets/hdri/cloudy.exr"
					background="only"
					environmentIntensity={0.5}
				/>
			</Canvas>
			{modelLoaded && tutorial && <Tutorial closeTutorial={closeTutorial} />}
			<Loader />
		</>
	);
}
