import { Row } from "react-bootstrap";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from "../../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRaceResultsRequest } from "../../store/searchRace/reducer";
import { RaceResultsRequest } from "../../models/SearchRace";

const RaceResults = () =>{
   const dispatch = useDispatch();
    const selectedRace = useAppSelector((state) => state.searchRace.selectedRace) ?? undefined;
    const raceResults = useAppSelector((state) => state.searchRace.raceResults) ?? [];
    const selectedSeason = useAppSelector((state)=> state.searchRace.selectedSeason) ?? undefined;
    useEffect(() =>{
      if(selectedRace){
        
      }
      const form:RaceResultsRequest = {
        seasonYear:selectedSeason ?? "2025",
        round:selectedRace ?? "1"
      }
      dispatch(getRaceResultsRequest(form));
    },[selectedRace])
    return (
    <>
        <Row>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Driver&nbsp;(g)</TableCell>
            <TableCell align="right">Constructor&nbsp;(g)</TableCell>
            <TableCell align="right">Average speed&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {raceResults.map((row) => (
            <TableRow
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.driver.driverFirstAndLastName}</TableCell>
              <TableCell align="right">{row.constructor.name}</TableCell>
              <TableCell align="right">{row.averageSpeed?.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Row>
    </>
    );
}

export default RaceResults;