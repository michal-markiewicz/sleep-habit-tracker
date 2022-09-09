import { useState } from 'react';
import './App.css';

function App()
{
  const savedDaysFromLocalStorage = JSON.parse(localStorage.getItem("savedDays"));
  const [savedDays, setSavedDays] = useState(savedDaysFromLocalStorage === null ? [] : savedDaysFromLocalStorage);

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

    const newSavedDays = savedDays;
    newSavedDays.push(day);

    setSavedDays(newSavedDays);
    saveToLocalStorage(newSavedDays);
  }

  function saveToLocalStorage(savedDaysArray)
  {
    const savedDaysArrayJson = JSON.stringify(savedDaysArray);
    localStorage.setItem("savedDays", savedDaysArrayJson);
  }

  return (
    <div id="user-input">
      <div className="user-input-container">
        <label htmlFor="user-input-date">Day</label>
        <input type="date" id="user-input-date"></input>
      </div>

      <div className="user-input-container">
        <label htmlFor="user-input-relax-time">Relax time (h:m)</label>
        <input type="text" id="user-input-relax-time"></input>
      </div>

      <div className="user-input-container"> 
        <label htmlFor="user-input-sleep-time">Sleep time (h:m)</label>
        <input type="text" id="user-input-sleep-time"></input>
      </div>

      <div className="user-input-container">
        <label htmlFor="user-input-wake-time">Wake up time (h:m)</label>
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

function calculateAvg(hoursMinutesArray)
{
  // array format: ["10:20", "14:50", "06:20"];

  // 1. Get data, split hours and minutes 
  // 2. Sum minutes ((hours / 60) + minutes)
  // 3. Divide by number of days 
  // 4. Avg in minutes * 60 
  // 5. Use Math.round on remainder
  // 6. Add it to hours
  // 7. Return string value of result 

  let hours = 0;
  let minutes = 0;

  hoursMinutesArray.forEach((entry) => {
    const hoursMinutesSplit = entry.split(":");
    hours += Number(hoursMinutesSplit[0]);
    minutes += Number(hoursMinutesSplit[1]);
  })

  const sumOfMinutes = (hours * 60) + minutes;
  const avgFormula = sumOfMinutes / hoursMinutesArray.length;
  const convertToHours = avgFormula / 60;
  const getMinutes = Math.round((convertToHours % 1) * 60);
  const getHours = convertToHours - (convertToHours % 1);
  const result = `${getHours}:${getMinutes}`;
  
  return result;
}

console.log(calculateAvg(["10:20", "20:10", "19:13", "12:19", "06:20"]));

export default App;
