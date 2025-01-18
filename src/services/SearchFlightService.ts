import { getAxiosInstance } from "../utils/axiosUtils"

export default class SearchFlightService{

    static getLocations(keyword:string){
       return getAxiosInstance().get(`http://localhost:8080/amadeus/getLocationsByKeyword?keyword=${keyword}`);
    }

    static searchFlight(form:any){
        return getAxiosInstance().post(`http://localhost:8080/amadeus/searchFlight`,form);
    }
}