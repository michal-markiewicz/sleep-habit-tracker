import './App.css';

function App()
{
  return (
    <div id="app">
      <h1>Sleep habit tracker</h1>
        <UserInput />
        <ShowData />
    </div>
  );
}

function UserInput()
{
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
      <h2>Average Relax Time</h2>
      <b>20:00</b>
    </div>
  );
}

function AvgSleepTime()
{
  return (
    <div>
      <h2>Average Sleep Time</h2>
      <b>23:00</b>
    </div>
  );
}

function AvgWakeTime()
{
  return (
    <div>
      <h2>Average Wake Time</h2>
      <b>9:00</b>
    </div>
  );
}

export default App;
