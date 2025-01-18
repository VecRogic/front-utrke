import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Token } from '../../models/Account';

export interface AccountState {
    token?:Token;
    error:any;
    loginRequest:any;
    registerRequest:any;
    registerResponse:any;
    loading:boolean;
}

const initialState: AccountState = {
    token:undefined,
    error:undefined,
    loginRequest:undefined,
    registerRequest:undefined,
    registerResponse:undefined,
    loading:false
};
//https://redux-toolkit.js.org/api/createSlice
const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        login:(state:AccountState,action:PayloadAction<any>) =>{
            state.loginRequest = action.payload
            state.token = undefined
            state.error = undefined
            state.loading = true
        },
        loginSuccess:(state:AccountState,action:PayloadAction<any>) =>{
                state.token = action.payload;
                state.loginRequest = undefined
                state.error = undefined
                state.loading = false
        },
        loginFailed:(state:AccountState,action:PayloadAction<any>) =>{
                state.error = action.payload
                state.loginRequest = undefined
                state.token = undefined
                state.loading = false
        },
        register:(state:AccountState,action:PayloadAction<any>) =>{
            state.registerRequest = action.payload
            state.error = undefined
            state.registerResponse = undefined
            state.loading = true
        },
        registerSuccess:(state:AccountState,action:PayloadAction<any>) =>{
            state.registerRequest = undefined
            state.registerResponse = action.payload
            state.loading = false
        },
        registerFailed:(state:AccountState,action:PayloadAction<any>) =>{
            state.error = action.payload
            state.registerRequest = undefined
            state.loading = false
        },
        resetState:(state:AccountState) => {
            state.error = undefined;
            state.token = undefined;
        },
        logoutReq:() =>{
            
        },
        logoutSuccess:(state:AccountState,action:PayloadAction<any>) =>{
            state.token = undefined
        },
        logoutFailed:(state:AccountState,action:PayloadAction<any>) =>{
            state.error = action.payload

        },
        refreshDbReq:() =>{

        },
        refreshDbResponse:(state:AccountState,action:PayloadAction<any>) =>{
                state.error = action.payload
        },
        
    }
});

export const {
    login,
    loginSuccess,
    loginFailed,
    register,
    registerSuccess,
    registerFailed,
    resetState,
    logoutReq,
    logoutSuccess,
    logoutFailed,
    refreshDbReq,
    refreshDbResponse
} = accountSlice.actions;
export default accountSlice.reducer;