import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { cartPage } from './Context'

function Cart() {
  const [total, setTotal] = useState(0);
  const{cart} = useContext(cartPage);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart]);
  return (
    <div>
      <span style={{font: 30}}>My Cart</span>
      <br/>
      <span style={{font: 30}}>Total: Rs. {total}</span>
      <div className='productContainer'>
        {
          cart.map((product)=>(
            <SingleProduct key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
