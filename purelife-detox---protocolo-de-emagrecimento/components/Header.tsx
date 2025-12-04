import React from 'react';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onChangeView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const buyLink = "https://pay.kirvano.com/29102bea-2ef3-4860-b6dd-c10685f1c9e8";

  const navItems = [
    { label: 'Início', view: AppView.HOME },
    { label: 'Testar IA Grátis', view: AppView.PLAN_GENERATOR },
    { label: 'Receitas', view: AppView.RECIPES },
    { label: 'Calc. IMC', view: AppView.BMI },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onChangeView(AppView.HOME)}>
            <Leaf className="h-8 w-8 text-emerald-500 mr-2" />
            <span className="font-bold text-xl text-gray-800">PureLife<span className="text-emerald-500">Detox</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onChangeView(item.view)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === item.view
                    ? 'text-emerald-600 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-emerald-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center transition-transform hover:scale-105 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 mr-1" />
              COMPRAR - R$ 19,90
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-emerald-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onChangeView(item.view);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.view
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-500 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-red-500 text-white px-3 py-3 rounded-md text-base font-bold shadow-md"
            >
              QUERO EMAGRECER POR R$ 19,90
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;