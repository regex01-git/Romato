import React from 'react'
import { useSelector } from 'react-redux'
import ProductListCard from './ProductListCard'
import {Row,Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const ProductList = () => {
  const product=useSelector(store=>store.products)
  product.menuItems&&console.log("product list",product.menuItems)
  return (
    <>
      <div style={{marginBottom:"0px"}}>
        <h1>All Foods List</h1>
      </div>
      {/* <Card>
      <Row className='d-flex justify-content-center fw-bold m-3'>
    <Col lg={2} className='d-flex justify-content-center'>Image</Col>
    <Col lg={2} className='d-flex justify-content-center'>Name</Col>
    <Col lg={2} className='d-flex justify-content-center'>Rating</Col>
    <Col lg={2} className='d-flex justify-content-center'>Reviews</Col>
    <Col lg={2} className='d-flex justify-content-center'>Action</Col>
   </Row> */}
   {/* </Card> */}
      {
        product.menuItems&&product.menuItems.map((item)=>(
          <ProductListCard item={item}/>
        ))
      }
      
    </>
  )
}

export default ProductList
