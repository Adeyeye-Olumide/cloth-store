

const initial_state = {
    isSpinning: false
}





export const spinnerReducer = (state = initial_state, action)=>{
    const {type, payload} = action
   
    switch (type) {
        case 'isSpinningStart':
            return {isSpinning: true}

        case 'isSpinningStop':

          
            return {isSpinning: false}


        default:
            return state
    }
}