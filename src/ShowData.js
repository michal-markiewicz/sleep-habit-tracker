export function ShowData({avgRelaxTime, avgSleepTime, avgWakeTime})
{
  return (
    <div id="show-data">
      <AvgRelaxTime avgRelaxTime={avgRelaxTime} />
      <AvgSleepTime avgSleepTime={avgSleepTime}/>
      <AvgWakeTime avgWakeTime={avgWakeTime}/>
    </div>
  );
}

function AvgRelaxTime({avgRelaxTime})
{
  return (
    <div>
      <h2>Avg Relax Time</h2>
      <b>{avgRelaxTime}</b>
    </div>
  );
}

function AvgSleepTime({avgSleepTime})
{
  return (
    <div>
      <h2>Avg Sleep Time</h2>
      <b>{avgSleepTime}</b>
    </div>
  );
}

function AvgWakeTime({avgWakeTime})
{
  return (
    <div>
      <h2>Avg Wake Time</h2>
      <b>{avgWakeTime}</b>
    </div>
  );
}