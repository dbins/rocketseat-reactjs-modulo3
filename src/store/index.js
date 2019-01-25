import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
//import { create } from "domain";

//Alteracao por causa do Reactotron
const createAppropriateStore =
  process.env.NODE_ENV !== "production"
    ? console.tron.createStore
    : createStore;

//const store = createStore(reducers); //Importando todos os reducers
//Alteracao por causa do Reactotron
const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));
export default store;
