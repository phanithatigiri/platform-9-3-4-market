import React from 'react'

const Title = ({text1,text2}) => {
  return (
    
       <div className='inline-flex gap-2 items-center mb-1'>
        <p className='font-serif sm:text-[25px] text-[20px] font-bold'>{text1} <span className='text-gray-600  text-sm sm:text-lg'>{text2}</span></p>
       </div>
  )
}

export default Title
