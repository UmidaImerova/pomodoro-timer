import React, { useEffect, useContext } from 'react'
import { GeneralContext } from '../context/SettingsContext';
import SettingsForm from './SettingsForm'
import s from './timerStyle.module.scss'
import {
    SettingOutlined, 
    PlayCircleOutlined, 
    PauseCircleOutlined,
    RedoOutlined
} from '@ant-design/icons'
import { Button, Segmented } from 'antd'


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
    }, [isTimerStart, time, setTime])
    
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
            <div className={s.timerMode}>
                <Segmented 
                    options={mode} 
                    style={{
                        backgroundColor: 'transparent', 
                        fontFamily: 'Noto Serif Malayalam',
              }} size="large" onChange={(e) => setTimerMode(e)}/>
            </div>
            <div className={s.timer}>{timerFormat(time)}</div>
            <div className={s.timerAction}>
                <Button 
                    onClick={toggleTimer}
                    icon={isTimerStart 
                    ? <PauseCircleOutlined style={{ fontSize: '32px'}}/> 
                    : <PlayCircleOutlined style={{ fontSize: '32px'}}/>}
                    ghost
                    shape= 'circle'
                    style={{border: 'none', margin: '5px'}} />
                <Button 
                    onClick={resetTimer} 
                    icon={<RedoOutlined style={{ fontSize: '32px'}} />} ghost
                    shape= 'circle'
                    style={{border: 'none', margin: '5px'}} />
                <Button
                    onClick={() => setIsSettingsOn(true)}
                    icon={<SettingOutlined  style={{ fontSize: '32px'}}/>} ghost
                    shape= 'circle'
                    style={{border: 'none', margin: '5px'}} />
            </div>
            <div className={s.intervalCounter}>Number of interval {intervalCounter}</div>
            <div className={s.message}>{message}</div>
           {isSettingsOn ? <SettingsForm/> : ''}
        </div>
    )
}

export default Timer