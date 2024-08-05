import { INCREMENT, DECREMENT, INCREMENTBYAMOUNT } from "../actions/countActions";

const initialState= {
    value: 0
}

export default function counterReducer(state = initialState, actions){

    switch (actions.type) {
        case INCREMENT:
            return {...state, value: state.value+1}
            break;
        case DECREMENT:
            return {...state, value: state.value-1}
            break;
        case INCREMENTBYAMOUNT:
            return {...state, value: state.value + actions.payload}
            break;
        default:
            return state
    }
}