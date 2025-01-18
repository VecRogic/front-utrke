import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedRace, getRacesBySeasonRequest } from "../../store/searchRace/reducer";
import { useAppSelector } from "../../store";
import { Race, Season } from "../../models/SearchRace";

const RacePicker = () => {
  const dispatch = useDispatch();
  const races = useAppSelector((state) => state.searchRace.races) ?? []; // Fallback to an empty array
  const seletedYear = useAppSelector((state)=> state.searchRace.selectedSeason) ?? undefined;    
  // Fetch seasons if not already fetched
  useEffect(() => {
    if (seletedYear) {
      dispatch(getRacesBySeasonRequest(seletedYear));
    }
    console.log("Races Loaded:", races); // Debugging loaded seasons
  }, [seletedYear]);

  const [selectedRaces, setSelectedRaces] = useState<string | number | null>(null);

  const handleRaceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setSelectedRaces(e.target.value);
    dispatch(setSelectedRace(e.target.value));
    alert(`You selected race: ${e.target.value}`);
  };

  return (
    <div>
      <h2>Race Picker</h2>
      <select onChange={handleRaceSelect} value={selectedRaces || ""}>
  <option value="" disabled>
    Select a Race
  </option>
  {/* Ensure races is an array */}
  {Array.isArray(races) && races.length > 0 ? (
    races.map((races: Race) => (
      <option key={races.round} value={races.round}>
        {races.raceName}
      </option>
    ))
  ) : (
    <option disabled>No races available</option>
  )}
</select>
      {selectedRaces && <p>Selected Race: {selectedRaces}</p>}
    </div>
  );
};

export default RacePicker;