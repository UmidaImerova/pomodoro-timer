import React, { useEffect, useContext } from 'react'
import { GeneralContext } from '../context/SettingsContext';
import SettingsForm from './SettingsForm'
import s from './timerStyle.module.css'
import {
    SettingOutlined, 
    PlayCircleOutlined, 
    PauseCircleOutlined,
    RedoOutlined
} from '@ant-design/icons'
import { Button } from 'antd'
import { Segmented } from 'antd'


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
            intervalCounter,
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
        <div className={s.main}>
            <div>
                <SettingOutlined onClick={() => setIsSettingsOn(true)}/>
            </div>
            <div className='timerMode'>
                <Segmented options={mode} value={mode} onChange={(e) => setTimerMode(e)}/>
            </div>
            <div className='timer'>{timerFormat(time)}</div>
            <div className='timerAction'>
                <Button 
                    onClick={toggleTimer}
                    icon={isTimerStart ? <PauseCircleOutlined /> : <PlayCircleOutlined />} />
                <Button onClick={resetTimer} icon={<RedoOutlined />} />
            </div>
            <div>{intervalCounter}</div>
            <div>{message}</div>
           {isSettingsOn ? <SettingsForm/> : ''}
        </div>
    )
}

export default Timer