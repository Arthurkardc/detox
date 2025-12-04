import React, { useState } from 'react';
import { Loader2, Calendar, Utensils, Info, Lock, ArrowRight } from 'lucide-react';
import { generatePersonalizedDetoxPlan } from '../services/gemini';
import { DetoxPlan } from '../types';

const PlanGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    goal: 'Perder peso e desinchar',
    preferences: ''
  });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<DetoxPlan | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPlan(null);
    
    const result = await generatePersonalizedDetoxPlan(
      Number(formData.age),
      Number(formData.weight),
      formData.goal,
      formData.preferences || 'Nenhuma restrição'
    );
    
    setPlan(result);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buyLink = "https://pay.kirvano.com/29102bea-2ef3-4860-b6dd-c10685f1c9e8";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
        <div className="bg-emerald-600 px-6 py-8 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Gerador de Detox IA Gratuito</h2>
            <p className="opacity-90">Experimente nosso poder: gere uma prévia de 3 dias do seu plano.</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        </div>

        <div className="p-6 md:p-8">
          {!plan && (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                  <input
                    type="number"
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Anos"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Peso Atual (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    required
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Kg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Objetivo Principal</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option>Perder peso e desinchar</option>
                  <option>Aumentar energia e vitalidade</option>
                  <option>Melhorar digestão e pele</option>
                  <option>Reeducação alimentar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferências ou Restrições (Opcional)</label>
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Ex: Não gosto de mamão, sou vegetariano, alergia a amendoim..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Criando seu plano exclusivo...
                  </>
                ) : (
                  'Gerar Plano de 3 Dias Grátis'
                )}
              </button>
            </form>
          )}

          {plan && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center">
                <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-2">PLANO GRATUITO GERADO</div>
                <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{plan.description}</p>
              </div>

              {/* Upsell Banner */}
              <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-[1.01] transition-transform">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                        <Lock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Desbloqueie o Protocolo Completo (30 Dias)</h4>
                        <p className="text-white/90 text-sm">Este plano é apenas uma amostra. Tenha acesso definitivo por apenas R$ 19,90.</p>
                    </div>
                  </div>
                  <a 
                    href={buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 whitespace-nowrap flex items-center"
                  >
                    Liberar Tudo Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
                {plan.days.map((day, idx) => (
                  <div key={idx} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm relative">
                    <div className="flex items-center space-x-2 mb-4 border-b border-emerald-200 pb-2">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                      <h4 className="font-bold text-emerald-800 text-lg">{day.day}</h4>
                    </div>
                    <div className="space-y-4">
                      {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">{meal.type}</span>
                            <span className="text-xs text-gray-400 font-mono">{meal.calories} kcal</span>
                          </div>
                          <h5 className="font-medium text-gray-800 mt-1">{meal.name}</h5>
                          <div className="mt-2 text-xs text-gray-500">
                             <div className="flex flex-wrap gap-1">
                                {meal.ingredients.map((ing, i) => (
                                    <span key={i} className="inline-block bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">{ing}</span>
                                ))}
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Visual cue that this is limited */}
                    {idx === 2 && (
                       <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-50 to-transparent flex items-end justify-center pb-4">
                           <span className="text-xs text-gray-500 font-medium">Fim da prévia gratuita</span>
                       </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <button 
                  onClick={() => setPlan(null)} 
                  className="text-gray-500 text-sm font-medium hover:underline hover:text-emerald-600"
                >
                  Gerar outra prévia gratuita
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanGenerator;