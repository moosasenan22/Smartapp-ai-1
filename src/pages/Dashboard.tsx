import React from 'react';
import { Link } from 'react-router-dom';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ComponentType<any>;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className={`text-sm mt-1 ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
            {changeType === 'increase' ? '↑' : '↓'} {change}
          </p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'المشاريع النشطة',
      value: '12',
      change: '20%',
      changeType: 'increase' as const,
      icon: () => (
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'bg-blue-500'
    },
    {
      title: 'المستخدمين',
      value: '1,234',
      change: '5%',
      changeType: 'increase' as const,
      icon: () => (
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: 'bg-green-500'
    },
    {
      title: 'طلبات الذكاء الاصطناعي',
      value: '8,567',
      change: '12%',
      changeType: 'increase' as const,
      icon: () => (
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-purple-500'
    },
    {
      title: 'وقت التشغيل',
      value: '99.9%',
      change: '0.1%',
      changeType: 'decrease' as const,
      icon: () => (
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-orange-500'
    }
  ];

  const quickActions = [
    {
      title: 'منشئ التطبيقات',
      description: 'صمم تطبيقات بسحب وإفلات',
      icon: '🏗️',
      link: '/builder',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'المساعد الذكي',
      description: 'اطلب مساعدة في البرمجة',
      icon: '🤖',
      link: '/ai-assistant',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'ملعب الذكاء الاصطناعي',
      description: 'جرب إمكانيات الذكاء الاصطناعي',
      icon: '🧠',
      link: '/ai-playground',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'التكاملات',
      description: 'إدارة خدمات الطرف الثالث',
      icon: '🔌',
      link: '/integrations',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 rtl">
      <div className="max-w-7xl mx-auto">
        {/* الترحيب */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">مرحباً بعودتك! 👋</h1>
          <p className="text-gray-600 mt-2">إليك نظرة عامة على أداء منصتك</p>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* الإجراءات السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="bg-gradient-to-r text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
            >
              <div className="text-3xl mb-3">{action.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
              <p className="text-white/80 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>

        {/* المحتوى الإضافي */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">📊 النشاط الأخير</h3>
            <div className="space-y-4">
              {[
                { action: 'تم إنشاء مشروع جديد', time: 'منذ 5 دقائق', user: 'أنت' },
                { action: 'تم معالجة طلب ذكاء اصطناعي', time: 'منذ 15 دقيقة', user: 'أحمد' },
                { action: 'تم تحديث الإعدادات', time: 'منذ ساعة', user: 'أنت' },
                { action: 'تم إضافة تكامل جديد', time: 'منذ 3 ساعات', user: 'سارة' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">🚀 البداية السريعة</h3>
            <div className="space-y-3">
              <button className="w-full text-right p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-medium">📝 ابدأ مشروع جديد</span>
                <p className="text-sm text-gray-600 mt-1">ابدأ بتصميم تطبيق من الصفر</p>
              </button>
              <button className="w-full text-right p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-medium">🎨 استخدم قالب جاهز</span>
                <p className="text-sm text-gray-600 mt-1">اختر من مكتبة القوالب</p>
              </button>
              <button className="w-full text-right p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="font-medium">📚 شاهد الدروس</span>
                <p className="text-sm text-gray-600 mt-1">تعلم كيفية استخدام المنصة</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
