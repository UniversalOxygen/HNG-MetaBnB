import React from 'react'
import Nav from '../pages/Home/Nav';
import '../components/Home.css';
import Landing from '../pages/Home/Landing';
import Adv from '../pages/Home/Adv';
import Insp from '../pages/Home/Insp';
import Gift from '../pages/Home/Gift';


const Home = () => {
  return (
    <div>
        <Nav/>
        <Landing/>
        <Adv/>
        <Insp/>
        <Gift/>
    </div>
  )
}

export default Home