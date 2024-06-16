import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
const initialValue={
    name:"jaiganesh",
    count:0
}
const reducer=(state,action)=>{
switch(action.type){
    case"increament": return{
        ...state,
        count:state.count+1
    }
    case"decrement": return{
        ...state,
        count:state.count-1
    }
    case"reset": return{
        ...state,
        count:0
    }
    case"rename": return{
        ...state,
        name:action.payload
    }
}
}
function UseReducer() {
    let [state,dispatch]=useReducer(reducer,initialValue)
  return (
    <div className="container">
        <div className="row">
            <input type='text' onChange={(e)=>dispatch({type:"rename",payload:e.target.value})}/>
        </div>
        <h3>Name is {state.name}</h3>
        <div className=''>
            <Button variant="primary" onClick={()=>dispatch({type:"decrement"})}>-</Button>
            &nbsp; &nbsp;
            {state.count}
            &nbsp; &nbsp;
            <Button variant="primary" onClick={()=>dispatch({type:"increament"})}>+</Button>
        </div>
        <div className="">
            <Button variant="primary" onClick={()=>dispatch({type:"reset"})}>Reset</Button>    
        </div>
    </div>
  )
}

export default UseReducer