import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-warp justify-around text-white'>
        <h1 className='text-lg font-semibold' >Todo Next App</h1>
        <ul className='flex gap-[40px] text-m'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Conatact</li>
        </ul>
    </div>
  )
}

export default Navbar