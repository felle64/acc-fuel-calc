import {Calc} from "./Calc"
import { useState } from 'react';

export const Data = () =>{
    //console.log("Reload");
    const [number1, setMessage] = useState(0);
    const [number2, setMessage2] = useState(1);
    const [number3, setMessage3] = useState(0);

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
      const handleChange2 = (event) => {
        setMessage2(event.target.value);
      };
      const handleChange3 = (event) => {
        setMessage3(event.target.value);
      };

    let result = Calc (number1,number2,number3)

    return (<>
        <h1 className="header">Simpel ACC Fuel Calculator</h1>
        <input
            className="input"
            placeholder="Race in min"
            type="number"
            id="number1"
            onChange={handleChange}
        />
        <div 
            className="raceText">
            Race distans in minutes
        </div>
        <input
            className="input"
            placeholder="Laptime in sec"
            type="number"
            id="number2"
            onChange={handleChange2}
        />
        <div 
            className="raceText">
            Average Laptime in seconds
        </div>
        <input
            className="input"
            placeholder="Fuel/Lap"
            type="number"
            id="number2"
            onChange={handleChange3}
        />
        <div 
            className="raceText">
            Fuel Consumption per lap
        </div>
        <div 
            className="results" 
            type="text">
            Fuel needed: {Math.round(result*100)/100} L (exact) or {Math.round((result+(number3)*2)*100)/100} (safe)
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
