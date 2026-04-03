import { useState } from 'react';
import { Moon, Sun, Settings, BarChart3, Activity } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Service from './components/Service';
import GridBackground from './components/GridBackground';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'analytics' | 'service'>('dashboard');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <GridBackground isDark={isDark} />

      <div className="relative z-10">
        <header className={`border-b ${isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-lg sticky top-0 z-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center`}>
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Ситуационный Центр</h1>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Алматы</p>
                </div>
              </div>

              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <nav className="flex space-x-1 pb-2">
              {[
                { id: 'dashboard', label: 'DASHBOARD', icon: Activity },
                { id: 'analytics', label: 'ANALYTICS', icon: BarChart3 },
                { id: 'service', label: 'SERVICE', icon: Settings },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDark
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'dashboard' && <Dashboard isDark={isDark} />}
          {activeTab === 'analytics' && <Analytics isDark={isDark} />}
          {activeTab === 'service' && <Service isDark={isDark} setIsDark={setIsDark} />}
        </main>
      </div>
    </div>
  );
}

export default App;
