import { call, ForkEffect, put, select, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import sagaUtility from "../../utils/sagaUtils";
import SearchRaceService from "../../services/SearchRaceService";
import { getListOfYearSuccess ,getListOfYearFailure,getListOfYearRequest, getRacesBySeasonRequest, getRacesBySeasonSuccess, getRacesBySeasonFailure, getRaceResultSuccess, getRaceResultFailure, getRaceResultsRequest} from "./reducer";

function* getListOfYearRequestGen() {
 yield sagaUtility(null,SearchRaceService.getListOfYears,getListOfYearSuccess,getListOfYearFailure);
}
function* getRacesBySeasonRequestGen(action:PayloadAction<any>) {
  yield sagaUtility(action.payload,SearchRaceService.getRacesBySelectedSeason,getRacesBySeasonSuccess,getRacesBySeasonFailure);
 }
function* getRaceResultsRequestGen(action:PayloadAction<any>) {
  yield sagaUtility(action.payload,SearchRaceService.getRaceResults,getRaceResultSuccess,getRaceResultFailure);
 }
export default function* searchRaceSaga():Generator<ForkEffect<never>,void>{
  yield takeLatest(getListOfYearRequest.type, getListOfYearRequestGen);
  yield takeLatest(getRacesBySeasonRequest.type, getRacesBySeasonRequestGen);
  yield takeLatest(getRaceResultsRequest.type, getRaceResultsRequestGen);
 
}
