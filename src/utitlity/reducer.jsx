import { Action } from "./actions";
import { findIndex } from "./arrayindex";

export const initalValue=([
    {
      id:1,
      name:"jai",
      email:"jai@gmail.com",
      mobile:"9484484321",
      batch:""
    },
    {
      id:2,
      name:"raj",
      email:"raj@gmail.com",
      mobile:"9488884321",
      batch:""
    },
    {
      id:3,
      name:"vijay",
      email:"vijay@gmail.com",
      mobile:"9444484321",
      batch:""
    },
    {
      id:4,
      name:"ajith",
      email:"ajith@gmail.com",
      mobile:"9410484321",
      batch:""
    }
  
  ]);
function reducer(state,action){
    switch(action.type){
      case Action.ADD_USER:{ 
        state.push(action.payload);
        console.log(state);
        return[...state];
      }
      case Action.EDIT_USER:{ 
        let index=findIndex(action.payload.id);
        state.splice(index,1,action.payload)
        return[...state];
      }
      case Action.DELETE_USER:{ 
        let index=findIndex(state,action.payload);
        if(index!==-1){
          state.splice(index,1);
          console.log(state);
          return [...state];
        }
        else{
          return[...state]
        }
      }
      }
    }
    export default reducer