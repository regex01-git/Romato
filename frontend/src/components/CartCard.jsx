import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import {Row,Col} from 'react-bootstrap'
import { add,increase,decrease,total } from '../features/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function CartCard({item}) {
    const dispatch=useDispatch()
    const cart=useSelector(store=>store.cart)
     function incre(item){
          dispatch(increase(item));
        }
        function decre(item){
          dispatch(decrease(item));
        }
        function addItem(){
          dispatch(add(item))
        }
        useEffect(()=>{
            dispatch(total())
        },[cart])
        useEffect(()=>{
          return ()=>{
            dispatch(total())
          }
        },[])
  return (
    <Card style={{borderLeft:"none",borderRight:"none"}} className='mb-4' >
        <Row className='mt-2'>
            <Col xs={5} lg={2} className='d-flex align-items-center justify-content-center'>
      <Card.Img variant="top" src={item.image.url?item.image.url:item.image} style={{height:"100px",width:"100px"}}/>
      </Col>
      <Col  xs={5} lg={3} className='d-flex align-items-center'>
      <Card.Title>{item.name}</Card.Title>
      </Col>
      <Col xs={1} lg={2} className='d-flex align-items-center'>
      <Card.Title >
      ${item.indiTotal}
      </Card.Title>
      </Col>
      <Col  xs={5} lg={2} className='d-flex align-items-center justify-content-center'>
      {/* <span className='plus' style={{backgroundColor:"white",marginRight:"5px"}} >
            <button style={{backgroundColor:"pink",color:"red",padding:"5px 12px",borderRadius:"100%",fontWeight:"800"}} onClick={()=>decre(item)}>-</button>
          <span style={{padding:"5px 10px",fontWeight:"600"}}>{item.cartQuantity}</span>
          <button onClick={()=>incre(item)} style={{backgroundColor:"lightgreen",color:"green",padding:"5px 12px",borderRadius:"100%",fontWeight:"800"}}>+</button></span> */}
        <span className='plus' style={{ backgroundColor: "#fefefe", marginRight: "5px" }}>
            <button style={{ backgroundColor: "#ffffff", color: "#f77f00", padding: "6px 15px", borderRadius: "100%", fontWeight: "800", border: "2px solid gray" }} onClick={() => decre(item)}>-</button>
            <span style={{ padding: "0px 10px", fontWeight: "600" }}>{item.cartQuantity}</span>
            <Button onClick={() => incre(item)} style={{ backgroundColor: "#ffffff", color: "#2a9d8f", padding: "5px 12px", border: "2px solid gray", borderRadius: "100%", fontWeight: "800" }}>+</Button>
            </span>
      </Col>
      
      <Col  xs={3} lg={1} className='d-flex align-items-center'>
      <Card.Title>${item.reviewCount}</Card.Title>
      </Col>
      <Col  xs={3} lg={2} className='d-flex align-items-center'>
      <Card.Title>${item.reviewCount} x {item.cartQuantity}</Card.Title>
      </Col>
      
      
      </Row>
    </Card>
    
  );
}

export default CartCard;