import React from 'react'
import {data} from '../pages/restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <h4>Our Most Popular Dishes—Fast, Fresh, and Flavorful! </h4>
                <p>Discover the favorites that keep our customers coming back for more!. We serve a selection of best-selling dishes that offer the perfect mix of taste, quality, and speed. Try one today and see why they’re the talk of the town!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu