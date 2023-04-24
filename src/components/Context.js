import React, { createContext, useState } from 'react'
export const cartPage = createContext();

function Context({children}) {
    const [cart,setCart] = useState([]);
  return (
    <cartPage.Provider value={{cart, setCart}}>
        {children}
    </cartPage.Provider>
  )
}

export default Context
