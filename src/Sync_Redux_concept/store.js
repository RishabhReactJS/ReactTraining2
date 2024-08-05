import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSclie";
import counterReducer from "./redux/reducers/counterReducer";
// import rootREducer from "./redux/rootReducer"
export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})