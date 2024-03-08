"use client";

import {create} from 'zustand';

type ActiveSectionState = {
  activeSection: string;
  timeOfLastClick: number;
  setActiveSection: (section: string) => void;
  setTimeOfLastClick: (time: number) => void;
};

export const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (section) => set((state) => ({ ...state, activeSection: section })),
  setTimeOfLastClick: (time) => set((state) => ({ ...state, timeOfLastClick: time })),
}));

// No need for ActiveSectionContextProvider anymore

export function useActiveSectionContext() {
  const { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionStore();

  return { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick };
}
