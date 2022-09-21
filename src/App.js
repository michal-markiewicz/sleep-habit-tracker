import { ShowData } from './ShowData.js';
import { UserInput } from './UserInput.js';
import { useState } from 'react';
import './App.css';

function App()
{
  const daysSavedInLocalStorage = JSON.parse(localStorage.getItem("savedDays"));
  const [savedDays, setSavedDays] = useState(daysSavedInLocalStorage === null ? [] : daysSavedInLocalStorage);

  const [avgRelaxTime, setAvgRelaxTime] = useState(null);
  const [avgSleepTime, setAvgSleepTime] = useState(null);
  const [avgWakeTime, setAvgWakeTime] = useState(null);

  return (
    <div id="app">
      <h1>Sleep habit tracker</h1>
      <p>Add data about your sleep habits and get access to personalized analysis.</p>
      <div className="flexbox-container">
        <UserInput savedDays={savedDays} setSavedDays={setSavedDays} setAvgRelaxTime={setAvgRelaxTime} setAvgSleepTime={setAvgSleepTime} setAvgWakeTime={setAvgWakeTime} />
        <ShowData avgRelaxTime={avgRelaxTime} avgSleepTime={avgSleepTime} avgWakeTime={avgWakeTime} />
      </div>
    </div>
  );
}

export default App;
