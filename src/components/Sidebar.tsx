
import React from 'react';
import { Home, Calendar, User, LogOut } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const handleLogout = (): void => {
    console.log('Logout clicked');
    // Implementar lógica de logout aqui
  };

  return (
    <div className={`w-[60px] bg-gray-200 h-screen fixed top-0 left-0 py-4 flex flex-col ${className}`}>
      <nav className="flex flex-col space-y-5">
        <a 
          href="#" 
          className="flex justify-center hover:bg-gray-300 p-2 rounded transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="flex justify-center hover:bg-gray-300 p-2 rounded transition-colors"
          aria-label="Calendar"
        >
          <Calendar className="w-5 h-5 text-gray-600" />
        </a>
        <a 
          href="#" 
          className="flex justify-center hover:bg-gray-300 p-2 rounded transition-colors"
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-gray-600" />
        </a>
      </nav>
      
      <div className="mt-auto">
        <button 
          className="w-full flex justify-center font-bold cursor-pointer hover:bg-gray-300 p-2 rounded transition-colors"
          onClick={handleLogout}
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
