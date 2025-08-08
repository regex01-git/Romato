import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button, Card } from 'react-bootstrap';
import header_image from '../assets/assets/frontend_assets/header_img.png'
import Thumbnail from './HomeCards/Thumbnail';
import { useSelector } from 'react-redux';
import ProductCard from './HomeCards/ProductCard';
import playstore from '../assets/assets/frontend_assets/play_store.png'
import appstore from '../assets/assets/frontend_assets/app_store.png'
import { NavLink } from 'react-router';
import { useEffect } from 'react';


function HomeMiddle() {
  const products = useSelector(store => store.products)
  // const cart=useSelector(store=>store.cart);
  // useEffect(()=>{

  // },[cart])
  
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={12} className='d-flex justify-content-center'>
            <div
              style={{
                backgroundImage: `url(${header_image})`,
                backgroundSize: 'cover',
                width: "100%",
                backgroundPosition: 'center',
                height: '570px',
                color: 'white',
                display: 'flex',
                borderRadius: "20px",

              }}
            >
              <div xs={12} lg={12} style={{ alignSelf: "center" }} className='ms-5'>
                <h2 className='home-thumbnail'>Order your <br />favourite food here</h2>
                <p style={{ fontWeight: "500" }}>A lively hub for North‑Indian street food made bold, bright & utterly satisfying.<br></br> Try our bestseller: Chicken Seekh Kebab, or go
                  for the creamy Paneer Tikka Masala.<br></br> Perfect for your next spicy craving!</p>
                <Button variant="light" style={{ borderRadius: "15px", padding: "10px 25px" }}>View Menu</Button>

              </div>
            </div>
          </Col>
          <Col className='mt-5' xs={12}>
            <h2>Explore our menu</h2>
            <p style={{ fontWeight: "500" }}>At <span style={{ color: "rgb(223, 109, 59)", fontWeight: "550" }}>Tomato</span>, we curate more than meals—we create moments. With a love for flavors and a passion for quality, our menu invites you on a culinary journey. <br />
              that blends tradition with innovation.
              From vibrant appetizers to decadent desserts, each dish is designed to delight your taste buds and warm your spirit.<br />
              Whether you're craving comfort classics or daring new tastes, our thoughtfully crafted offerings await your discovery.
            </p>
          </Col>
          <Row className='mt-4' style={{ borderBottom: "4px solid gray" }}>
            {
              products.foodItems.recipes && products.foodItems.recipes.map((item) => (
                <Col xs={3} sm={3} lg={1} className="mb-1 me-4">
                  <Thumbnail item={item} />

                </Col>
              ))
            }
          </Row>

          <Col xs={12} className='mt-3 mb-3' style={{ fontSize: "700" }}><h2>Top dishes near you</h2></Col>
          <Row>

            {
              products.foodItems.recipes && products.foodItems.recipes.map((item) => (
                <Col xs={6} md={4} lg={3} className='mb-3 d-flex justify-content-center'>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Row>
        <div style={{ textAlign: "center", fontWeight: "600" }} className='mt-5'>
          <h1 style={{}}>For Better Experience Download
            Tomato App</h1>
          <div className='mt-4'><img src={playstore} /><img src={appstore} /></div>
        </div>
      </Container>
      <Container fluid style={{ backgroundColor: "black" }}>
        <Row className='mt-5 ms-5 me-5 pb-4' style={{ color: "white", borderBottom: "2px solid white" }}>
          <Col xs={12} lg={6} className='mt-5' style={{}}>
            <h2><span className='tomato'>Tomato.</span></h2>
            <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
          {/* <Col xs={12} lg={4} className='mt-5 ms-5'><h3>Company</h3> */}
          {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>
        <NavLink >Privacy policy</NavLink> */}
          {/* </Col> */}
          <Col lg={2}>
          </Col>
          <Col xs={12} lg={3} className='mt-5 ms-5'><h3>GET IN TOUCH</h3>
            <p className='mt-3'>+91-8171824179 <br />fardeenkhan4807@gmail.com</p>

          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center mt-5'><p style={{ fontWeight: "600", color: "white" }}>Copyright 2024 Tomato.com - All Right Reserved.</p></Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeMiddle;
