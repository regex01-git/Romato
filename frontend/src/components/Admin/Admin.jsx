import React, { useState } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import {toast} from 'react-toastify'
import { fetchMenu } from '../../features/Products'
import { useDispatch } from 'react-redux'
// import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [reviewCount,setreviewCount]=useState('')
    const [rating,setRating]=useState(null)
    const [img,setImg]=useState('')
    const [original,setOriginal]=useState('')
    function handleImage(e){
        const file=e.target.files[0]
        setOriginal(file)
        setImg(URL.createObjectURL(file))
    }
    async function addItem(e){
        e.preventDefault();
        let formData=new FormData();
        formData.append('name',name);
        formData.append('reviewCount',reviewCount);
        formData.append('rating',rating);
        formData.append('image',original);
        try{
            let response=await fetch('http://localhost:5000/api/product',{
                method:"POST",
                body:formData
            })
            response=await response.json();
            if(response.status){
            dispatch(fetchMenu())
            toast.success("Product added success fully",{
              position:"bottom-left"
            })
            console.log("response",response)
          }

        }catch(err){
          toast.error("Product not Added",{
            position:"bottom-left"
          })
            console.log("something went wrong in response in frontend",err)
        }
    }
  return (
    <>

    <Container>
        <Row>
            
  <Col lg={7}>
  <Form className='w-70'>
    <Col lg={7}  className='d-flex justify-content-center'  >
    
      <Form.Control
      type="text"
        name="name"
        placeholder="Enter food item name"
        className='mt-3 p-3'
        onChange={(e)=>setName(e.target.value)}
        required
      />
    </Col>
    <Col lg={7}>
      <Form.Control
      type="text"
        name="reviewCount"
        placeholder="Enter price of the item"
         className='mt-3 p-3'
          onChange={(e)=>setreviewCount(e.target.value)}
          required
      />
    </Col>
    <Col lg={7}>
      <Form.Control
      type="text"
        name="rating"
        placeholder="Enter rating"
         className='mt-3 p-3'
         onChange={(e)=>setRating(e.target.value)}
         required
      />
      </Col>
      <Col lg={7}>
      <Form.Control type='file' name="image"
        placeholder="Image"
         className='mt-3 p-3'
         onChange={(e)=>handleImage(e)}
         required

        />
        </Col>
         <Col lg={7} className='mt-3'>
    <Button onClick={(e)=>addItem(e)} style={{backgroundColor:"green",color:"white",border:"none",fontWeight:"700",padding:"10px 0px"}}className='w-100'>ADD ITEM</Button>
    </Col>
    </Form>
  </Col>
  
  <Col xs={12} lg={5} className='mt-4' style={{height:"300px"}}>
  {
 !img? <h3>Image will display here</h3>:
  <img src={img} alt="image path not correct" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
}
</Col>
 
  </Row>
</Container>

    </>
  )
}

export default Admin
