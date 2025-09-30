import React from 'react'
import ProfileHeader from './sections/ProfileHeader'
import SideNav from './sections/SideNav'
import ProfileFooter from './sections/ProfileFooter'

const ProfilePanel = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[20vw] p-6 bg-sidebar border border-border flex flex-col gap-5 overflow-hidden">
      <ProfileHeader />
      <div className='h-0.5 border border-border'></div>
      <SideNav />
      <ProfileFooter/>
    </aside>
  )
}

export default ProfilePanel
