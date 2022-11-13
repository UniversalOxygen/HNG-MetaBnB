import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../../components/Images/Meta_Logo.png'

const Nav = () => {
  return (
    <div id='navCon'>
        <div id='LogoCon'>
            <Link to='/'>
                <img id='Logo' src={Meta} alt="metaBnB Logo" />
            </Link>
        </div>

        <div id='navBar'>

                <Link id='lk' to='/'>
                    <p>Home</p>
                </Link>

                <Link id='lk' to='/NFTs'>
                    <p>Place to stay</p>
                </Link>

                <Link id='lk' to='#'>
                    <p>NFTs</p>
                </Link>

                <p>Community</p>
        </div>

        <div>
            <button>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Nav