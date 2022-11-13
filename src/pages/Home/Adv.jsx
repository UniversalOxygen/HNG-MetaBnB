import React from 'react'
import Adv1 from '../../components/Images/Adv1.svg'
import Adv2 from '../../components/Images/Adv2.svg'
import Adv3 from '../../components/Images/Adv3.svg'

const Adv = () => {
  return (
    <div id='advCon'>
         <img src={Adv1} alt="advImage" /> 
         <img src={Adv2} alt="advImage" /> 
         <img src={Adv3} alt="advImage" /> 
    </div>
  )
}

export default Adv