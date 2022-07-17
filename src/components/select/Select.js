import React from 'react'
import './Select.css'
import { useNavigate } from 'react-router-dom'

const Select = ({country,setIsClick, setValue}) => {
    const  navigate=useNavigate()
  return (
    <div className='click' onClick={()=> {setIsClick(false)
      navigate('../country/'+country.name  )
      setValue("")}}>

      {country.name}
    </div>
  )
}

export default Select
