import {createContext,useState, useEffect} from 'react'

export const GeneralContext = createContext([])

export const GeneralProvider = ({children}) =>{
    const [timerMode, setTimerMode] = useState('work') 
    const [workTime, setWorkTime] = useState(10);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);
    const [time, setTime] = useState(workTime)
    const [initialTime, setInitialTime] = useState(0)
    const [isTimerStart, setIsTimerStart] = useState(false)
    const [isSettingsOn, setIsSettingsOn] = useState(false)
    const [intervalCounter, setIntervalCounter] = useState (0)
    const [longBreakInterval, setLongBreakInterval] = useState(3)
    const [message, setMessage] = useState("")


    const mode = ["work", "short break", "long break"]

    /* swich timer mode */
    useEffect (() => {
        if (timerMode === "work"){
            setTime(workTime)
            setIsTimerStart(false)
            setMessage('Time to focus!')
        }
        if (timerMode === "short break"){
            setTime(shortBreakTime)     
            setIsTimerStart(false)
            setMessage('Time for a break!')
        }
        if (timerMode === "long break"){
            setTime(longBreakTime)  
            setIsTimerStart(false)
            setMessage('Time for a break!')
        }
    }, [timerMode])


    useEffect(() => {
        if (time === 0) {
            if( timerMode === 'work' ){
                setIntervalCounter(intervalCounter+1)
            }
/*             if( timerMode === 'work' && intervalCounter === longBreakInterval){
                setTimerMode('long break')
            } */
            if( timerMode === 'short break' || timerMode === 'long break'){
                setTimerMode("work")
            }
        }
    }, [time])


    useEffect(() => {
       if (time === 0 && intervalCounter !== longBreakInterval)(
        setTimerMode('short break')
       )
       if (time === 0 && intervalCounter === longBreakInterval) {
        setTimerMode('long break')
       }
    }, [intervalCounter])
    

    const data = {
        mode,
        timerMode, setTimerMode,
        workTime, setWorkTime,
        shortBreakTime, setShortBreakTime,
        longBreakTime, setLongBreakTime,
        time, setTime,
        initialTime, setInitialTime,
        isTimerStart, setIsTimerStart,
        isSettingsOn, setIsSettingsOn,
        intervalCounter, setIntervalCounter,
        longBreakInterval, setLongBreakInterval,
        message, 
    }

    return(
        <GeneralContext.Provider value={data}>
            {children}
        </GeneralContext.Provider>
    )
}


