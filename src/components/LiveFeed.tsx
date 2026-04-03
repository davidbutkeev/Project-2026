import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface LiveFeedProps {
  isDark: boolean;
}

export default function LiveFeed({ isDark }: LiveFeedProps) {
  const events = [
    {
      type: 'success',
      title: 'Трафик нормализован',
      desc: 'На пр. Абая загруженность снижена до 4/10',
      time: '2 мин назад',
    },
    {
      type: 'warning',
      title: 'Повышенный AQI',
      desc: 'Алмалинский район: 165 AQI',
      time: '5 мин назад',
    },
    {
      type: 'info',
      title: 'Новые автобусы на линии',
      desc: '+12 единиц на маршруте №79',
      time: '12 мин назад',
    },
    {
      type: 'success',
      title: 'ТЭЦ-2 в норме',
      desc: 'Все показатели стабильны',
      time: '18 мин назад',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div
      className={`rounded-2xl p-6 ${
        isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
      } backdrop-blur-sm`}
    >
      <h2 className="text-lg font-semibold mb-4">Живая Лента Событий</h2>
      <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex space-x-3 p-3 rounded-lg ${
              isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors`}
          >
            <div className="flex-shrink-0 mt-0.5">{getIcon(event.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{event.title}</p>
              <p className={`text-sm mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {event.desc}
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
