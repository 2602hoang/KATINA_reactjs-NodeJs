import React from 'react'
import Header from '../Component/Header'
import Footter from '../Component/Footter'

function Food() {
  return (
    <div style={{

        backgroundColor: "#cfe887",
  
      }}
        className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
        <Header />
        <div className='h-screen w-full'>

        </div>
        <Footter/>

    </div>
  )
}

export default Food