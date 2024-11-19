import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './Slices/UsersSlice';

const store = configureStore({
    reducer:{
        users: UserReducer,
    }
})

export default store