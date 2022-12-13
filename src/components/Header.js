import React from 'react'

const Header = (props) => {
  console.log("home",props.data)
  return (
    <div>
        <div className='add-to-cart'>
          <span className='cart-count'>
            {props.data.length}
          </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6uzoPNy4XSY6ttu9vkJdEuNzQjU5zVPRDNpT2pYUGw&s"/>
        </div>
    </div>
  )
}

export default Header
