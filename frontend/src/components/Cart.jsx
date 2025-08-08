import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
// import {Row} from 'react-bootstrap'
export default function Cart() {
  const cart = useSelector(store => store.cart)
  return (
    <>
      {
        cart && cart.cartItems.map((item) => (
          <CartCard item={item} />
        ))
      }
      <Row className='d-flex justify-content-center'>
      <CartTotal/>
      </Row>

    </>
  )
}
