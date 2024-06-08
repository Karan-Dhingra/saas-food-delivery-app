import { Avatar } from '@nextui-org/avatar'
import React from 'react'
import styles from '../../utils/style'
import NavItems from './NavItems'
import ProfileDropDown from './ProfileDropDown'

const Header = () => {
  return (
    <header className="w-full bg-[#0A0713] text-white">
        <div className="w-[90%] m-auto h-[80px] flex items-center justify-between">
        <h1 className={`${styles.logo}`}>Becodemy</h1>
        <NavItems />
        <ProfileDropDown />
      </div>
    </header>
  )
}

export default Header