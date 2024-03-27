import React from 'react'
import SocialList from '@/components/SocialList';
const TopHeader = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center h-[40px]'>
      <SocialList />
    </div>
  )
}

export default TopHeader