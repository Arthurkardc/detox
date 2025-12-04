import React, { useState } from 'react';
import { Search, Loader2, Clock, Flame, ChevronRight } from 'lucide-react';
import { findHealthyRecipes } from '../services/gemini';
import { Recipe } from '../types';

const RecipeFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setHasSearched(true);
    const results = await findHealthyRecipes(searchTerm);
    if (results) {
      setRecipes(results);
    }
    setLoading(false);
  };

  const suggestions = ['Suco Verde', 'Salada de Quinoa', 'Sopa de Abóbora', 'Chá Hibisco', 'Smoothie Antioxidante'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Receitas Detox & Saudáveis</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Encontre inspiração para sua próxima refeição saudável. Digite um ingrediente que você tem em casa ou o tipo de prato que deseja.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ex: Abacate, Jantar leve, Suco energético..."
            className="w-full px-6 py-4 rounded-full border-2 border-emerald-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-lg shadow-sm transition-all outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-emerald-600 text-white p-2.5 rounded-full hover:bg-emerald-700 transition-colors"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Search className="h-6 w-6" />}
          </button>
        </form>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => { setSearchTerm(s); }}
              className="text-xs font-medium bg-white text-emerald-600 px-3 py-1 rounded-full border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-3 bg-emerald-500"></div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-emerald-500" />
                  {recipe.timeToPrep}
                </div>
                <div className="flex items-center">
                  <Flame className="h-4 w-4 mr-1 text-orange-500" />
                  {recipe.calories} kcal
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Ingredientes:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  {recipe.ingredients.slice(0, 4).map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                  {recipe.ingredients.length > 4 && <li className="list-none text-emerald-600 text-xs mt-1">+ outros...</li>}
                </ul>
              </div>
            </div>
            
            <div className="px-6 pb-6 mt-auto">
                <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-emerald-600 font-medium text-sm hover:text-emerald-700 list-none">
                        <span>Ver modo de preparo</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2">
                        {recipe.instructions.map((step, i) => (
                            <p key={i}><span className="font-bold text-gray-900">{i + 1}.</span> {step}</p>
                        ))}
                    </div>
                </details>
            </div>
          </div>
        ))}
      </div>

      {!loading && hasSearched && recipes.length === 0 && (
        <div className="text-center text-gray-500 mt-12">
          <p>Nenhuma receita encontrada. Tente outros termos.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;