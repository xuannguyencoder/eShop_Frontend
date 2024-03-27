import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
import MainMenu from './MainMenu'

const Header = () => {
  return (
    <div className=''>
        <div className="border-b border-[#c2c2c2]">
          <TopHeader />
        </div>
        <div className="mt-[30px] ">
          <MainHeader />
          <div className="max-w-[1200px] mx-auto py-[10px]">
              <MainMenu />
          </div>
        </div>
    </div>
  )
}

export default Header