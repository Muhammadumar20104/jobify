import React from 'react'

function AdminFooter() {
  return (
    <div className='bg-gray-50 flex justify-between items-center px-5'>
      <div className='text-gray-400 flex gap-2 py-4 '>© <p className='text-blue-600'>Jobify 2024 </p> All Rights Reserved.</div>
      <div className='text-gray-400'>version 3.15.6</div>
    </div>
  )
}

export default AdminFooter