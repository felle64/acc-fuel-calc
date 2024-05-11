export function Calc(race, lapMin, lapSec, fuel) {
  // Convert lap time to minutes
  const lapTime = parseFloat(lapMin) + parseFloat(lapSec) / 60;
  // Check if any input value is NaN
  if (isNaN(race) || isNaN(lapTime) || isNaN(fuel)) {
    return NaN;
  }
  // Perform the calculation
  const result = (race / lapTime) * fuel;
  return result;
}
