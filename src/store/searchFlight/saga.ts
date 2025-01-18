import { call, ForkEffect, put, select, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getLocationsFailure, getLocationsRequest, getLocationsSuccess, searchFlightsFailure, searchFlightsRequest, searchFlightsSuccess } from "./reducer";
import SearchFlightService from "../../services/SearchFlightService";
import sagaUtility from "../../utils/sagaUtils";

function* getLocationsRequestGen(action: PayloadAction<string>) {
 yield sagaUtility(action.payload,SearchFlightService.getLocations,getLocationsSuccess,getLocationsFailure);
}
function* searchFlightRequestGen(action: PayloadAction<any>) {
  yield sagaUtility(action.payload,SearchFlightService.searchFlight,searchFlightsSuccess,searchFlightsFailure);
 }
 
export default function* searchFlightSaga():Generator<ForkEffect<never>,void>{
  yield takeLatest(getLocationsRequest.type, getLocationsRequestGen);
  yield takeLatest(searchFlightsRequest.type, searchFlightRequestGen);
}
