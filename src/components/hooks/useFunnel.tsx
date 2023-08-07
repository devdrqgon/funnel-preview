import { create } from "zustand";
import funnel from "./../../temp-input.json";
interface AppState {
  funnel: Funnel | null;
  setFunnel: (funnel: Funnel) => void;
}

export const useFunnel = create<AppState>((set) => ({
  funnel: funnel as Funnel,
  setFunnel: (funnel: Funnel) => {
    set(() => ({
      funnel,
    }));
  },
}));
