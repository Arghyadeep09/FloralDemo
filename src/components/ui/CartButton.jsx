import React from 'react'

const CartButton = (props) => {
  const{className}=props;
  return (
    <div className={`border-2 border-white rounded-xl  ${className}`} >
      <img src="/images/bag.png" alt="bag icon" className=' p-3.5 ' />
    </div>
  )
}

export default CartButton
