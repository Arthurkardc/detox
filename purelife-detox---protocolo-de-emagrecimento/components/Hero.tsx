import React from 'react';
import { ArrowRight, CheckCircle, Star, ShieldCheck, Clock, Award } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const buyLink = "https://pay.kirvano.com/29102bea-2ef3-4860-b6dd-c10685f1c9e8";

  return (
    <div className="bg-white font-sans">
      {/* SECTION 1: HERO / SALES HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Copy Side */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold tracking-wide uppercase mb-4 animate-pulse">
                🔥 Oferta por Tempo Limitado
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                Desbloqueie o corpo dos seus sonhos em <span className="text-emerald-600">30 dias</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Descubra o <strong>Protocolo PureLife Detox</strong>. O método definitivo para desinchar, acelerar o metabolismo e recuperar sua autoestima sem dietas malucas.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                     <span className="text-gray-400 line-through text-lg">De R$ 97,00</span>
                     <span className="text-3xl font-bold text-gray-900">Por R$ 19,90</span>
                  </div>
                  <a
                    href={buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transform transition-all shadow-lg hover:shadow-emerald-500/50"
                  >
                    QUERO EMAGRECER AGORA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    <ShieldCheck className="inline w-3 h-3 mr-1" />
                    Compra 100% Segura • Acesso Imediato
                  </p>
                </div>
              </div>
            </div>

            {/* Image Side - Clickable */}
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <a href={buyLink} target="_blank" rel="noopener noreferrer" className="block relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden hover:opacity-95 transition-opacity cursor-pointer group">
                <div className="absolute top-0 right-0 bg-red-600 text-white font-bold px-4 py-2 rounded-bl-xl z-20 group-hover:scale-110 transition-transform">
                  -80% OFF
                </div>
                <img
                  className="w-full h-full object-cover transform scale-105"
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Prato saudável detox e emagrecimento"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Transformação Total</p>
                    <p className="text-sm opacity-90">Clique para garantir seu desconto</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: PROBLEM AWARENESS */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Você se identifica com isso?</h2>
            <p className="mt-4 text-gray-600">Muitas mulheres tentam de tudo e não conseguem resultados. O problema não é você, é o método.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inchaço Constante", desc: "Sente que sua barriga dobra de tamanho após as refeições?", icon: "😣" },
              { title: "Efeito Sanfona", desc: "Perde peso durante a semana e ganha tudo de novo no fim de semana?", icon: "📉" },
              { title: "Falta de Energia", desc: "Acorda cansada e sente sono o dia todo?", icon: "🔋" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: THE SOLUTION / BENEFITS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">O que você vai receber</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tudo o que você precisa no Protocolo PureLife
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                "Cardápios completos passo a passo",
                "Receitas de Sucos Detox Aceleradores",
                "Lista de compras econômica",
                "Guia de substituições inteligentes",
                "Acesso vitalício ao material",
                "Bônus: Guia de exercícios em casa"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
              
              <div className="pt-6">
                 <a
                    href={buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                  >
                    GARANTIR MEU ACESSO AGORA
                  </a>
              </div>
            </div>
            <div className="bg-emerald-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-500 w-24 h-24 rounded-full opacity-20"></div>
                <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-4">Teste a ferramenta de IA Grátis!</h3>
                    <p className="text-emerald-700 mb-6">
                        Use nosso gerador de planos gratuito aqui no site para ter uma prévia do poder do nosso método, depois volte para comprar o guia completo.
                    </p>
                    <button onClick={onStart} className="bg-white text-emerald-600 font-bold px-6 py-2 rounded-full shadow hover:bg-emerald-50">
                        Testar IA Agora
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: SOCIAL PROOF */}
      <div className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quem comprou, aprovou ⭐⭐⭐⭐⭐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mariana S.", result: "-4kg em 15 dias", text: "Eu achava que seria difícil, mas as receitas são deliciosas. Meu inchaço sumiu na primeira semana!" },
              { name: "Carla D.", result: "-7kg em 30 dias", text: "O melhor investimento que fiz. Por 19,90 é praticamente de graça pelo tanto de conteúdo que tem." },
              { name: "Patricia M.", result: "Mais energia", text: "Não comprei só pra emagrecer, mas pela saúde. Me sinto outra pessoa, muito mais disposta." }
            ].map((testim, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex text-yellow-400 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-4">"{testim.text}"</p>
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <span className="font-bold text-white">{testim.name}</span>
                  <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded">{testim.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 5: PRICE & GUARANTEE CTA */}
      <div className="bg-emerald-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Comece sua transformação hoje mesmo
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã o corpo e a saúde que você merece. O preço promocional pode acabar a qualquer momento.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Promoção</span>
            <div className="mt-4 flex items-baseline justify-center text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">R$ 19</span>
              <span className="text-3xl font-semibold">,90</span>
            </div>
            <p className="mt-2 text-gray-500 line-through">Preço normal: R$ 97,00</p>
            
            <ul className="mt-6 space-y-3 text-left text-sm text-gray-600 mb-8">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2"/> Acesso Imediato</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2"/> Compra Segura</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2"/> 7 Dias de Garantia</li>
            </ul>

            <a 
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-600 border border-transparent rounded-lg py-4 px-4 text-center font-bold text-white hover:bg-emerald-700 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              COMPRAR AGORA
            </a>
            <div className="mt-4 flex justify-center space-x-2 grayscale opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Visa.svg/64px-Visa.svg.png" className="h-6" alt="Visa"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/64px-Mastercard_2019_logo.svg.png" className="h-6" alt="Mastercard"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/64px-PayPal.svg.png" className="h-6" alt="Paypal"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;