import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GiftPic from '../../components/Images/Gift.png'

const Gift = () => {
  return (
    <Container id='GiftCon' style={{background: '#A02279'}} className='py-5' fluid>
        <Row  className='px-5'>
          <Col id='GiftProp'>
              <h1>Metabnb NFTs</h1>
              <p>Discover our NFT gift cards collection. Loyal <br /> customers gets amazing gift cards which are <br /> traded as NFTs. These NFTs gives our cutomer <br /> access to loads of our exclusive services.</p>

              <div>
                <Button id='searchCon'>Connect Wallet</Button>
              </div>
          </Col>

          <Col id='GiftCardCon'>
              <img id='GiftCard'  src={GiftPic} alt="Gift_image" /> 
          </Col>
        </Row>
    </Container>
  )
}

export default Gift