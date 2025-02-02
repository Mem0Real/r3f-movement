import { create } from "zustand";

export const useZus = create((set) => ({
	overlayOpacity: 0,
	model: "A",
	setOverlayOpacity: (val) => set({ overlayOpacity: val }),
	setModel: (val) => set({ model: val }),
}));
