import { createContext } from "react";
import { authStore } from "../auth";
import { servicesStore } from "../services";
import { helperStore } from "../helper";

export const initialState = {
  store: {
    ...authStore,
    ...servicesStore,
    ...helperStore
  },
  dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;
