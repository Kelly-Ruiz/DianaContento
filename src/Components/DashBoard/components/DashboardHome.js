import { Box, Button } from '@mui/material'
import React from 'react'
import DashRightAside from './DashRightAside'
import HomeBanner from './HomeBanner'

function DashboardHome() {
  return (
    <div className='flex'>
      <HomeBanner />
      <DashRightAside />
    </div>
  )
}

export default DashboardHome