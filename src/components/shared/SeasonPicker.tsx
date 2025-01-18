import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getListOfYearRequest, setSelectedSeason } from "../../store/searchRace/reducer";
import { useAppSelector } from "../../store";
import { Season } from "../../models/SearchRace";

const SeasonPicker = () => {
  const dispatch = useDispatch();
  const seasons = useAppSelector((state) => state.searchRace.seasons) ?? []; // Fallback to an empty array

  // Fetch seasons if not already fetched
  useEffect(() => {
    if (seasons.length === 0) {
      dispatch(getListOfYearRequest());
    }
    console.log("Seasons Loaded:", seasons); // Debugging loaded seasons
  }, [dispatch, seasons]);

  const [selectedSeasonYear, setSelectedSeasonYear] = useState<string | number | null>(null);

  const handleSeasonSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSeason = e.target.value;
    dispatch(setSelectedSeason(selectedSeason));
    setSelectedSeasonYear(selectedSeason);
    alert(`You selected season: ${e.target.value}`);
  };
 
  return (
    <div>
      <h2>Season Picker</h2>
      <select onChange={handleSeasonSelect} value={selectedSeasonYear || ""}>
  <option value="" disabled>
    Select a Season
  </option>
  {/* Ensure seasons is an array */}
  {Array.isArray(seasons) && seasons.length > 0 ? (
    seasons.map((season: Season) => (
      <option key={season.seasonYear} value={season.seasonYear}>
        {season.seasonYear}
      </option>
    ))
  ) : (
    <option disabled>No seasons available</option>
  )}
</select>
      {selectedSeasonYear && <p>Selected Season: {selectedSeasonYear}</p>}
    </div>
  );
};

export default SeasonPicker;