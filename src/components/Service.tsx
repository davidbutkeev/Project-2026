import { Moon, Sun, Mail, Info } from 'lucide-react';

interface ServiceProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Service({ isDark, setIsDark }: ServiceProps) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-1">Настройки и Сервис</h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Управление внешним видом и дополнительные функции
        </p>
      </div>

      <div
        className={`rounded-xl p-6 ${
          isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
        } backdrop-blur-sm`}
      >
        <h3 className="font-semibold mb-4">Тема оформления</h3>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsDark(false)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
              !isDark
                ? 'bg-blue-500 text-white shadow-lg'
                : isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Sun className="w-5 h-5" />
            <span>Светлая</span>
          </button>
          <button
            onClick={() => setIsDark(true)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
              isDark
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Moon className="w-5 h-5" />
            <span>Темная</span>
          </button>
        </div>
      </div>

      <div
        className={`rounded-xl p-6 ${
          isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
        } backdrop-blur-sm`}
      >
        <h3 className="font-semibold mb-4">Связь с Акиматом</h3>
        <button
          className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
            isDark
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          <Mail className="w-5 h-5" />
          <span>Отправить обращение</span>
        </button>
        <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Прямая связь с департаментом городского управления. Среднее время ответа: 2 часа
        </p>
      </div>

      <div
        className={`rounded-xl p-6 ${
          isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
        } backdrop-blur-sm`}
      >
        <div className="flex items-start space-x-3">
          <Info className={`w-5 h-5 mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
          <div>
            <h3 className="font-semibold mb-2">О системе</h3>
            <div className={`space-y-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>Версия: 2.4.1</p>
              <p>Последнее обновление: 03.04.2026</p>
              <p>Источники данных: 8 интегрированных систем</p>
              <p>Точность прогнозов: 94.2%</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`rounded-xl p-6 ${
          isDark
            ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30'
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
        }`}
      >
        <h3 className="font-semibold mb-2">Активные модули</h3>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {[
            'Транспортный мониторинг',
            'Экологический контроль',
            'Видеоаналитика',
            'Прогнозирование',
            'ИИ-рекомендации',
            'Интеграция с ТЭЦ',
          ].map((module) => (
            <div
              key={module}
              className={`px-3 py-2 rounded-lg text-sm ${
                isDark ? 'bg-gray-800/50' : 'bg-white/80'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{module}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
