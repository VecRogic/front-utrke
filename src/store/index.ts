import { combineReducers } from '@reduxjs/toolkit';
import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from './configureStore';
import searchRaceSaga from './searchRace/saga';
import searchRaceReducer from './searchRace/reducer';
export const rootReducer = combineReducers({
  searchRace:searchRaceReducer

});

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(searchRaceSaga)]);
}

// Type definitions for use in the app
 type RootState = ReturnType<typeof rootReducer>;
 type AppDispatch = typeof store.dispatch; // Updated usage

// Custom hooks for using Redux state and dispatch with TypeScript
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
