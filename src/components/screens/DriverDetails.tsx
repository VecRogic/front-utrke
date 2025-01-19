import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { getDriverDetailsRequest } from "../../store/searchRace/reducer";
import { styleText } from "util";

// Mock Data
const driver = {
  driverId: "alonso",
  code: "ALO",
  url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
  givenName: "Fernando",
  familyName: "Alonso",
  dateOfBirth: "1981-07-29",
  nationality: "Spanish",
};

const raceArray = [
  {
    season: "2001",
    round: "1",
    url: "http://en.wikipedia.org/wiki/2001_Australian_Grand_Prix",
    raceName: "Australian Grand Prix",
    Circuit: {
      circuitId: "albert_park",
      url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
      circuitName: "Albert Park Grand Prix Circuit",
      Location: {
        lat: "-37.8497",
        long: "144.968",
        locality: "Melbourne",
        country: "Australia",
      },
    },
    date: "2001-03-04",
  },
  {
    season: "2001",
    round: "2",
    url: "http://en.wikipedia.org/wiki/2001_Malaysian_Grand_Prix",
    raceName: "Malaysian Grand Prix",
    Circuit: {
      circuitId: "sepang",
      url: "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
      circuitName: "Sepang International Circuit",
      Location: {
        lat: "2.76083",
        long: "101.738",
        locality: "Kuala Lumpur",
        country: "Malaysia",
      },
    },
    date: "2001-03-18",
  },
  {
    season: "2001",
    round: "9",
    url: "http://en.wikipedia.org/wiki/2001_European_Grand_Prix",
    raceName: "European Grand Prix",
    Circuit: {
      circuitId: "nurburgring",
      url: "http://en.wikipedia.org/wiki/N%C3%BCrburgring",
      circuitName: "Nürburgring",
      Location: {
        lat: "50.3356",
        long: "6.9475",
        locality: "Nürburg",
        country: "Germany",
      },
    },
    date: "2001-06-24",
  },
];

const DriverDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const driverDetails =
    useAppSelector((state) => state.searchRace.driverDetails) ?? undefined;
  useEffect(() => {
    if (id) dispatch(getDriverDetailsRequest(id));
  }, [id]);
  return (
    <>
      {!driverDetails ? (
        <Box sx={{ p: 4 }}>
          {/* Driver Details Card */}
          <Card sx={{ mb: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {driver.givenName} {driver.familyName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Code: {driver.code}
              </Typography>
              <Typography variant="body1">
                <strong>Date of Birth:</strong>{" "}
                {new Date(driver.dateOfBirth).toLocaleDateString()}
              </Typography>
              <Typography variant="body1">
                <strong>Nationality:</strong> {driver.nationality}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="primary"
                href={driver.url}
                target="_blank"
              >
                View Wikipedia
              </Button>
            </CardActions>
          </Card>

          {/* Race Details */}
          <Typography variant="h4" gutterBottom>
            Race Details
          </Typography>
          <Grid container spacing={3}>
            {raceArray.map((race, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {race.raceName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      <strong>Season:</strong> {race.season},{" "}
                      <strong>Round:</strong> {race.round}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Date:</strong>{" "}
                      {new Date(race.date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Location:</strong>{" "}
                      {race.Circuit.Location.locality},{" "}
                      {race.Circuit.Location.country}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Circuit:</strong>{" "}
                      <a
                        href={race.Circuit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {race.Circuit.circuitName}
                      </a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      href={race.url}
                      target="_blank"
                    >
                      View Race
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default DriverDetails;
