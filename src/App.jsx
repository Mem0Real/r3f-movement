import "./index.css";
import React, { useState } from "react";
import MyScene from "./components/3d-components/MyScene";
import Navbar from "./components/webpage-components/Navbar";

const App = () => {
	const [scene, showScene] = useState(false);

	const toggleScene = () => {
		showScene(!scene);
	};

	return (
		<div className="bg-black size-full min-h-screen flex flex-col items-center gap-5">
			{scene ? (
				<MyScene toggleScene={toggleScene} />
			) : (
				<>
					<Navbar />
					<button
						className="px-3 py-2 bg-neutral-200 z-50 rounded-2xl cursor-pointer"
						onClick={toggleScene}
					>
						Open Scene
					</button>
				</>
			)}
		</div>
	);
};

export default App;
