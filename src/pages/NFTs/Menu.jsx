import React from 'react'
import Locator from '../../components/Images/Locator.png'

const Menu = () => {
  return (
    <section id='MenuCon'>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>

        <div id='btnCon'>
                <p>Location</p>
                <img id='Locator_Image' src={Locator} alt="Locator_image" />
        </div>
    </section>
  )
}

export default Menu