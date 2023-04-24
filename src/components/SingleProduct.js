import React from 'react'

function SingleProduct({product}) {
  return (
    <div className='products'>
        <img src={product.image} alt={product.name} />
        <div className='productDesc'>
        <span style={{fontW
        : 700}}>{product.name}</span>
        <span> {product.price.substring(0,3)}</span>
        </div>
        <button className='add'>Add to Cart</button>
    </div>
  )
}

export default SingleProduct
