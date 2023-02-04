import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (  
        <div className='intro'>
          <Container className='intro-2'>
            <Row>
              <Col>
                <div className='title'>NONTON BIOSKOP GRATIS</div>
                <div className='title'>GA PAKE KARCIS</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='dark' href='#trending'>Lihat Semua List</Button>
                </div>
              </Col> 
            </Row>
          </Container>
        </div>
    )
}

export default Intro