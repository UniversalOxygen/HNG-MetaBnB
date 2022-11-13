import React from 'react'
import LandingPic from '../../components/Images/LandinPics.png'

const Landing = () => {
  return (
    <section id='landingCon'>
        <div id='landingProp'>
            <h1>Rent a <em>Place</em> away from <br /> <em>Home</em> in the <em>Metaverse</em></h1>
            <p>we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>

            <div id='searchCon'>
                <input placeholder='Search for location' type="text" />
                <button>Search</button>
            </div>
        </div>

        <div >
            <img id='landing_image' src={LandingPic} alt="landing_image" /> 
        </div>
    </section>
  )
}

export default Landing
