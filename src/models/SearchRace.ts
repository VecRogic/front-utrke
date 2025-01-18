export interface Season {
  seasonYear:string;
  }
  
  
  export interface Race {
    round: string;
    raceName: string;
  }
  export interface Driver {
    driverId: string; // Unique identifier for the driver
    driverFirstAndLastName: string; // Full name of the driver
  }
  
  export interface Constructor {
    constructorId: string; // Unique identifier for the constructor (team)
    name: string; // Constructor's name (e.g., "Red Bull")
  }
  
  export interface Time {
    time: string; // Time taken to complete the race
  }
  
  export interface AverageSpeed {
    speed: string; // Average speed during the race
  }
  
  export interface RaceResult {
    number: string;
    position: string; // Driver's finishing position
    points: number | null; // Points earned (nullable)
    driver: Driver; // Driver details
    constructor: Constructor; // Constructor details
    time?: Time; // Optional time details
    averageSpeed?: AverageSpeed; // Optional average speed details
  }
  

export interface RaceResultsRequest{
  seasonYear:string,
  round:string
}