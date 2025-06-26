
import React, { useState } from 'react';
import { Button } from './ui/button';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface ProfileBoxProps {
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ profileData, onSave, onCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileData>(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
    onCancel();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center gap-5 mb-5">
        <img 
          src="/placeholder.svg" 
          alt="Profile" 
          className="rounded-md w-[120px] h-[120px] object-cover"
        />
        <button 
          className="px-3 py-1.5 border border-black bg-white cursor-pointer rounded"
          onClick={() => console.log('Upload photo')}
        >
          Trocar foto
        </button>
      </div>

      <div className="flex flex-col gap-2.5">
        <input
          type="text"
          name="name"
          value={isEditing ? formData.name : profileData.name}
          onChange={handleInputChange}
          placeholder="Nome"
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
          disabled={!isEditing}
        />
        
        <div className="text-sm text-gray-600 mb-2.5">
          {isEditing ? formData.email : profileData.email}
        </div>
        
        <input
          type="text"
          name="phone"
          value={isEditing ? formData.phone : profileData.phone}
          onChange={handleInputChange}
          placeholder="Telefone"
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
          disabled={!isEditing}
        />
        
        <input
          type="text"
          name="address"
          value={isEditing ? formData.address : profileData.address}
          onChange={handleInputChange}
          placeholder="Endereço"
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
          disabled={!isEditing}
        />
      </div>

      <div className="flex gap-4 mt-5">
        {isEditing ? (
          <>
            <Button 
              onClick={handleCancel}
              variant="outline"
              className="bg-gray-200 border border-gray-400"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-[#b25645] text-white border-none hover:bg-[#a04937]"
            >
              Aplicar
            </Button>
          </>
        ) : (
          <Button 
            onClick={handleEdit}
            variant="outline"
            className="border border-gray-800 bg-white"
          >
            Atualizar
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileBox;
