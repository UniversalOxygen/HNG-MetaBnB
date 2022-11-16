import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Locator from '../../components/Images/Locator.png'

const Menu = () => {
  return (
    <Container className='locc' id='MenuCon'>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>

        <InputGroup id="basic" className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"/>
          <InputGroup.Text id="basic-addon2"><img id='Locator_Image' src={Locator} alt="Locator_image" /></InputGroup.Text>
      </InputGroup>
    </Container>
  )
}

export default Menu