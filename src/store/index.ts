import { combineReducers } from '@reduxjs/toolkit';
import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import accountReducer from './account/reducer';
import accountSaga from './account/saga';
import store from './configureStore';
import searchFlightReducer from './searchFlight/reducer';
import searchFlightSaga from './searchFlight/saga';
import payPalReducer from './payPal/reducer';
import payPalSaga from './payPal/saga';

export const rootReducer = combineReducers({
  account: accountReducer,
  searchFlight : searchFlightReducer,
  payPal : payPalReducer
});

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(accountSaga),fork(searchFlightSaga),fork(payPalSaga)]);
}

// Type definitions for use in the app
 type RootState = ReturnType<typeof rootReducer>;
 type AppDispatch = typeof store.dispatch; // Updated usage

// Custom hooks for using Redux state and dispatch with TypeScript
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
