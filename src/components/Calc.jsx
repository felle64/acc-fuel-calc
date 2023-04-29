export function Calc(race, lap, fuel){
   
    let result = (parseFloat(race*60)) / (parseFloat(lap)) * (parseFloat(fuel));
    //console.log(result);
    return result;
}

    
    