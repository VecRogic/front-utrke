export interface FlightSearchRequest {
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: string; // use string here and parse it as needed
    returnDate?: string | null; // use string here and parse it as needed
    adults: number;
    currencyCode?: string;
    max: number;
    nonStop: boolean;
    travelClass?: TravelClass;
  }
  
  export enum TravelClass {
    ECONOMY = "ECONOMY",
    PREMIUM_ECONOMY = "PREMIUM_ECONOMY",
    BUSINESS = "BUSINESS",
    FIRST = "FIRST"
  }
  
  export enum Currency {
    USD = "USD",
    EUR = "EUR",
  }

  export interface Location{
    name:string,
    code:string,
    cityName:string
  }

// models/FlightSearchResult.ts

export interface Aircraft {
  carrierCode: string;
  aircraftNumber: string;
}

export interface FlightDetails {
  originIATA: string;
  destinationIATA: string;
  terminalDeparture: string;
  terminalArrival: string;
  duration: string;
  dateTimeOfDeparture: string;
  dateTimeOfArrival: string;
}

export interface FlightSearchResult {
  outwardFlight: FlightDetails;
  returnFlight: FlightDetails;
  totalPrice: number;
  ticketingDate: string;
  outwardAircraft: Aircraft;
  returnAircraft: Aircraft;
  numberOfBookableSeats: number;
}

export interface PaymentForm {
  total: number;
  currency: string;
  method: string;
  intent: string;
  description: string;
  cancelUrl: string;
  successUrl: string;
}