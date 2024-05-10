import React from 'react'
import CardInfo from '../component/CardInfo'

function Dashboard() {
  const arr=[1,2,3,4,5,6,7,8]
  return (
    <div className='p-2'>
      <div className='text-2xl p-4'>Dashboard</div>
      <div className='grid   lg:grid-cols-3 xmd:grid-cols-2 px-2 gap-2'>
        {arr.map((i,index)=>(<CardInfo key={index}/>))}
      </div>
    </div>
  )
}

export default Dashboard