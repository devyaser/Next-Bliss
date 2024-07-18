import React from 'react'
import TagData from '@/mocks/LandingPage/Tag'
import { Typography } from '@/components/typography/Typography'

const Tag = () => {
  return (
    <Typography variant='h3' as="div" className='flex bg-altblack font-Lato text-white-light py-[25px] justify-center border-t border-b border-white-light p-10'>{TagData.Text1}</Typography>
  )
}

export default Tag