import React, { useReducer } from "react";
import Context from "./config";
import authReducer, { authStore } from "../auth";
import servicesReducer, { servicesStore } from '../services';
import helperReducer, { helperStore } from '../helper';
import middleware from "./middleware";

const Store = props => {
  const [authState, authDispatch] = useReducer(authReducer, authStore);
  const [servicesState, servicesDispatch] = useReducer(servicesReducer, servicesStore);
  const [helperState, helperDispatch] = useReducer(helperReducer, helperStore);

  const trigglerDispatchs = action => {
    const dispatchs = [authDispatch, servicesDispatch, helperDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...authState,
      ...servicesState,
      ...helperState,
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
