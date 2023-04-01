import React, { useEffect, useState } from 'react'
import Products from './Products'
import '../Styles/Home.css'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products")
      let data = await response.json()
      setData(data.products)
      console.log(data.products)
    }
    fetchData()
  }, [])

//Function for deleting and setting the json
  const del = (id) => {
    setData(data.filter((x) => {
      return (
        x.id!== id
      )
    }))
  }

  return (
    <div className='Home'>

        <h2>All Data</h2>
        <Products data={data} del={del}/>
      
      <h2> Category : Smart-Phones </h2>
      <Products data={data.filter(x => x.category === 'smartphones')}  del={del}/>

      <h2> Price Greater Than 30k </h2>
      <Products data={data.filter(x => x.price * 83 > 30000)}  del={del }/>


    </div>
  )
}

export default Home