import React,{useContext} from 'react'
import './styles.css'

import { cartPage } from './Context';
function SingleProduct({product}) {

  const { cart , setCart } = useContext(cartPage);
  
  return (
    <div className='products'>
        <img src={product.image} alt={product.name} />
        <div className='productDesc'>
        <span style={{fontW
        : 700}}>{product.name}</span>
        <span> {product.price.substring(0,3)}</span>
        </div>
        {
          cart.includes(product)?(
            <button className='add' onClick={()=>{
              setCart(cart.filter((c)=>c.id!==product.id));
            }}>Remove from Cart</button>
          ):
          (
            <button className='add' onClick={()=>{
              setCart([...cart,product]);
            }}>Add to Cart</button>
          )
        }
    </div>
  )
}

export default SingleProduct
