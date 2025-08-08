import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Thumbnail({item}) {
    if(item.id>9){
        return;
    }
  return (
    <Container>
      <Row>
       
        <Col className='d-flex align-items-center'>
        <div>
          <Image loading="lazy" src={item.image} roundedCircle style={{height:"100px",width:"100px"}}/>
             <p style={{display:"flex",justifyContent:"center"}} className='mt-3'>{item.cuisine}</p>
             </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Thumbnail;