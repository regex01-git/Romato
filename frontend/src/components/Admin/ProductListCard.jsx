import axios from 'axios'
import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchMenu } from '../../features/Products'
const ProductListCard = ({item}) => {
    const dispatch=useDispatch()
    async function removeItem(item){
        try{
            const response=await axios.delete(`https://romato-1.onrender.com/api/product/${item._id}`)
            console.log("delete response",response)
            if(response.data.status==='success'){
                dispatch(fetchMenu())
                toast.success(`Your ${item.name} deleted successfully`,{
                    position:"bottom-left"
                })
            }
            else{
                toast.error(`Your ${item.name} not deleted successfully`,{
                    position:"bottom-left"
                })
            }
        }catch(err){}
    }
  return (
    <>
  
    <Card >
         <Row className='d-flex justify-content-center fw-semibold fs-5' style={{color:"gray"}} >
    <Col xs={5} lg={2} className='d-flex justify-content-center'>
    <img loading='lazy' src={item.image.url} className='w-100 h-100 pb-4 pt-4'/>
    </Col>
    <Col xs={3} lg={2} className='d-flex justify-content-center align-items-center'>{item.name}</Col>
    <Col  xs={2} lg={2} className='d-flex justify-content-center align-items-center'>${item.rating}</Col>
    <Col  xs={2} lg={2} className='d-flex justify-content-center align-items-center'>{item.reviewCount}</Col>
    <Col  xs={12} lg={2} className='d-flex justify-content-center align-items-center'>
    <Button variant='danger' onClick={()=>removeItem(item)} className='h-50 w-50 fw-bold d-flex align-items-center justify-content-center p-3'>Delete</Button>
    </Col>
    
   </Row>
   </Card>
  </>
  )
}

export default ProductListCard
