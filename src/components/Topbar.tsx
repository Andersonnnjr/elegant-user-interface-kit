
import React from 'react';
import { Search, Calendar } from 'lucide-react';

interface TopbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Topbar: React.FC<TopbarProps> = ({ 
  searchValue = '', 
  onSearchChange 
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onSearchChange?.(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-8 mt-5">
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Pesquisar..."
          className="w-[300px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-gray-600" />
        <a href="#" className="text-black no-underline hover:text-blue-600 transition-colors">
          Eventos
        </a>
      </div>
    </div>
  );
};

export default Topbar;
