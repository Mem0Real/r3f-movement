import { useEffect, useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Audio, AudioListener, AudioLoader } from "three";

export default function PlayerController() {
	const [, get] = useKeyboardControls();

	const sound = useRef(null);
	const lastLogTime = useRef(0);
	const lastJumpTime = useRef(0);

	const logDelay = 400;
	const stepSound = useLoader(AudioLoader, "/assets/audio/footstep5.mp3");
	let jumped = false;

	useEffect(() => {
		const listener = new AudioListener();
		const audio = new Audio(listener);
		audio.setBuffer(stepSound);
		audio.setVolume(0.4);
		audio.loop = true;
		sound.current = audio;

		const resumeAudio = async () => {
			if (audio.context.state === "suspended") await audio.context.resume();
		};

		document.addEventListener("click", resumeAudio);
		return () => document.removeEventListener("click", resumeAudio);
	}, []);

	useFrame(() => {
		const { forward, backward, leftward, rightward, jump } = get();
		const now = Date.now();

		if (jump && !jumped) {
			jumped = true;
			setTimeout(() => {
				jumped = false;
			}, 700);
		}

		// Check if any movement key is pressed
		if ((forward || backward || leftward || rightward) && !jumped) {
			// Only log if more than 1 second has passed since last log
			if (now - lastLogTime.current > logDelay) {
				if (sound.current && !sound.current.isPlaying) {
					sound.current.play();
					lastLogTime.current = now;
				}
			}
		} else {
			if (sound.current?.isPlaying) {
				sound.current.stop();
			}
		}
	});

	// Cleanup audio
	useEffect(() => {
		return () => {
			if (sound.current) {
				sound.current.stop();
				sound.current.disconnect();
			}
		};
	}, []);

	return null;
}
