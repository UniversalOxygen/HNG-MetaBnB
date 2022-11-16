import React from 'react'
import { Link } from 'react-router-dom';
import Meta from './Images/metamask.png'
import xx from './Images/x.png'
import arrow from './Images/arrow.png'
import '../components/Connect.css';

const Connect = () => {

  return (
    <div  id='glob'>
    <div id='overlay'>
      <div id='popCon'>
        <div id='header'>
          <h6>Connect Wallet</h6>
          <Link to='/'>
              <img className='cross' id='Logo' src={xx} alt="metaBnB Logo" />
          </Link>
        </div>
        <hr />
        <div id='body'>
          <h6 id='choose'>Choose your preferred Wallet:</h6>
          
          <div id='walletinput'>
            
          <img id='Logo' src={Meta} alt="metaBnB Logo" />
          <img className='arrow' id='Logo' src={arrow} alt="metaBnB Logo" />
          </div>

          
          <div id='walletinput'>
            
          <img id='Logo' src={Meta} alt="metaBnB Logo" />
          <img className='arrow' id='Logo' src={arrow} alt="metaBnB Logo" />
          </div>

          


        </div>
      </div>
    </div></div>
    
  )
}

export default Connect