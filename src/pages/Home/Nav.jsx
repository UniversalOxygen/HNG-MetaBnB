import React from 'react'
import Meta from '../../components/Images/Meta_Logo.png'

const Nav = () => {
  return (
    <div id='navCon'>
        <div>
            <img id='Logo' src={Meta} alt="metaBnB Logo" />
        </div>

        <div id='navBar'>
                <p>Home</p>
                <p>Place to stay</p>
                <p>NFTs</p>
                <p>Community</p>
        </div>

        <div>
            <button>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Nav