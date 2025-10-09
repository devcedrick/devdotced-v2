import React from 'react'
import ProfileHeader from './sections/ProfileHeader'
import SideNav from './sections/SideNav'
import ProfileFooter from './sections/ProfileFooter'

const ProfilePanel = () => {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-border flex-col gap-5 overflow-y-auto p-6 hidden lg:flex">
        <ProfileHeader />
        <div className='h-0.5 border-t border-border'></div>
        <SideNav />
        <ProfileFooter/>
      </aside>
    </>
  )
}

export default ProfilePanel
