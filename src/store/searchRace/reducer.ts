import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Race, RaceResult, Season } from '../../models/SearchRace';

export interface RaceSearchState{
seasons?: Season[];
loading:boolean;
error:any;
races?:Race[];
selectedSeason?:string;
selectedRace?:string;
raceResults?:RaceResult[];
}

const initialState: RaceSearchState = {
   seasons:undefined,
   loading:false,
   error:undefined,
   races:undefined,
   selectedSeason:undefined,
   selectedRace:undefined
};
//https://redux-toolkit.js.org/api/createSlice
const searchRaceSlice = createSlice({
    name:'searchRace',
    initialState,
    reducers:{
        getListOfYearRequest:(state:RaceSearchState) =>{
         state.loading=true;
        },
        getListOfYearSuccess:(state:RaceSearchState,action:PayloadAction<any>) =>{
        state.loading=false;
        state.error=undefined;
        state.seasons=action.payload;
        },
        getListOfYearFailure:(state:RaceSearchState,action:PayloadAction<any>) =>{
            state.loading=false;
            state.error=action.payload;
        },  
        setSelectedSeason(state:RaceSearchState,action:PayloadAction<any>){
            state.selectedSeason = action.payload;
        },
        getRacesBySeasonRequest:(state:RaceSearchState,action:PayloadAction<any>) =>{
            state.loading=true;
         },
        getRacesBySeasonSuccess:(state:RaceSearchState,action:PayloadAction<any>) =>{
           state.loading=false;
           state.error=undefined;
           state.races=action.payload;
           },
        getRacesBySeasonFailure:(state:RaceSearchState,action:PayloadAction<any>) =>{
            state.loading=false;
            state.error=action.payload;
           },  
        setSelectedRace:(state:RaceSearchState,action:PayloadAction<string>) =>{
            state.selectedRace = action.payload;
        },
        getRaceResultsRequest:(state:RaceSearchState,action:PayloadAction<any>) =>{
            state.loading=true;
         },
        getRaceResultSuccess:(state:RaceSearchState,action:PayloadAction<any>) =>{
           state.loading=false;
           state.error=undefined;
           state.raceResults=action.payload;
           },
        getRaceResultFailure:(state:RaceSearchState,action:PayloadAction<any>) =>{
            state.loading=false;
            state.error=action.payload;
           },  
    }
});

export const {
    getListOfYearRequest,
    getListOfYearSuccess,
    getListOfYearFailure,
    setSelectedSeason,
    getRacesBySeasonFailure,
    getRacesBySeasonRequest,
    getRacesBySeasonSuccess,
    setSelectedRace,
    getRaceResultFailure,
    getRaceResultSuccess,
    getRaceResultsRequest
} = searchRaceSlice.actions;
export default searchRaceSlice.reducer;