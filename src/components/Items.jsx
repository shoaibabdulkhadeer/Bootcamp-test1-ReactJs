import React from 'react'

const Items = ({products,del}) => {
    let inrPrice = products.price * 83
    let discountDecimal = (products.discountPercentage)/100
    let discount = inrPrice * discountDecimal
   let finalPrice = Math.floor(inrPrice - discount)

  return (
    <div>
        <div className="Product">
        <img src={products.thumbnail} alt="img" width={150}/>
 
              <div className='details'>
                <p className='title'>{products.title}</p>
                <div className='Price'>
                <p> ₹{finalPrice}</p>
                <p className='LstPrice'> ₹{inrPrice}</p>
                <p>({products.discountPercentage}% off)</p>
                </div>
                <p>{products.description}</p>

                <button onClick={() => del(products.id)} style={{marginLeft:"5px",cursor:"pointer"}}>Delete</button>
               
              </div>
              
         </div>

    </div>
  )
}

export default Items