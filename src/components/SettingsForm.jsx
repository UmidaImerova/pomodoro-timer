import React, {useContext} from 'react'
import { GeneralContext } from '../context/SettingsContext';
import s from './settingForm.module.scss'
import {CloseOutlined, ClockCircleOutlined} from '@ant-design/icons';

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
    <div className={s.modal_content}>
      <header>
        <h3>Timer settings</h3>
        <button onClick={()=> setIsSettingsOn(false)}><CloseOutlined /></button>
      </header>
      <main>
        <div className={s.timer}>
          <h4>
            <ClockCircleOutlined style={{ marginRight: '8px' }}/>Time (minute)
          </h4>
          <div className={s.timer_block}>
            <label htmlFor="pomodoro">Pomodoro
              <input type="number" name="pomodoro" id="pomodoro" value={workTime} onChange={(e)=> setWorkTime(e.target.value)} />
            </label>
          </div>
          <div className={s.timer_block}>
            <label htmlFor="shortBreak">Short break
              <input type="number" name="shortBreak" id="shortBreak" value={shortBreakTime} onChange={(e)=> setShortBreakTime(e.target.value)}/>
            </label>
          </div>
          <div className={s.timer_block}>
            <label htmlFor="longBreak">Long break
              <input type="number" name="longBreak" id="longBreak" value={longBreakTime} onChange={(e)=> setLongBreakTime(e.target.value)} />
            </label>
          </div>
          <div className={s.timer_block}>
            <label htmlFor="longBreakInterval">Long break interval
              <input type="number" name="longBreakInterval" id="longBreakInterval" value={longBreakInterval} onChange={(e)=> setLongBreakInterval(Number(e.target.value))}/>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SettingsForm