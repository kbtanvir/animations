import { createStore } from "@poly-state/poly-state";
import { useStore } from "@poly-state/react";

export const initialState = {
  navBarFixed: false,
};

export type IStore = typeof initialState;

export const globalStore = createStore(initialState);

// if (process.env.NODE_ENV === "development") {
//   withDevTools(globalStore, "GOBAL_STORE");
// }

export const useGlobalStore = () => useStore<IStore>(globalStore);
