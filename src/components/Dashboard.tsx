import { Bus, Camera, Wind, Zap, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import CircularIndex from './CircularIndex';
import LiveFeed from './LiveFeed';

interface DashboardProps {
  isDark: boolean;
}

export default function Dashboard({ isDark }: DashboardProps) {
  const stats = [
    { label: 'Автобусы', value: '2,820+', icon: Bus, color: 'blue' },
    { label: 'Камеры', value: '179,800', icon: Camera, color: 'purple' },
    { label: 'Станции AQI', value: '37', icon: Wind, color: 'green' },
    { label: 'ТЭЦ-2', value: 'Стабильно', icon: Zap, color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`rounded-2xl p-8 ${isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'} backdrop-blur-sm`}>
          <h2 className="text-lg font-semibold mb-6">Общий Индекс Города</h2>
          <div className="flex justify-center">
            <CircularIndex value={62} isDark={isDark} />
          </div>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                +3% за неделю
              </span>
            </div>
            <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Обновлено: сейчас
            </span>
          </div>
        </div>

        <LiveFeed isDark={isDark} />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Статистика Систем</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl p-6 ${
                isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
              } backdrop-blur-sm hover:scale-105 transition-transform`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    stat.color === 'blue'
                      ? 'bg-blue-500/20 text-blue-500'
                      : stat.color === 'purple'
                      ? 'bg-purple-500/20 text-purple-500'
                      : stat.color === 'green'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-orange-500/20 text-orange-500'
                  }`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                {stat.value === 'Стабильно' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : null}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
