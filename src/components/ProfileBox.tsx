
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface ProfileBoxProps {
  profileData?: ProfileData;
  onSave?: (data: ProfileData) => void;
  onCancel?: () => void;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ 
  profileData = { name: '', email: '', phone: '', address: '' },
  onSave,
  onCancel 
}) => {
  const [formData, setFormData] = useState<ProfileData>(profileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave?.(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
    onCancel?.();
  };

  return (
    <div className="bg-white border border-gray-300 p-8 rounded-lg font-bold">
      <div className="flex items-center gap-5 mb-5">
        <img 
          src="/placeholder.svg" 
          alt="Profile" 
          className="rounded-md w-[120px] h-[120px] object-cover"
        />
        <Button 
          variant="outline" 
          className="px-3 py-1.5 border border-black bg-white text-black rounded hover:bg-gray-50"
        >
          Alterar Foto
        </Button>
      </div>

      <div className="flex flex-col gap-2.5">
        <Input
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="Nome"
          disabled={!isEditing}
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
        />
        
        <div className="text-sm text-gray-600 mb-2.5">
          Email: {formData.email}
        </div>
        
        <Input
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="Telefone"
          disabled={!isEditing}
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
        />
        
        <Input
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Endereço"
          disabled={!isEditing}
          className="p-2.5 rounded-md border border-gray-400 mb-2.5"
        />

        <div className="flex gap-4 mt-5">
          {isEditing ? (
            <>
              <Button 
                onClick={handleCancel}
                variant="outline"
                className="px-4 py-2.5 bg-gray-200 border border-gray-400 rounded-md font-semibold"
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleSave}
                className="px-4 py-2.5 bg-[#b25645] text-white border-none rounded-md font-semibold hover:bg-[#a04a39]"
              >
                Aplicar
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => setIsEditing(true)}
              variant="outline"
              className="px-4 py-2.5 border border-gray-800 bg-white text-black rounded-md font-semibold"
            >
              Atualizar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
