import { createSlice } from "@reduxjs/toolkit";
import UserData from "../../data/UserData";


const UserSlice = createSlice({
    name:"users",
    initialState:UserData,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        removeUser:(state,action)=>{
            return state.filter((user=>user.id!==action.payload.id))
        },

        UpdateUser:(state,action)=>{
            const index = state.findIndex((user)=>user.id===action.payload.id);
            if (index!==-1){
                state[index] = action.payload;
        }


    }
    }
})

export const {addUser ,removeUser ,UpdateUser} = UserSlice.actions;
export default UserSlice.reducer;