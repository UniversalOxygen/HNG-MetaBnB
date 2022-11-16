import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import Flogo from '../../components/Images/Footer-Logo.svg'
import FBB from '../../components/Images/FBB.png'
import IGG from '../../components/Images/IGG.png'
import TWW from '../../components/Images/TWW.png'

const Footer = () => {
  return (
    <Container style={{background: '#1D1D1E'}} id='FooterCon' fluid>
        <Row className='px-5 py-4'>
            <Col id='Logo'>
                <Link to='/'>
                    <img id='Flogo'  src={Flogo} alt="Footer_Logo" /> 
                </Link>

                <div id='socialMedia'>
                <img id='handle'  src={FBB} alt="Footer_Logo" /> 
                <img id='handle'  src={IGG} alt="Footer_Logo" /> 
                <img id='handle'  src={TWW} alt="Footer_Logo" /> 
                </div>
                <p id='courtesy'> &#169; 2022 Metabnb</p>
            </Col>

            <Col>
                <Row id='footerDetails'>
                    <Col id='uty'>
                        <h3>Community</h3>
                        <p>NFT</p>
                        <p>Tokens</p>
                        <p>Landlords</p>
                        <p>Discord</p>
                    </Col>

                    <Col id='Places'>
                        <h3>Places</h3>
                        <p>Castle</p>
                        <p>Farms</p>
                        <p>Beach</p>
                        <p>Learn more</p>
                    </Col>

                    <Col id='uty'>
                        <h3>About us</h3>
                        <p>Road map</p>
                        <p>Creators</p>
                        <p>Career</p>
                        <p>Contact us</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer