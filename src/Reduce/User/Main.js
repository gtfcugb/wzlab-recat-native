'use strict';

const initialState = 
{
    A:{content:1},
    B:{content:2}
}


function userReduce(state=initialState,action){
    switch (action.type) {
        case "USER_CLICK_A":
            return {
                ...state,
                A:{
                    ...state.A,
                    content:state.A.content+1
                }
            };
        case "USER_CLICK_B":
            return {
                ...state,
                B:{
                    ...state.B,
                    content:state.B.content+1
                }
        };
        default:
            return state
  }
}


module.exports = userReduce;