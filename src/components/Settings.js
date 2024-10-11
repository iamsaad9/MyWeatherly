import React, {useContext,useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';
import { ActiveUnitContext } from "../ActiveUnitContext";

export default function Settings() {
  const { setLoading } = useContext(ActiveUnitContext);
  setLoading(false)
  
    console.log('city display opened')
  return (
    <div>
      <div style={{backgroundColor:'orange'}}>
            s
      </div>    
    </div>
  )
}

