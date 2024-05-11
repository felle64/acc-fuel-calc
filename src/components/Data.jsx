import { Calc } from "./Calc";
import { useState, useEffect } from "react";

export const Data = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [lapTimeMin, setLapTimeMin] = useState(0);
  const [lapTimeSec, setLapTimeSec] = useState(0);
  const [fuelPerLap, setFuelPerLap] = useState(0);
  const [result, setResult] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [exactFuel, setExactFuel] = useState(0);
  const [safeFuel, setSafeFuel] = useState(0);

  useEffect(() => {
    if (showResults) {
      const raceTime =
        (parseFloat(hours) || 0) * 60 + (parseFloat(minutes) || 0);
      const lapTime =
        (parseFloat(lapTimeMin) || 0) + (parseFloat(lapTimeSec) || 0) / 60; // Convert lap time to minutes
      const fuelNeeded = Calc(
        raceTime,
        parseFloat(lapTimeMin) || 0,
        parseFloat(lapTimeSec) || 0,
        fuelPerLap || 0
      ); // Pass lapTimeMin and lapTimeSec as separate parameters
      setResult(fuelNeeded);

      // Recalculate exact and safe fuel
      setExactFuel(Math.round(fuelNeeded * 100) / 100);
      setSafeFuel(
        Math.round((fuelNeeded + parseFloat(fuelPerLap || 0) * 2) * 100) / 100
      );
    }
  }, [hours, minutes, lapTimeMin, lapTimeSec, fuelPerLap, showResults]);

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleLapTimeMinChange = (event) => {
    setLapTimeMin(event.target.value);
  };

  const handleLapTimeSecChange = (event) => {
    setLapTimeSec(event.target.value);
  };

  const handleFuelPerLapChange = (event) => {
    setFuelPerLap(event.target.value);
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <>
      <h1 className="header">Simple ACC Fuel Calculator</h1>
      <div className="raceText">Hours and Minutes</div>
      <div className="inputHoursMinutes">
        <input
          className="inputHours"
          placeholder="Hours"
          type="number"
          onChange={handleHoursChange}
        />
        <input
          className="inputMinutes"
          placeholder="Minutes"
          type="number"
          onChange={handleMinutesChange}
        />
      </div>
      <div className="raceText">Average Laptime in minutes and seconds</div>
      <div className="inputLapTime">
        <input
          className="inputLapTimeMin"
          placeholder="Minutes"
          type="number"
          onChange={handleLapTimeMinChange}
        />
        <input
          className="inputLapTimeSec"
          placeholder="Seconds"
          type="number"
          onChange={handleLapTimeSecChange}
        />
      </div>
      <div className="raceText">Fuel Consumption per lap</div>
      <div className="input-group">
        <input
          className="input"
          placeholder="Fuel/Lap"
          type="number"
          id="fuelPerLap"
          step={0.01}
          onChange={handleFuelPerLapChange}
        />
      </div>
      <button className="calcBtn" onClick={handleCalculate}>
        Calculate
      </button>
      {showResults && (
        <div className="results" type="text">
          Fuel needed: {exactFuel} L (exact) or {safeFuel} (safe)
        </div>
      )}
      <p className="safeText">Safe adds 2 laps extra fuel</p>
      <footer className="footer">
        <p>
          Created by{" "}
          <a
            href="https://github.com/felle64/acc-fuel-calc"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            @Felle64
          </a>
        </p>
      </footer>
    </>
  );
};
