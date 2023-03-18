const initialState = {
    count : 0 ,
    name : "ajay"
}  

const changeNumber = (state = initialState ,action) => {
    console.log(action)
    switch(action.type) {
        case "increment" :
        return {
            ...state,
            count : state.count + action.payload
        }
        case "decrement" : 
        return {
            ...state,
            count : state.count - action.payolad
        }
        case "change" : 
        return {
            ...state,
            name : "kalim"
        }
        default : return state
    } 
}

export default changeNumber