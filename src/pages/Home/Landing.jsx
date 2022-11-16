import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingPic from '../../components/Images/LandinPics.png'

const Landing = () => {
  return (
    <>
    <Container>
        <Row  className='py-5' id='landingCon'>
            <Col id='landingProp'>
                <h1 className='mt-5'>Rent a <em>Place</em> away from <br /> <em>Home</em> in the <em>Metaverse</em></h1>
                <p>we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search for location"
                    aria-label="Search for location"
                    aria-describedby="basic-addon2"
                  />
                  <Button id='LdBtn'>Search</Button>
                </InputGroup>
            </Col>

            <Col>
                <img id='landing_image' src={LandingPic} alt="landing_image" /> 
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Landing
