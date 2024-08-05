
export const INCREMENT = "INCREMENT";
export const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () =>({
    type: DECREMENT
})

export const incrementByAmount = (amount) => ({
    type: INCREMENTBYAMOUNT,
    payload: amount
})