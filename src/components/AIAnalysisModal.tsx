import { X, Lightbulb, AlertCircle } from 'lucide-react';
import { District } from './Analytics';

interface AIAnalysisModalProps {
  district: District;
  isDark: boolean;
  onClose: () => void;
}

export default function AIAnalysisModal({ district, isDark, onClose }: AIAnalysisModalProps) {
  const getRecommendations = () => {
    const recommendations = [];

    if (district.traffic > 75) {
      recommendations.push({
        title: 'Критическая загруженность дорог',
        measures: [
          'Внедрить шлюзовое регулирование въездов на магистрали (Аль-Фараби, Саина, Абая)',
          'Активировать резервные полосы для общественного транспорта',
          'Увеличить интервалы светофоров на главных артериях на 15%',
          'Перенаправить транзитный трафик на объездные маршруты',
        ],
      });
    } else if (district.traffic > 40) {
      recommendations.push({
        title: 'Повышенная загруженность',
        measures: [
          'Оптимизировать интервалы автобусов до 3-х минут на загруженных маршрутах',
          'Включить адаптивное управление светофорами',
          'Увеличить количество единиц общественного транспорта на +8%',
        ],
      });
    }

    if (district.ecology > 150) {
      recommendations.push({
        title: 'Критическое состояние экологии',
        measures: [
          'Введение временных Эко-зон в Золотом квадрате с ограничением въезда',
          'Активация всех систем очистки воздуха на ТЭЦ-2 и ТЭЦ-3',
          'Запрет въезда грузового транспорта экологического класса ниже Евро-4',
          'Увеличение частоты поливки дорог в 2 раза',
        ],
      });
    } else if (district.ecology > 100) {
      recommendations.push({
        title: 'Повышенный уровень загрязнения',
        measures: [
          'Усиление контроля выбросов промышленных предприятий',
          'Стимулирование использования электротранспорта (временные льготные тарифы)',
          'Увеличение озеленения на 12% в районе',
        ],
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        title: 'Ситуация стабильна',
        measures: [
          'Продолжить мониторинг показателей в режиме реального времени',
          'Поддерживать текущую конфигурацию транспортных потоков',
          'Плановое обслуживание систем мониторинга',
        ],
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
          isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
        } shadow-2xl`}
      >
        <div className={`sticky top-0 p-6 border-b ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} z-10`}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">ИИ-Анализ: {district.name}</h2>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Рекомендации на основе текущих показателей
              </p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-xl ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Трафик
              </div>
              <div className="text-2xl font-bold">{district.traffic}/100</div>
              <div
                className={`text-xs mt-1 ${
                  district.traffic <= 40
                    ? 'text-green-500'
                    : district.traffic <= 75
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {district.traffic <= 40 ? 'Свободно' : district.traffic <= 75 ? 'Заторы' : 'Критично'}
              </div>
            </div>

            <div
              className={`p-4 rounded-xl ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Экология
              </div>
              <div className="text-2xl font-bold">{district.ecology} AQI</div>
              <div
                className={`text-xs mt-1 ${
                  district.ecology <= 50
                    ? 'text-green-500'
                    : district.ecology <= 100
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {district.ecology <= 50 ? 'Чисто' : district.ecology <= 100 ? 'Умеренно' : 'Опасно'}
              </div>
            </div>
          </div>

          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`rounded-xl p-5 ${
                isDark ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50 border border-blue-200'
              }`}
            >
              <div className="flex items-start space-x-3 mb-4">
                {rec.title.includes('Критич') ? (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                )}
                <h3 className="font-semibold text-lg">{rec.title}</h3>
              </div>

              <div className="space-y-2 ml-8">
                {rec.measures.map((measure, mIndex) => (
                  <div key={mIndex} className="flex items-start space-x-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-500'
                      }`}
                    />
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {measure}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div
            className={`rounded-xl p-4 ${
              isDark ? 'bg-gray-800/30 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Рекомендации сгенерированы на основе анализа текущих данных о трафике, качестве воздуха
              и исторических паттернов. Обновлено: сейчас
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
