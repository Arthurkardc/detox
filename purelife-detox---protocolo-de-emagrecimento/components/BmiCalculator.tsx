import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = Number(height) / 100; // cm to meters
    const w = Number(weight);
    
    if (h > 0 && w > 0) {
      const calculated = w / (h * h);
      setBmi(calculated);
    }
  };

  const getBmiStatus = (value: number) => {
    if (value < 18.5) return { label: 'Abaixo do peso', color: 'text-blue-500', bg: 'bg-blue-100' };
    if (value < 24.9) return { label: 'Peso Ideal', color: 'text-emerald-600', bg: 'bg-emerald-100' };
    if (value < 29.9) return { label: 'Sobrepeso', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Obesidade', color: 'text-red-600', bg: 'bg-red-100' };
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-emerald-100 p-3 rounded-full">
            <Activity className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Calculadora de IMC</h2>
        </div>

        <form onSubmit={calculateBMI} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Ex: 170"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Ex: 70"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Calcular Agora
          </button>
        </form>

        {bmi !== null && (
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Seu IMC é</p>
            <div className="text-5xl font-bold text-gray-900 mb-4">{bmi.toFixed(1)}</div>
            
            <div className={`inline-block px-4 py-2 rounded-full font-medium ${getBmiStatus(bmi).bg} ${getBmiStatus(bmi).color}`}>
              {getBmiStatus(bmi).label}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;