import { useDispatch } from 'react-redux'
import { add, increase, decrease, total } from '../../features/Cart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
function ProductCard({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart)
  let index = cart.cartItems.findIndex((single) => single.id == item.id)
  function incre(item) {
    dispatch(increase(item));
  }
  function decre(item) {
    dispatch(decrease(item));
  }
  function addItem() {
    dispatch(add(item))
  }
  useEffect(() => {
    dispatch(total())
  }, [cart])

  return (
    <Card style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <div style={{ backgroundImage: `url(${item.image})` }} className="product-card-bg">
        {
          index > -1 && cart.cartItems[index].cartQuantity > 0 ? <><span className='plus' style={{ backgroundColor: "#fefefe", marginRight: "5px" }}>
            <button style={{ backgroundColor: "#ffffff", color: "#f77f00", padding: "6px 15px", borderRadius: "100%", fontWeight: "800", border: "none" }} onClick={() => decre(item)}>-</button>
            <span style={{ padding: "5px 10px", fontWeight: "600" }}>{cart && cart.cartItems[index].cartQuantity}</span>
            <Button onClick={() => incre(item)} style={{ backgroundColor: "#ffffff", color: "#2a9d8f", padding: "5px 12px", border: "none", borderRadius: "100%", fontWeight: "800" }}>+</Button></span></>
            : <span><button className="singlebtn" style={{color:"#f77f00"}}  onClick={() => addItem(item)}>+</button></span>
        }

      </div>
      <Card.Body>
        <Card.Title><span>{item.name}</span><br />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#f9c658" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
          <span style={{ marginLeft: "5px", color: "#f9c658" }}>{item.rating}</span>
        </Card.Title>
        <Card.Text style={{ fontWeight: "500", color: "gray" }}>
          Food provides essential nutrients for overall health and well being.
        </Card.Text>
        <Card.Text><span style={{ color: "orange", fontSize: "25px", fontWeight: "650" }}>${item.reviewCount}</span></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;