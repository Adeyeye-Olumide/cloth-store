
export const setSpinnerStart = ()=>({ type: 'isSpinningStart'})

export const setSpinnerState2 =()=>({type: 'isSpinningStop'})



export const setSpinnerStop = (dispatch)=>{
    let timer = setTimeout(() => {
        dispatch(setSpinnerState2())
        clearTimeout(timer)
        
    }, 2000);

   
}



export const setSpinnerAction = ()=>(dispatch)=>{
    dispatch(setSpinnerStart())

    setSpinnerStop(dispatch)
    

    
}






