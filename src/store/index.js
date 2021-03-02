import { createStore, combineReducers } from "redux";

import carrinhoReducer from "../store/modules/carrinho/reducer";
import lojaReducer from "../store/modules/loja/reducer";
//A gente importa nossos reducers.

const reducers = combineReducers({
  carrinho: carrinhoReducer,
  loja: lojaReducer,
});

const store = createStore(reducers);

export default store;
