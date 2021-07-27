import { createStore , combineReducers} from "redux";
import ProductsReducers from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";

const rootReducer = combineReducers({
    ProductsReducers,
    CartReducer
})


const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;