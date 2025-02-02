import {
	Suspense,
	useEffect,
	useRef,
	useState,
	createContext,
	useContext,
} from "react";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment, Html, Loader } from "@react-three/drei";

import { EcctrlJoystick } from "ecctrl";
import Tutorial from "./Tutorial";

import MyApartment from "./MyApartment";
import PlayerController from "../../utils/PlayerController";
import Lights from "./Lights";
import { useZus } from "../../utils/store";
import { ZoomExperience } from "./ZoomExperience";

export const RefContext = createContext();

export default function MyScene(props) {
	// const [modelLoaded, setModelLoaded] = useState(false);
	const [tutorial, showTutorial] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const canvasRef = useRef();

	const { overlayOpacity, model, modelLoaded } = useZus();

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
				ref={canvasRef}
			>
				<Lights />
				{modelLoaded && (
					<Html position={[0, 1.5, -0.25]}>
						<button
							className="px-4 py-2 bg-neutral-300 rounded cursor-pointer hover:outline-4 outline-black font-bold"
							onClick={toggleScene}
						>
							Exit
						</button>
					</Html>
				)}
				{model === "A" ? (
					<RefContext.Provider value={canvasRef}>
						<ZoomExperience />
						<Html position={[0, -2, -0.25]}>
							<button
								className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded cursor-pointer hover:outline-4 font-bold"
								onClick={toggleScene}
							>
								Back
							</button>
						</Html>
					</RefContext.Provider>
				) : (
					<Suspense fallback={null}>
						<Physics>
							<MyApartment />

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
