import React from 'react'

const Header = ({name}) => {
  return (
    <div className='text-green-700 bg-amber-400 text-center rounded-2xl mt-3 p-2 '>
      <h1>Sponsored By: {name}</h1>
    </div>
  )
}

export default Header
