import React from 'react'
import Flogo from '../../components/Images/Footer-Logo.svg'
import FBB from '../../components/Images/FBB.png'
import IGG from '../../components/Images/IGG.png'
import TWW from '../../components/Images/TWW.png'

const Footer = () => {
  return (
    <section id='FooterCon'>
        <div id='Logo'>
            <img id='Flogo'  src={Flogo} alt="Footer_Logo" /> 

            <div id='socialMedia'>
            <img id='handle'  src={FBB} alt="Footer_Logo" /> 
            <img id='handle'  src={IGG} alt="Footer_Logo" /> 
            <img id='handle'  src={TWW} alt="Footer_Logo" /> 
            </div>
            <p id='courtesy'> &#169; 2022 Metabnb</p>
        </div>

        <div id='footerDetails'>
            <div id='Community'>
                <h3>Community</h3>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>

            <div id='Places'>
                <h3>Places</h3>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn more</p>
            </div>

            <div id='About'>
                <h3>About us</h3>
                <p>Road map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact us</p>
            </div>
        </div>
    </section>
  )
}

export default Footer