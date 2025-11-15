import React from 'react';

const MyProjectsPage: React.FC = () => {
  const projects = [
    { name: 'متجر إلكتروني', lastModified: 'منذ 2 يوم', status: 'نشط' },
    { name: 'تطبيق موبايل', lastModified: 'منذ أسبوع', status: 'مسودة' },
    { name: 'موقع شركة', lastModified: 'منذ 5 أيام', status: 'نشط' },
    { name: 'منصة تعليمية', lastModified: 'منذ شهر', status: 'مؤرشف' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📁 مشاريعي</h1>
            <p className="text-gray-600 mt-2">إدارة جميع مشاريعك في مكان واحد</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            + مشروع جديد
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'نشط' ? 'bg-green-100 text-green-600' :
                  project.status === 'مسودة' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{project.lastModified}</p>
              
              <div className="flex space-x-2 space-x-reverse">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                  فتح
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  إعدادات
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsPage;
