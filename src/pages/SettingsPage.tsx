import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    language: 'ar',
    theme: 'light',
    notifications: true,
    autoSave: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">⚙️ الإعدادات</h1>
          <p className="text-gray-600 mt-2">خصص تجربتك في المنصة</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">اللغة</h3>
                <p className="text-gray-600 text-sm">اختر لغة الواجهة</p>
              </div>
              <select 
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">السمة</h3>
                <p className="text-gray-600 text-sm">اختر مظهر المنصة</p>
              </div>
              <select 
                value={settings.theme}
                onChange={(e) => handleSettingChange('theme', e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="light">فاتح</option>
                <option value="dark">غامق</option>
                <option value="auto">تلقائي</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">الإشعارات</h3>
                <p className="text-gray-600 text-sm">استقبل إشعارات حول مشاريعك</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">الحفظ التلقائي</h3>
                <p className="text-gray-600 text-sm">احفظ التغييرات تلقائياً</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={settings.autoSave}
                  onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                حفظ الإعدادات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
