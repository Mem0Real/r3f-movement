import { useThree } from "@react-three/fiber";
import { Audio, AudioListener, AudioLoader } from "three";

function FootstepGenerator() {
	const { camera } = useThree();
	useEffect(() => {
		const listener = new AudioListener();
		camera.add(listener);

		const sound = new Audio(listener);

		const audioLoader = new AudioLoader();
		audioLoader.load("/footstep.mp3", (buffer) => {
			sound.setBuffer(buffer);
			// sound.setLoop(true);
			sound.setVolume(0.5);

			const handleClick = () => {
				sound.play();
			};
			window.addEventListener("click", handleClick);
		});
	}, []);

	return null;
}
