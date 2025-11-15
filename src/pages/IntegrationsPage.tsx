import React from 'react';

const IntegrationsPage: React.FC = () => {
  const integrations = [
    { name: 'Firebase', status: 'متصل', icon: '🔥', color: 'bg-orange-100 text-orange-600' },
    { name: 'OpenAI', status: 'متصل', icon: '🤖', color: 'bg-green-100 text-green-600' },
    { name: 'Stripe', status: 'غير متصل', icon: '💳', color: 'bg-blue-100 text-blue-600' },
    { name: 'SendGrid', status: 'غير متصل', icon: '📧', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🔌 التكاملات</h1>
          <p className="text-gray-600 mt-2">إدارة خدمات الطرف الثالث</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className={`p-2 rounded-lg ${integration.color} text-lg`}>
                    {integration.icon}
                  </span>
                  <div className="mr-3">
                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                    <p className={`text-sm ${
                      integration.status === 'متصل' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {integration.status}
                    </p>
                  </div>
                </div>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  integration.status === 'متصل' 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                } transition-colors`}>
                  {integration.status === 'متصل' ? 'فصل' : 'اتصال'}
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                {integration.status === 'متصل' 
                  ? 'الخدمة متصلة وتعمل بشكل طبيعي'
                  : 'قم بتوصيل الخدمة لتفعيل الميزات'
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
