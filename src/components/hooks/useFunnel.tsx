import { create } from "zustand";

interface AppState {
  funnel: Funnel | null;
  setFunnel: (funnel: Funnel) => void;
}

export const useFunnel = create<AppState>((set) => ({
  funnel: null,
  setFunnel: (funnel: Funnel) => {
    set(() => ({
      funnel,
    }));
  },
}));
