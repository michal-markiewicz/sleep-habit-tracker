import { useState } from 'react';
import './App.css';

function App()
{
  
  const [savedDays, setSavedDays] = useState([]);

  return (
    <div id="app">
      <h1>Sleep habit tracker</h1>
        <UserInput savedDays={savedDays} setSavedDays={setSavedDays} />
        <ShowData />
    </div>
  );
}

function UserInput({savedDays, setSavedDays})
{
  function submitData()
  {
    const date = document.getElementById('user-input-date');
    const relaxTime = document.getElementById('user-input-relax-time');
    const sleepTime = document.getElementById('user-input-sleep-time');
    const wakeTime = document.getElementById('user-input-wake-time');

    const day = {
      date: date.value,
      relaxTime: relaxTime.value,
      sleepTime: sleepTime.value,
      wakeTime: wakeTime.value
    }

    savedDays.push(day);
    setSavedDays(savedDays);
  }

  return (
    <div id="user-input">
      <div className="user-input-container">
        <label htmlFor="user-input-date">Day</label>
        <input type="date" id="user-input-date"></input>
      </div>

      <div className="user-input-container">
        <label htmlFor="user-input-relax-time">Relax time</label>
        <input type="text" id="user-input-relax-time"></input>
      </div>

      <div className="user-input-container"> 
        <label htmlFor="user-input-sleep-time">Sleep time</label>
        <input type="text" id="user-input-sleep-time"></input>
      </div>

      <div className="user-input-container">
        <label htmlFor="user-input-wake-time">Wake up time</label>
        <input type="text" id="user-input-wake-time"></input>
      </div>

      <div id="button-container">
        <button id="submit-button" onClick={submitData}>Submit</button>
      </div>
    </div>
  );
}

function ShowData()
{
  return (
    <div id="show-data">
      <AvgRelaxTime />
      <AvgSleepTime />
      <AvgWakeTime />
    </div>
  );
}

function AvgRelaxTime()
{
  return (
    <div>
      <h2>Avg Relax Time</h2>
      <b>20:00</b>
    </div>
  );
}

function AvgSleepTime()
{
  return (
    <div>
      <h2>Avg Sleep Time</h2>
      <b>23:00</b>
    </div>
  );
}

function AvgWakeTime()
{
  return (
    <div>
      <h2>Avg Wake Time</h2>
      <b>9:00</b>
    </div>
  );
}

export default App;
