
import React from 'react';
import { Home, Calendar, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-[60px] bg-gray-200 h-screen fixed top-0 left-0 py-4 flex flex-col">
      <div className="flex flex-col space-y-5">
        <a href="#" className="flex justify-center">
          <Home className="w-5 h-5 text-gray-600" />
        </a>
        <a href="#" className="flex justify-center">
          <Calendar className="w-5 h-5 text-gray-600" />
        </a>
        <a href="#" className="flex justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </a>
      </div>
      
      <div className="mt-auto">
        <button className="w-full flex justify-center font-bold cursor-pointer">
          <LogOut className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
