import { ShowData } from './ShowData.js';
import { UserInput } from './UserInput.js';
import { useState } from 'react';
import './App.css';

function App()
{
  const savedDaysFromLocalStorage = JSON.parse(localStorage.getItem("savedDays"));
  const [savedDays, setSavedDays] = useState(savedDaysFromLocalStorage === null ? [] : savedDaysFromLocalStorage);
  const test = "123";

  const [avgRelaxTimeCalculated, setAvgRelaxTime] = useState(null);
  const [avgSleepTimeCalculated, setAvgSleepTime] = useState(null);
  const [avgWakeTimeCalculated, setAvgWakeTime] = useState(null);

  return (
    <div id="app">
      <h1>Sleep habit tracker</h1>
        <UserInput savedDays={savedDays} setSavedDays={setSavedDays} setAvgRelaxTime={setAvgRelaxTime} setAvgSleepTime={setAvgSleepTime} setAvgWakeTime={setAvgWakeTime} />
        <ShowData savedDays={savedDays} avgRelaxTimeCalculated={avgRelaxTimeCalculated} avgSleepTimeCalculated={avgSleepTimeCalculated} avgWakeTimeCalculated={avgWakeTimeCalculated} />
    </div>
  );
}

export default App;
