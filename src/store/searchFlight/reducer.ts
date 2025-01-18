import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Currency, FlightSearchRequest, FlightSearchResult, Location } from '../../models/SearchFlight';

export interface SearchFlightState {
searchLocationsRequest:any,
locations?:Location[];
errors:any;
locationKeyword:string;
searchFlightRequest?:FlightSearchRequest;
searchFlightResponse:FlightSearchResult[] | null;
loading:boolean;
fetchingResults:boolean;
currency:string
}

const initialState: SearchFlightState = {
    searchLocationsRequest:undefined,
    locations:[],
    errors:undefined,
    locationKeyword:'a',
    searchFlightRequest:undefined,
    searchFlightResponse:null,
    loading:false,
    currency:Currency.USD,
    fetchingResults:false
};
//https://redux-toolkit.js.org/api/createSlice
const searchFlightSlice = createSlice({
    name:'searchFlight',
    initialState,
    reducers:{
        setLocations:(state:SearchFlightState) =>{
                state.locations = [];
        },
        getLocationsRequest:(state:SearchFlightState,action:PayloadAction<string>) =>{
            state.errors = undefined;
            state.searchLocationsRequest = state.locationKeyword;
            state.loading = true;
        },
        getLocationsSuccess:(state:SearchFlightState,action:PayloadAction<any>) =>{
            state.locations = action.payload;
            state.loading = false;
        },
        getLocationsFailure:(state:SearchFlightState,action:PayloadAction<any>) =>{
            state.errors = action.payload;
            state.loading = false;
        },  
        searchFlightsRequest:(state:SearchFlightState,action:PayloadAction<FlightSearchRequest>) =>{
            state.searchFlightRequest = action.payload;
            state.searchFlightResponse = null;
            state.loading = true;
            state.fetchingResults = true;
        },
        searchFlightsSuccess:(state:SearchFlightState,action:PayloadAction<any>) =>{
            state.currency = state.searchFlightRequest?.currencyCode ?? Currency.USD;
            state.searchFlightRequest = undefined;
            state.searchFlightResponse = action.payload;
            state.loading = false;
            state.fetchingResults = false;
        },
        searchFlightsFailure:(state:SearchFlightState,action:PayloadAction<any>) =>{
            state.searchFlightRequest = undefined;
            state.errors = undefined;
            state.loading = false;
            state.fetchingResults = false;
        }  

    }
});

export const {
   getLocationsRequest,
   getLocationsSuccess,
   getLocationsFailure,
   setLocations,
   searchFlightsFailure,
   searchFlightsRequest,
   searchFlightsSuccess
} = searchFlightSlice.actions;
export default searchFlightSlice.reducer;