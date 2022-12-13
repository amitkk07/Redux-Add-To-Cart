import React from 'react'

const Home = (props) => {
  console.log("home",props)
  return (
    <div>
      <h1> Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"/>
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span><br/>
            <span>
                Price:- $1000.00
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button onClick={
              ()=>props.addToCartHandler({
                price:1000,
                name:"I-Phone"
              })
            }>
                Add To Cart
            </button>
            <button className='remove-to-cart' onClick={
              ()=>props.removeToCartHandler()
            }>
                Remove From Cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
