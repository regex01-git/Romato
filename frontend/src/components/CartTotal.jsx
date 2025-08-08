import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
function CartTotal() {
    const cart=useSelector(store=>store.cart)
    const user=useSelector(store=>store.user)
    const navigate=useNavigate()
  return (
    <Card style={{maxWidth: '28rem'}}> 
      <Card.Header as="h5" className='mt-2 mb-4'>Cart Totals</Card.Header>
      <Row className='mt-2 mb-3'>
        <Col xs={9} lg={9}>
      <Card.Title>Subtotal:</Card.Title>
      </Col>
      <Col xs={3} lg={3}>
      <span style={{fontWeight:"600",fontSize:"17px"}}>$
      {
        cart&&cart.totalAmount
      }
      </span>
      </Col>
      <Col className='d-flex justify-content-center mt-3'>
       {
        user.token? <Button  style={{backgroundColor:"rgba(211, 90, 39, 1)",border:"none",padding:""}}>PROCEED TO CHECKOUT</Button>:
         <Button onClick={()=>navigate('/signin')} className='fw-bold' style={{backgroundColor:"rgba(39, 211, 53, 1)",border:"none"}}>LOGIN TO CHECKOUT</Button>
       }
      </Col>
      </Row>
    </Card>
  );
}

export default CartTotal;