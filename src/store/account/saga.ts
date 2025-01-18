import { PayloadAction } from "@reduxjs/toolkit";
import { ForkEffect, takeLatest } from "redux-saga/effects";
import { login, loginFailed, loginSuccess, logoutFailed, logoutReq, logoutSuccess, refreshDbReq, refreshDbResponse, register, registerFailed, registerSuccess } from "./reducer";
import handleRequest from "../../utils/sagaUtils";
import AccountService from "../../services/AccountService";


export default function* accountSaga():Generator<ForkEffect<never>,void>{
    yield takeLatest(login.type,loginGen);
    yield takeLatest(register.type,registerGen);
    yield takeLatest(logoutReq.type,logoutGen);
    yield takeLatest(refreshDbReq.type,refreshDbGen);
}
function* loginGen(action:PayloadAction<any>){
    yield handleRequest(
        action.payload,
        AccountService.login,
        loginSuccess,
        loginFailed
    );
}
function* registerGen(action:PayloadAction<any>){
    yield handleRequest(
        action.payload,
        AccountService.register,
        registerSuccess,
        registerFailed
    );
}
function* logoutGen(){
    yield handleRequest(
        null,
        AccountService.logout,
        logoutSuccess,
        logoutFailed
    );
}
function* refreshDbGen(){
    yield handleRequest(
        null,
        AccountService.refreshDb,
        refreshDbResponse,
        refreshDbResponse
    );
}