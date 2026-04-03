import { Sparkles, Car, Leaf } from 'lucide-react';
import { District } from './Analytics';

interface DistrictCardProps {
  district: District;
  isDark: boolean;
  onAnalyze: () => void;
}

export default function DistrictCard({ district, isDark, onAnalyze }: DistrictCardProps) {
  const getTrafficColor = (value: number) => {
    if (value <= 40) return 'bg-green-500';
    if (value <= 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrafficStatus = (value: number) => {
    if (value <= 40) return 'Свободно';
    if (value <= 75) return 'Заторы';
    return 'Тяжелые пробки';
  };

  const getEcologyColor = (value: number) => {
    if (value <= 50) return 'bg-green-500';
    if (value <= 100) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getEcologyStatus = (value: number) => {
    if (value <= 50) return 'Чисто';
    if (value <= 100) return 'Умеренно';
    return 'Опасно';
  };

  return (
    <div
      className={`rounded-xl p-6 ${
        isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
      } backdrop-blur-sm hover:shadow-lg transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold">{district.name}</h3>
        <button
          onClick={onAnalyze}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            isDark
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>ИИ-Анализ</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4" />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Загруженность трафика
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold">{district.traffic}/100</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  district.traffic <= 40
                    ? 'bg-green-500/20 text-green-500'
                    : district.traffic <= 75
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {getTrafficStatus(district.traffic)}
              </span>
            </div>
          </div>
          <div className={`h-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
            <div
              className={`h-full ${getTrafficColor(district.traffic)} transition-all duration-500`}
              style={{ width: `${district.traffic}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4" />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Состояние экологии
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold">{district.ecology} AQI</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  district.ecology <= 50
                    ? 'bg-green-500/20 text-green-500'
                    : district.ecology <= 100
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {getEcologyStatus(district.ecology)}
              </span>
            </div>
          </div>
          <div className={`h-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
            <div
              className={`h-full ${getEcologyColor(district.ecology)} transition-all duration-500`}
              style={{ width: `${Math.min((district.ecology / 200) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
