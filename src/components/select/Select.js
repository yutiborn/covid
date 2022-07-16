import React from 'react'
import { useNavigate } from 'react-router-dom'

const Select = ({country,setIsClick, setValue}) => {
    const  navigate=useNavigate()
  return (
    <div onClick={()=> {setIsClick(false)
      navigate('../'+country.name  )
     setValue("")}}
    
     
     >

      {country.name}
    </div>
  )
}

export default Select
