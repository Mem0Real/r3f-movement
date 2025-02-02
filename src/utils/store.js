import { create } from "zustand";
import { createRef, useRef } from "react";

export const useZus = create((set) => ({
	overlayOpacity: 0,
	model: "A",
	modelLoaded: false,
	toggleModelLoaded: () =>
		set((state) => ({ modelLoaded: !state.modelLoaded })),
	setOverlayOpacity: (val) => set({ overlayOpacity: val }),
	setModel: (val) => set({ model: val }),

	canvasRef: createRef(),
	setCanvasRef: (el) => {
		if (!el) return;
		const newRef = createRef();
		newRef.current = el;
		set({ canvasRef: newRef });
	},
}));
