import { useEffect } from 'react';

export function UserInput({savedDays, setSavedDays, setAvgRelaxTime, setAvgSleepTime, setAvgWakeTime})
{
  function submitData()
  {
    if (formValidation() === false)
    {
      return console.log("Form data is not correct");
    }

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
    saveDaysInLocalStorage(newSavedDays);
    calculateEveryAvg();
  }

  function calculateEveryAvg()
  {
    const relaxTime = [];
    const sleepTime = [];
    const wakeTime = [];

    savedDays.forEach((day) => {
      relaxTime.push(day.relaxTime);
      sleepTime.push(day.sleepTime);
      wakeTime.push(day.wakeTime);
    })

    setAvgRelaxTime(calculateAvg(relaxTime));
    setAvgSleepTime(calculateAvg(sleepTime));
    setAvgWakeTime(calculateAvg(wakeTime));
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

    const minutesAfterCalc = Math.round(((convertToHours % 1) * 60));
    const formatMinutes = formatNumberToTwoDigits(minutesAfterCalc);
    const hoursAfterCalc = convertToHours - (convertToHours % 1);
    const formatHours = formatNumberToTwoDigits(hoursAfterCalc);

    const result = `${formatHours}:${formatMinutes}`;
    return result;
  }

  function formValidation()
  {
    const dateInput = document.getElementById('user-input-date');
    const relaxTimeInput = document.getElementById('user-input-relax-time');
    const sleepTimeInput = document.getElementById('user-input-sleep-time');
    const wakeTimeInput = document.getElementById('user-input-wake-time');

    let noErrors = true;

    function invalidInputValue(input)
    {
      input.style.backgroundColor = "#a83232";
      noErrors = false;
    }

    if (dateInput.value === '')
    {
      invalidInputValue(dateInput);
    }

    function isTimeFormatCorrect(input)
    {
      const timeFormat = /^[0-9]{1,2}[:][0-9]{1,2}$/;
      const hoursPattern = /^[0-9]{1,2}/;
      const minutesPattern = /[0-9]{1,2}$/;

      if (input.value.match(timeFormat) === null)
      {
        invalidInputValue(input);
      }
      else 
      {
        let hours = input.value.match(hoursPattern);
        hours = hours[0];
  
        let minutes = input.value.match(minutesPattern);
        minutes = minutes[0];
  
        if (hours > 23)
        {
          invalidInputValue(input);
        }
  
        if (minutes > 59)
        {
          invalidInputValue(input);
        }
      }

    }

    isTimeFormatCorrect(relaxTimeInput);
    isTimeFormatCorrect(sleepTimeInput);
    isTimeFormatCorrect(wakeTimeInput);

    if (noErrors === true)
    {
      dateInput.style.backgroundColor = "#DFF6FF";
      relaxTimeInput.style.backgroundColor = "#DFF6FF";
      sleepTimeInput.style.backgroundColor = "#DFF6FF";
      wakeTimeInput.style.backgroundColor = "#DFF6FF";

      return noErrors;
    }
    else if (noErrors === false)
    {
      return noErrors;
    }
  }

  function formatNumberToTwoDigits(num)
  {
    let str = num.toString();

    if (str.length === 1)
    {
      str = "0" + str;
    }

    return str;
  }

  function saveDaysInLocalStorage(savedDaysArray)
  {
    const savedDaysArrayJson = JSON.stringify(savedDaysArray);
    localStorage.setItem("savedDays", savedDaysArrayJson);
  }

  useEffect(() => {
    calculateEveryAvg();
  })

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

      <div className="user-input-container">
        <label htmlFor="user-input-quality">Sleep quality (1 - 10)</label>
        <input type="number" id="user-input-quality" min="1" max="10"></input>
      </div>

      <div id="button-container">
        <button id="submit-button" onClick={submitData}>Submit</button>
      </div>
    </div>
  );
}