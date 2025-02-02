import { ModernB } from "../../assets/models/ModernB";

export const ZoomExperience = ({ canvasRef }) => {
	return (
		<>
			<ambientLight intensity={1} />
			<ModernB scale={0.2} position={[-1.22, 0, 1]} canvasRef={canvasRef} />
		</>
	);
};
