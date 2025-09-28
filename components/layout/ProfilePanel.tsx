import React from 'react'
import ProfileHeader from '../ui/ProfileHeader'
import SideNav from '../ui/SideNav'

const ProfilePanel = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[20vw] p-6 bg-sidebar border-r border-border flex flex-col gap-4">
      <ProfileHeader />
      <SideNav />
    </aside>
  )
}

export default ProfilePanel
