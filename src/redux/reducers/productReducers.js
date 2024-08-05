import { FETCHINGPRODUCTS, FETCHINGPRODUCTSSUCESS, FETCHINGPRODUCTSERROR } from "../actions/productActions";

const initialState= {
    products: [],
    loader: false,
    error: null
}

export default function productReducer(state = initialState, actions){

    switch (actions.type) {
        case FETCHINGPRODUCTS:
            return {...state, loader: true }
            break;
        case FETCHINGPRODUCTSSUCESS:
            return {...state, products: actions.payload, loader: false }
            break;
        case FETCHINGPRODUCTSERROR:
            return {...state, error: actions.payload }
            break;
        default:
            return state
    }
}