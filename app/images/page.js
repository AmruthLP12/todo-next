import React from 'react'
import portfolio from "@/assets/portfolio.png"
import Image from 'next/image'

const page = () => {
  return (
    <div>
        we will show image here 
        <Image src={portfolio} alt='portfolio' />
        <Image src={portfolio} alt='portfolio' width={500} />
    </div>
  )
}

export default page