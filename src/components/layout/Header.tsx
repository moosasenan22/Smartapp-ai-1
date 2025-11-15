import React from 'react';

interface HeaderProps {
  onNewProject?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewProject }) => {
  const handleNewProject = () => {
    onNewProject?.();
    // أو منطق مباشر هنا
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              SmartApp AI
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <button 
              onClick={handleNewProject}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="إنشاء مشروع جديد"
            >
              + مشروع جديد
            </button>
            
            <div 
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
              role="button"
              aria-label="الملف الشخصي"
            >
              <span className="text-sm font-medium">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
