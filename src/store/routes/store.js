import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "../reducers";

//logger permettant de faire des "console.log" en gros
//thunk permettant de faire des actions en async en gros des requetes par exemples
export const store = createStore(reducers, applyMiddleware(logger, thunk))