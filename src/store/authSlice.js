import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    statuss : false,
    userData : null
}

const authSlice = createSlice(
    {
        name : "auth",
        initialState,
        reducers:
        {
            login:(state ,action)=>
            {
                state.statuss=true;
                state.userData=action.payload.userData;
            },
            logout:(state)=>
            {
                state.statuss=false;
                state.payload=null;
            }
            
        }
    })

export const {login,logout} =authSlice.reducer;

export default authSlice.reducer;
