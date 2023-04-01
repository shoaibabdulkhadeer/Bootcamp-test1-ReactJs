import React from 'react'
import '../Styles/Products.css'
import Items from '../components/Items'

const Products = ({data,del}) => {
  return (
    
    <div className='Products'>
           
         {data.map((products,index) => {
        
             return (
                <div key={index}> 
               <Items products={products} del={del}/>
                </div>
                
             )
         })}  

    
    </div>
  )
}

export default Products