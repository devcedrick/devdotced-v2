import React from 'react';
import ProfileHeader from '../profile-panel/sections/ProfileHeader';
import SideNav from '../profile-panel/sections/SideNav';
import ProfileFooter from '../profile-panel/sections/ProfileFooter';

const MobileProfilePanel = () => {
  return (
    <div className="lg:hidden p-6 flex flex-col gap-5 mt-15 w-full">
      <ProfileHeader />
      <div className='h-0.5 border-t border-border my-4'></div>
      <SideNav />
      <div className='h-0.5 border-t border-border my-4'></div>
      <ProfileFooter />
    </div>
  );
};

export default MobileProfilePanel;
