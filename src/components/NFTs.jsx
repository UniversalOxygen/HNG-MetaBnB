import React from 'react'
import '../components/NFTs.css';
import Footer from '../pages/Home/Footer'
import Nav from '../pages/Home/Navv'
import Menu from '../pages/NFTs/Menu';
import NFT from '../pages/NFTs/NFT'

const NFTs = () => {
  return (
    <div>
        <Nav/>
        <Menu/>
        <NFT/>
        <Footer/>
    </div>
  )
}

export default NFTs