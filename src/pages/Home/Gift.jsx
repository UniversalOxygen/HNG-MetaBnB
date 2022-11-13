import React from 'react'
import GiftPic from '../../components/Images/Gift.png'

const Gift = () => {
  return (
    <section id='GiftCon'>
        <div id='GiftProp'>
            <h1>Metabnb NFTs</h1>
            <p>Discover our NFT gift cards collection. Loyal <br /> customers gets amazing gift cards which are <br /> traded as NFTs. These NFTs gives our cutomer <br /> access to loads of our exclusive services.</p>

            <div id='searchCon'>
                <button>Learn more</button>
            </div>
        </div>

        <div>
            <img id='GiftCard'  src={GiftPic} alt="Gift_image" /> 
        </div>
    </section>
  )
}

export default Gift