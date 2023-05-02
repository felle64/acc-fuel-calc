import {Calc} from "./Calc"
import { useState } from 'react';

export const Data = () =>{

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [lapTimeMin, setLapTimeMin] = useState(0);
    const [lapTimeSec, setLapTimeSec] = useState(0);
    const [fuelPerLap, setFuelPerLap] = useState(0);
    const [result, setResult] = useState(0);
    const [showResults, setShowResults] = useState(false);

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
        const raceTime = parseFloat(hours) * 60 + parseFloat(minutes);
        const lapTime = parseFloat(lapTimeMin) * 60 + parseFloat(lapTimeSec);
        const fuelNeeded = Calc(raceTime, lapTime, fuelPerLap);
        setResult(fuelNeeded);
        setShowResults(true);
    };

    return (<>
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
        <div className="raceText">Average Laptime in seconds</div>
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
        <button className="calcBtn" onClick={handleCalculate}>Calculate</button>
        {showResults && (
            <div 
                className="results" 
                type="text"
            >
                Fuel needed: {Math.round(result*100)/100} L (exact) or {Math.round((result+(fuelPerLap)*2)*100)/100} (safe)
            </div>
        )}
        <p className="safeText">Safe adds 2 laps extra fuel</p>
        <footer className="footer">
            <p>Created by <a 
                href="https://github.com/felle64/acc-fuel-calc"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                @Felle64

            </a></p>
        </footer>
    </>);
}
