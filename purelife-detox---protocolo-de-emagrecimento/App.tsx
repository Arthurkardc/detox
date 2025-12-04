import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanGenerator from './components/PlanGenerator';
import RecipeFinder from './components/RecipeFinder';
import BmiCalculator from './components/BmiCalculator';
import { AppView } from './types';
import { Instagram, Twitter, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Hero onStart={() => setCurrentView(AppView.PLAN_GENERATOR)} />;
      case AppView.PLAN_GENERATOR:
        return <PlanGenerator />;
      case AppView.RECIPES:
        return <RecipeFinder />;
      case AppView.BMI:
        return <BmiCalculator />;
      default:
        return <Hero onStart={() => setCurrentView(AppView.PLAN_GENERATOR)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">PureLife Detox</h3>
              <p className="text-gray-400 text-sm">
                Sua jornada para uma vida mais leve e saudável começa aqui. Tecnologia e natureza trabalhando juntas pelo seu bem-estar.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setCurrentView(AppView.PLAN_GENERATOR)} className="hover:text-emerald-400">Criar Plano</button></li>
                <li><button onClick={() => setCurrentView(AppView.RECIPES)} className="hover:text-emerald-400">Receitas</button></li>
                <li><button onClick={() => setCurrentView(AppView.BMI)} className="hover:text-emerald-400">Calcular IMC</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-emerald-400"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-emerald-400"><Mail className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PureLife Detox. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;