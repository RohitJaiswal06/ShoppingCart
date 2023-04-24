import React, { useContext } from 'react'
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
faker.seed(100); 
function Home() {

  const productsArray = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.cats(),
  }));

  // const [cart, setCart] = useState([]);

  const [product] = useState(productsArray)
  
  return (
    <div className='productContainer'>
      {
        product.map((product)=>(
          <SingleProduct product={product}
           />
        ))

      }
    </div>
  )
}

export default Home
