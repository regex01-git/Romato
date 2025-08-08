import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
export default function Menu() {
  const products = useSelector(store => store.products)
  products.menuItems && console.log(products.menuItems.length)
  return (
    <>
    <Container>
      <Card style={{border:"none",borderBottom:"5px solid gray"}} className='mb-4'>
      <h1 className='m-3'>MENU ITEMS</h1>
      </Card>
      {/* <Row className='d-flex justify-content-center w-100 mt-5'> */}
        <Row>
      {
        products.menuItems && products.menuItems.map((item) => (
          //  <MenuCard item={item}/>
          // <h1>hello worls</h1>
          <Col xs={6} md={4} lg={4} className='mb-3 d-flex justify-content-center'>
            {/* <ProductCard item={item} /> */}
              <MenuCard item={item}/>
          </Col>
        ))
      }
      </Row>
      {/* </Row> */}
  
      </Container>
    </>
  )
}
