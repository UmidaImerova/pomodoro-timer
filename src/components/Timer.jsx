import React, { useEffect, useContext } from 'react'
import { GeneralContext } from '../context/SettingsContext';
import SettingsForm from './SettingsForm'

function Timer() {
    const { mode,
            time, setTime,
            workTime, 
            shortBreakTime, 
            longBreakTime, 
            timerMode, setTimerMode,
            initialTime, setInitialTime,
            isTimerStart, setIsTimerStart,
            isSettingsOn, setIsSettingsOn,
            intervalCounter, setIntervalCounter,
            message,
        } = useContext(GeneralContext)


    const timerFormat = (time) => {
        const min = Math.floor(time / 60);
        const seconds = time % 60;
        return `${min < 10 ? "0" + min : min} : ${seconds < 10 ? "0" + seconds : seconds} `

    }


    useEffect(() => {
        if (isTimerStart && time  > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000);
        return () => clearInterval(interval)
        }
    }, [isTimerStart, time])

    
    const handleSetMode = (e) => {
        setTimerMode(e.target.value)
    }
    
    const toggleTimer = () => {
        setIsTimerStart(!isTimerStart)
    }

    const resetTimer = () =>{
        setIsTimerStart(false)
        if (timerMode === "work"){
            setInitialTime(workTime)
        }
        if (timerMode === "short break"){
            setInitialTime(shortBreakTime)
        }
        if (timerMode === "long break"){
            setInitialTime(longBreakTime)
        }
        setTime(initialTime)
    }

    return (
        <div>
            <div>
                <button onClick={() => setIsSettingsOn(true)}>Settings</button>
            </div>
            <div className='timerMode'>
                {mode.map((mode, i) => <button key={i} value={mode} onClick={(e) => handleSetMode(e)}>{mode}</button>)}
            </div>
            <div className='timer'>{timerFormat(time)}</div>
            <div className='timerAction'>
                <button onClick={toggleTimer}>{isTimerStart ? "Pause" : "Start"}</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div>{intervalCounter}</div>
            <div>{message}</div>
           {isSettingsOn ? <SettingsForm/> : ''}
        </div>
    )
}

export default Timer