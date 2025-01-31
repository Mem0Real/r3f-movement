import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl from "ecctrl";
import AudioController from "./AudioController";

export default function PlayerController() {
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

	return (
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
				maxVelLimit={1}
			/>
			<AudioController />
		</KeyboardControls>
	);
}
