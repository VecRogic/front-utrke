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
import { useAppDispatch, useAppSelector } from "../../store";
import { useParams } from "react-router-dom";
import { getConstructorDetailsRequest } from "../../store/searchRace/reducer";

// Mock Data for Constructor and Drivers
const constructor = {
  constructorId: "red_bull",
  url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
  name: "Red Bull",
  nationality: "Austrian",
};

const drivers = [
  {
    driverId: "alonso",
    code: "ALO",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    givenName: "Fernando",
    familyName: "Alonso",
    nationality: "Spanish",
  },
  {
    driverId: "verstappen",
    code: "VER",
    url: "http://en.wikipedia.org/wiki/Max_Verstappen",
    givenName: "Max",
    familyName: "Verstappen",
    nationality: "Dutch",
  },
  {
    driverId: "webber",
    code: "WEB",
    url: "http://en.wikipedia.org/wiki/Mark_Webber",
    givenName: "Mark",
    familyName: "Webber",
    nationality: "Australian",
  },
];
const ConstructorDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const constructorDetails =
    useAppSelector((state) => state.searchRace.constructorDetails) ?? undefined;
  useEffect(() => {
    if (id) dispatch(getConstructorDetailsRequest(id));
  }, [id]);
  return (
    <>
      {constructorDetails ? (
        <Box sx={{ p: 4 }}>
          <Card sx={{ mb: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {constructorDetails.constructor.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                Nationality: {constructorDetails.constructor.nationality}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="primary"
                href={constructorDetails.constructor.url}
                target="_blank"
              >
                View Wikipedia
              </Button>
            </CardActions>
          </Card>
          <Typography variant="h4" gutterBottom>
            Drivers Who Have Driven for {constructor.name}
          </Typography>
          {constructorDetails.drivers?.length > 0 ? (
            <Grid container spacing={3}>
              {constructorDetails.drivers.map((driver, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {driver.firstAndLastName}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <strong>Code:</strong> {driver.code}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Date of Birth:</strong>{" "}
                        {new Date(
                          driver.dateOfBirth
                        ).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Nationality:</strong> {driver.nationality}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        href={driver.url}
                        target="_blank"
                      >
                        View Wikipedia
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              No drivers found for this constructor.
            </Typography>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            p: 4,
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No Data Available
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            We couldn’t find any details for the selected constructor.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </Box>
      )}
    </>
  );
};

export default ConstructorDetails;
