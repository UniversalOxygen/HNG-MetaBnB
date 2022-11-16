import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adv1 from '../../components/Images/Adv1.svg'
import Adv2 from '../../components/Images/Adv2.svg'
import Adv3 from '../../components/Images/Adv3.svg'

const Adv = () => {
  return (
      <Container id='advCon' fluid>
        <Row id='ady'>
          <Col>
            <img src={Adv1} alt="advImage" /> 
          </Col>

          <Col>
            <img src={Adv2} alt="advImage" /> 
          </Col>

          <Col>
            <img src={Adv3} alt="advImage" /> 
          </Col>
        </Row>
      </Container>
  )
}

export default Adv