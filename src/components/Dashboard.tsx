
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ProfileBox from './ProfileBox';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 99999-9999',
    address: 'Rua das Flores, 123'
  });

  const handleProfileSave = (data: ProfileData) => {
    setProfileData(data);
    console.log('Perfil salvo:', data);
  };

  const handleProfileCancel = () => {
    console.log('Edição cancelada');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-['Inter',sans-serif]">
      <Sidebar />
      
      <div className="flex-1 ml-[60px]">
        <div className="p-8 bg-white min-h-screen">
          <Topbar 
            searchValue={searchValue}
            onSearchChange={setSearchValue}
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
