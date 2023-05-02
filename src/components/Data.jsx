import {Calc} from "./Calc"
import { useState } from 'react';

export const Data = () =>{
    //console.log("Reload");
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [fuelPerLap, setFuelPerLap] = useState(0);
    const [result, setResult] = useState(0);

    const handleHoursChange = (event) => {
        setHours(event.target.value);
        const newRaceTime = parseFloat(event.target.value) * 60 + parseFloat(minutes);
        setResult(Calc(newRaceTime, lapTime, fuelPerLap));
    };
    
    const handleMinutesChange = (event) => {
        setMinutes(event.target.value);
        const newRaceTime = parseFloat(hours) * 60 + parseFloat(event.target.value);
        setResult(Calc(newRaceTime, lapTime, fuelPerLap));
    };
    
    const handleLapTimeChange = (event) => {
        setLapTime(event.target.value);
        setResult(Calc(raceTime, event.target.value, fuelPerLap));
    };
    
    const handleFuelPerLapChange = (event) => {
        setFuelPerLap(event.target.value);
        setResult(Calc(raceTime, lapTime, event.target.value));
    };
    

    const raceTime = parseFloat(hours) * 60 + parseFloat(minutes);


    return (<>
        <h1 className="header">Simple ACC Fuel Calculator</h1>
        <div className="input-group">
            <input
                className="input"
                placeholder="Hours"
                type="number"
                id="hours"
                onChange={handleHoursChange}
            />
            <div className="raceText">Hours</div>
        </div>
        <div className="input-group">
            <input
                className="input"
                placeholder="Minutes"
                type="number"
                id="minutes"
                onChange={handleMinutesChange}
            />
            <div className="raceText">Minutes</div>
        </div>
        <div className="input-group">
            <input
                className="input"
                placeholder="Average Laptime in seconds"
                type="number"
                id="lapTime"
                onChange={handleLapTimeChange}
            />
            <div className="raceText">Average Laptime in seconds</div>
        </div>
        <div className="input-group">
            <input
                className="input"
                placeholder="Fuel/Lap"
                type="number"
                id="fuelPerLap"
                onChange={handleFuelPerLapChange}
            />
            <div className="raceText">Fuel Consumption per lap</div>
        </div>
        <div 
            className="results" 
            type="text"
            >
            
            Fuel needed: {Math.round(result*100)/100} L (exact) or {Math.round((result+(fuelPerLap)*2)*100)/100} (safe)
        </div>
        <p className="safeText">Safe adds 2 laps extra fuel</p>
        <footer className="footer">
            <p>Created by <a
                href="https://github.com/felle64/acc-fuel-calc"
                target="_blank"
                rel="noreferrer"
            >
                Felle64
            </a>
            </p>
        </footer>
    </>
    )
}
