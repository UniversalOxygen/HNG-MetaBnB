import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NFT_1 from '../../components/Images/NFT_1.png'
import NFT_2 from '../../components/Images/NFT_2.png'
import NFT_3 from '../../components/Images/NFT_3.png'
import NFT_4 from '../../components/Images/NFT_4.png'
import NFT_5 from '../../components/Images/NFT_5.png'
import NFT_6 from '../../components/Images/NFT_6.png'
import NFT_7 from '../../components/Images/NFT_7.png'
import NFT_8 from '../../components/Images/NFT_8.png'
import Star from '../../components/Images/Star.png'

const Insp = () => {
  return (

    <Container className='py-5' id='inspCon'>
          <div mx-auto>
            <h2 id='inspire'>Inspiration for your next adventure</h2>
          </div>
          
          <Row id='NFTrow'>
        
              <Col  className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }}>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_5} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row className='mt-0' id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks&nbsp;stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_6} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        
              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_7} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>


              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_8} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_1} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_2} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem'}} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_3} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col className='mb-4 d-flex justify-content-center align-item-center' id='NFTcon'>
                <Card id='NFTcard' style={{ width: '16rem' }} className='p-2'>
                  <Card.Img variant="top" id='NFT_Image' src={NFT_4} alt="NFT_image" />
                  <Card.Body>
                    <Card.Text>
                      <Row id='NFTdetails'>
                        <Col>
                          <p>Desert king</p>
                          <p>2345Km away</p>
                          <img src={Star} alt="Star_image" />
                        </Col>

                        <Col id='availability'>
                          <p id='MBT'>1MBT per night</p>
                          <p>available for 2weeks stay</p>
                        </Col>
                      </Row> 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

          </Row>
              
    </Container>
  )
}

export default Insp