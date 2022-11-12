import React, {useContext} from 'react'
import { GeneralContext } from '../context/SettingsContext';


function SettingsForm() {
    const {
        isSettingsOn, setIsSettingsOn
    } = useContext(GeneralContext)

  return (
    <div>SettingsForm
        <button onClick={()=> setIsSettingsOn(false)}>Close</button>
    </div>
  )
}

export default SettingsForm