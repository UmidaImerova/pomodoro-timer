import React, {useContext} from 'react'
import { useEffect } from 'react';
import { GeneralContext } from '../context/SettingsContext';


function SettingsForm() {
    const {
        setIsSettingsOn,
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        longBreakInterval,
        setLongBreakInterval
    } = useContext(GeneralContext)

  return (
    <div>
      <header>
        <h3>Timer settings</h3>
        <button onClick={()=> setIsSettingsOn(false)}>Close</button>
      </header>
      <main>
        <div>
          <h4>Time (minute)</h4>
          <label htmlFor="pomodoro">Pomodoro
            <input type="number" name="pomodoro" id="pomodoro" value={workTime} onChange={(e)=> setWorkTime(e.target.value)} />
          </label>
          <label htmlFor="shortBreak">Short break
            <input type="number" name="shortBreak" id="shortBreak" value={shortBreakTime} onChange={(e)=> setShortBreakTime(e.target.value)}/>
          </label>
          <label htmlFor="longBreak">Long break
            <input type="number" name="longBreak" id="longBreak" value={longBreakTime} onChange={(e)=> setLongBreakTime(e.target.value)} />
          </label>
          <label htmlFor="longBreakInterval">Long break interval
            <input type="number" name="longBreakInterval" id="longBreakInterval" value={longBreakInterval} onChange={(e)=> setLongBreakInterval(Number(e.target.value))}/>
          </label>
        </div>
      </main>
    </div>
  )
}

export default SettingsForm