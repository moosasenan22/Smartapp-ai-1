import React from 'react';
import { useBuilderActions } from '../../hooks/useBuilder';

export const PropertiesPanel: React.FC = () => {
  const { selectedComponent, updateComponent } = useBuilderActions();

  if (!selectedComponent) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 rtl">
        <h3 className="text-lg font-semibold mb-4">⚙️ الخصائص</h3>
        <p className="text-gray-500 text-center py-8">
          اختر مكوناً لعرض خصائصه
        </p>
      </div>
    );
  }

  const handlePropertyChange = (property: string, value: any) => {
    updateComponent(selectedComponent.id, { [property]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 rtl">
      <h3 className="text-lg font-semibold mb-4">⚙️ خصائص {selectedComponent.name}</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            النص
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={selectedComponent.props?.text || ''}
            onChange={(e) => handlePropertyChange('text', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اللون
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={selectedComponent.props?.color || 'blue'}
            onChange={(e) => handlePropertyChange('color', e.target.value)}
          >
            <option value="blue">أزرق</option>
            <option value="red">أحمر</option>
            <option value="green">أخضر</option>
            <option value="gray">رمادي</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الحجم
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={selectedComponent.props?.size || 'medium'}
            onChange={(e) => handlePropertyChange('size', e.target.value)}
          >
            <option value="small">صغير</option>
            <option value="medium">متوسط</option>
            <option value="large">كبير</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
