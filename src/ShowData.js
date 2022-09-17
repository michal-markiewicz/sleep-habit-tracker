import { useState } from 'react';

export function ShowData({avgRelaxTimeCalculated, avgSleepTimeCalculated, avgWakeTimeCalculated})
{
  return (
    <div id="show-data">
      <AvgRelaxTime avgRelaxTimeCalculated={avgRelaxTimeCalculated} />
      <AvgSleepTime avgSleepTimeCalculated={avgSleepTimeCalculated}/>
      <AvgWakeTime avgWakeTimeCalculated={avgWakeTimeCalculated}/>
    </div>
  );
}

function AvgRelaxTime({avgRelaxTimeCalculated})
{
  return (
    <div>
      <h2>Avg Relax Time</h2>
      <b>{avgRelaxTimeCalculated}</b>
    </div>
  );
}

function AvgSleepTime({avgSleepTimeCalculated})
{
  return (
    <div>
      <h2>Avg Sleep Time</h2>
      <b>{avgSleepTimeCalculated}</b>
    </div>
  );
}

function AvgWakeTime({avgWakeTimeCalculated})
{
  return (
    <div>
      <h2>Avg Wake Time</h2>
      <b>{avgWakeTimeCalculated}</b>
    </div>
  );
}