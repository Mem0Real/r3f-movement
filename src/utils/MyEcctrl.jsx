import Ecctrl from "ecctrl";

const MyEcctrl = ({ children, perspective = "FIRST_PERSON", props = {} }) => {
	return (
		<Ecctrl
			// ref={ref}
			dampingC={0.1}
			floatingDis={1.5}
			autoBalance={false}
			jumpVel={0}
			{...(perspective === "FIRST_PERSON"
				? {
						camInitDis: -0.01,
						camMinDis: -0.01,
						camFollowMult: 100,
						turnVelMultiplier: 1,
						turnSpeed: 10,
						mode: "CameraBasedMovement",
				  }
				: {})}
			{...props}
		>
			{children}
		</Ecctrl>
	);
};

export default MyEcctrl;
