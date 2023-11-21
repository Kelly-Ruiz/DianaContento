import { Box, Button } from '@mui/material'
import React from 'react'

function DashRightAside() {
  return (
    <div className='p-3 right-0 top-0 w-[25rem] h-screen flex flex-col justify-center bg-gradient-to-b from-[#222] grad via-[#4C4C4C] to-[#222]'>
      <Box className="bg-white rounded-xl p-4">
        <h2 className='text-3xl font-bold italic mb-3'>My Plan</h2>
        <h3 className='text-2xl font-bold text-MainColor italic'>Standar or Premium</h3>
        <p className='text-MainColor text-xl'>Expiry date</p>
        <Button
          className="bg-[#D9F3F1] mt-4 w-full text-MainColor hover:text-white hover:bg-MainColor opacity-90"
        >
          Upgrade or renew your plan
        </Button>
      </Box>
      <div className='p-3 text-white'>
        <h2 className='text-3xl font-bold italic mb-3'>My Stadistics</h2>
        <Button className='bg-[#D9F3F140] text-white hover:bg-MainColor'>Go to Google Health</Button>
      </div>
    </div>
  )
}

export default DashRightAside