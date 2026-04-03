import { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import DistrictCard from './DistrictCard';
import AIAnalysisModal from './AIAnalysisModal';

interface AnalyticsProps {
  isDark: boolean;
}

export interface District {
  id: number;
  name: string;
  traffic: number;
  ecology: number;
}

export default function Analytics({ isDark }: AnalyticsProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const districts: District[] = [
    { id: 1, name: 'Алмалинский', traffic: 82, ecology: 165 },
    { id: 2, name: 'Ауэзовский', traffic: 45, ecology: 95 },
    { id: 3, name: 'Бостандыкский', traffic: 67, ecology: 128 },
    { id: 4, name: 'Жетысуский', traffic: 38, ecology: 72 },
    { id: 5, name: 'Медеуский', traffic: 25, ecology: 48 },
    { id: 6, name: 'Наурызбайский', traffic: 73, ecology: 142 },
    { id: 7, name: 'Турксибский', traffic: 56, ecology: 110 },
    { id: 8, name: 'Алатауский', traffic: 31, ecology: 65 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Аналитика по Районам</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Детальный мониторинг трафика и экологии
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {districts.map((district) => (
          <DistrictCard
            key={district.id}
            district={district}
            isDark={isDark}
            onAnalyze={() => setSelectedDistrict(district)}
          />
        ))}
      </div>

      {selectedDistrict && (
        <AIAnalysisModal
          district={selectedDistrict}
          isDark={isDark}
          onClose={() => setSelectedDistrict(null)}
        />
      )}
    </div>
  );
}
