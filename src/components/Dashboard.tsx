
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ProfileBox from './ProfileBox';
import { ProfileData } from '../types';
import { PLACEHOLDER_USER } from '../utils/constants';

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [profileData, setProfileData] = useState<ProfileData>({
    name: PLACEHOLDER_USER.name,
    email: PLACEHOLDER_USER.email,
    phone: PLACEHOLDER_USER.phone,
    address: PLACEHOLDER_USER.address
  });

  const handleProfileSave = (data: ProfileData): void => {
    setProfileData(data);
    console.log('Perfil salvo:', data);
  };

  const handleProfileCancel = (): void => {
    console.log('Edição cancelada');
  };

  const handleSearchChange = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-['Inter',sans-serif]">
      <Sidebar />
      
      <div className="flex-1 ml-[60px]">
        <div className="p-8 bg-white min-h-screen">
          <Topbar 
            searchValue={searchValue}
            onSearchChange={handleSearchChange}
          />
          
          <div className="bg-white p-8 rounded-[60px] font-bold shadow-[0_6px_20px_0_rgba(0,0,0,0.19)] mt-5">
            <ProfileBox 
              profileData={profileData}
              onSave={handleProfileSave}
              onCancel={handleProfileCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
