import React, { useState } from 'react';
import {
  CheckCircle2,
  MapPin,
  TreePine,
  Home,
  Flame,
  MessageCircle,
  Camera,
  Play
} from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import SectionDivider from './components/SectionDivider';
import { IMAGES, FRUITS, GALLERY_IMAGES, GALLERY_VIDEOS, LAZER_IMAGES, QUARTO_IMAGES, COZINHA_IMAGES, REDARIO_IMAGES } from './constants';

const App: React.FC = () => {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const displayedImages = showAllGallery ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 8);
  const displayedVideos = showAllGallery ? GALLERY_VIDEOS : GALLERY_VIDEOS.slice(0, 0); // Show no videos initially, or maybe 1? Let's hide videos initially to save bandwidth.

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-200 font-sans">
      {/* Sticky Header with Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-emerald-100/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
              <TreePine className="text-emerald-700 w-6 h-6" />
            </div>
            <span className="font-playfair font-bold text-emerald-950 text-xl md:text-2xl tracking-tight">Chácara dos Sonhos</span>
          </div>
          <WhatsAppButton variant="secondary" label="Chamar no WhatsApp" className="hidden sm:flex border-emerald-600 text-emerald-700 hover:bg-emerald-50" />
        </div>
      </nav>

      {/* 🔹 SEÇÃO 1 – HERO (IMPACTO INICIAL) */}
      <header className="relative pt-24 pb-20 lg:pt-48 lg:pb-48 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Visão geral da casa com gramado (foto de frente, ampla, com foco no verde)"
            className="w-full h-full object-cover brightness-[0.45] scale-105 animate-float delay-700" // Subtle float effect on bg
          />
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-900/40 to-emerald-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-50 text-sm font-bold uppercase tracking-widest shadow-2xl">
                <MapPin size={14} /> Oportunidade em Barreiras – BA
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                ✨ A chácara que une <span className="text-emerald-300 italic font-serif">natureza</span>, conforto e tranquilidade
              </h1>
              <p className="text-lg md:text-2xl text-emerald-50/90 leading-relaxed max-w-2xl font-light drop-shadow-lg">
                Uma propriedade completa, pronta para morar ou curtir os fins de semana com quem você ama.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <WhatsAppButton className="w-full sm:w-auto text-xl py-5 px-10 shadow-emerald-900/50 shadow-xl hover:-translate-y-1 transition-transform" label="👉 Quero conhecer agora" />
              <button
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold hover:bg-white/20 transition-all"
              >
                Ver galeria de fotos
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <SectionDivider position="bottom" color="fill-white" variant="wave" />
      </header>

      {/* 🔹 SEÇÃO 2 – TERRENO E ESPAÇO */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950">
                🌳 <span className="text-emerald-600">2.400 m²</span> de puro contato com a natureza
              </h2>
              <div className="h-1.5 w-24 bg-emerald-500 rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                Com 2.400 m² de área total, essa chácara oferece espaço de sobra para quem valoriza liberdade, ar puro e privacidade.
                Ideal para quem deseja viver longe do barulho da cidade ou ter um refúgio exclusivo para descanso.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="font-playfair text-4xl font-bold text-emerald-800 mb-1">100%</div>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Privacidade</div>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="font-playfair text-4xl font-bold text-emerald-800 mb-1">24km</div>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Da Cidade</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-emerald-600 rounded-[2.5rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
            <video
              src="/videos/escada.mp4"
              className="relative rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] object-cover transform group-hover:-translate-y-2 transition-transform duration-500"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-emerald-500 flex items-center gap-3 max-w-[200px] md:max-w-none">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Play className="text-emerald-600 fill-emerald-600 w-4 h-4" />
              </div>
              <p className="text-sm font-bold text-emerald-900 leading-tight">
                Assista ao vídeo <br />
                <span className="text-xs font-normal text-emerald-600">Mostrando o acesso à chácara</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 3 – ÁREA DE LAZER */}
      <section className="py-16 md:py-32 px-6 bg-emerald-50 relative overflow-hidden">
        <SectionDivider position="top" color="fill-white" variant="active" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[3rem] opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />

            {/* Carousel Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group bg-white">
              <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {LAZER_IMAGES.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Área de lazer ${idx + 1}`}
                    className="flex-shrink-0 w-full h-full object-cover snap-center"
                  />
                ))}
              </div>

              {/* Swipe Indicator Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full z-10 pointer-events-none">
                {LAZER_IMAGES.map((_, idx) => (
                  <div key={idx} className="w-2 h-2 rounded-full bg-white/50" />
                ))}
              </div>

              <div className="absolute bottom-4 right-6 text-white text-xs font-bold drop-shadow-md bg-black/40 px-3 py-1 rounded-full pointer-events-none animate-pulse">
                DESLIZE ↔
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">O Coração da Casa</span>
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 leading-tight">
                🏡 Área de lazer ampla, perfeita para reunir família e amigos
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                A casa conta com uma área de lazer generosa, coberta, ventilada e extremamente agradável.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {["✔️ Almoços em família", "✔️ Aniversários", "✔️ Encontros com amigos", "✔️ Momentos de descanso e contemplação"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 text-emerald-800 font-medium hover:shadow-md transition-shadow">
                    {item}
                  </div>
                ))}
              </div>
              <blockquote className="pl-6 border-l-4 border-emerald-500 text-2xl font-serif italic text-emerald-800 my-8">
                "Aqui, o tempo desacelera."
              </blockquote>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" color="fill-white" variant="curve" />
      </section>

      {/* 🔹 SEÇÃO 4 – CONFORTO INTERNO */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950">🛏️ Conforto e privacidade bem planejados</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A casa possui 3 quartos, pensados para oferecer conforto e privacidade total para sua família e convidados.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500 hover:bg-emerald-50/50 transition-colors">
                <span className="text-4xl font-bold text-emerald-200">01</span>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900">Suíte Principal</h4>
                  <p className="text-slate-600">Com acesso interno pela casa</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-teal-500 hover:bg-teal-50/50 transition-colors">
                <span className="text-4xl font-bold text-teal-200">02</span>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900">Quartos de Hóspedes</h4>
                  <p className="text-slate-600">Com acesso externo independente, ideal para visitas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video group bg-white">
              <img
                src={IMAGES.quartos}
                alt="Quarto confortável e climatizado"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 5 & 6 – COZINHA E BANHEIRO */}
      <section className="py-16 md:py-24 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <TreePine size={400} />
        </div>

        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          {/* Banheiro */}
          {/* Banheiro */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-50">🚿 Banheiro Completo</h2>
            <p className="text-xl text-emerald-100/80 leading-relaxed font-light">
              Espaçoso, funcional e com chuveiro quente para banhos relaxantes em qualquer estação.
            </p>
          </div>

          <div className="h-px bg-emerald-800/50 w-full" />

          {/* Cozinha */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-50">🍽️ Cozinha Americana Integrada</h2>
              <ul className="space-y-4">
                {["Muito ampla e arejada", "Totalmente mobiliada com armários", "Design moderno e funcional", "Integrada ao social"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-lg text-emerald-100">
                    <CheckCircle2 className="text-emerald-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Carousel Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-emerald-800/50 aspect-video group bg-emerald-950">
                <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {COZINHA_IMAGES.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Cozinha americana ${idx + 1}`}
                      className="flex-shrink-0 w-full h-full object-cover snap-center"
                    />
                  ))}
                </div>

                {/* Swipe Indicator Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full z-10 pointer-events-none">
                  {COZINHA_IMAGES.map((_, idx) => (
                    <div key={idx} className="w-2 h-2 rounded-full bg-white/50" />
                  ))}
                </div>

                <div className="absolute bottom-4 right-6 text-white text-xs font-bold drop-shadow-md bg-black/40 px-3 py-1 rounded-full pointer-events-none animate-pulse">
                  DESLIZE ↔
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider position="bottom" color="fill-amber-50" variant="tilt" />
      </section>

      {/* 🔹 SEÇÃO 7 – COZINHA RÚSTICA */}
      <section className="py-16 md:py-32 px-6 bg-amber-50 relative">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200 text-amber-900 rounded-full font-bold uppercase text-xs tracking-widest">
              <Flame size={14} /> Espaço Gourmet
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-amber-950">
              🔥 Cozinha Caipira & Churrasqueira
            </h2>
            <p className="text-xl text-amber-900/70 max-w-2xl mx-auto">
              O lugar onde as melhores memórias são criadas. Prepare aquele feijão no fogão a lenha ou um churrasco de domingo.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-amber-900 rounded-[3rem] rotate-1 blur-sm opacity-10"></div>
            <img src={IMAGES.cozinhaRustica} alt="Fogão a lenha e churrasqueira" className="relative rounded-[3rem] shadow-2xl w-full aspect-video object-cover ring-8 ring-white/50" />
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 8 & 9 – NATUREZA E POMAR (Merged for flow) */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <SectionDivider position="top" color="fill-amber-50" variant="wave" />

        <div className="max-w-7xl mx-auto space-y-24 pt-12">
          {/* Redário */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950">🌴 Redário: descanso de verdade</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Um espaço pensado para relaxar, ouvir o vento, sentir a natureza e esquecer da correria.
              </p>
              {/* Carousel Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 group bg-white">
                <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {REDARIO_IMAGES.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Redário ${idx + 1}`}
                      className="flex-shrink-0 w-full h-full object-cover snap-center"
                    />
                  ))}
                </div>

                {/* Swipe Indicator Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full z-10 pointer-events-none">
                  {REDARIO_IMAGES.map((_, idx) => (
                    <div key={idx} className="w-2 h-2 rounded-full bg-white/50" />
                  ))}
                </div>

                <div className="absolute bottom-4 right-6 text-white text-xs font-bold drop-shadow-md bg-black/40 px-3 py-1 rounded-full pointer-events-none animate-pulse">
                  DESLIZE ↔
                </div>
              </div>
            </div>

            {/* Pomar Grid */}
            <div className="bg-emerald-50 rounded-[3rem] p-10 space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold text-emerald-900">🍊 Pomar Produtivo</h3>
                <p className="text-emerald-700">Um verdadeiro privilégio colher direto do pé.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {FRUITS.map((fruit) => (
                  <div key={fruit.name} className="bg-white p-4 rounded-2xl shadow-sm text-center transform hover:scale-105 transition-transform cursor-default">
                    <div className="text-3xl mb-2">{fruit.icon}</div>
                    <div className="font-bold text-emerald-900 text-sm">{fruit.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rio */}
          {/* Rio */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group min-h-[400px] md:min-h-[500px] flex items-center justify-center p-6 md:p-10">
            <video
              src="/videos/WhatsApp Video 2026-01-21 at 13.45.57.mp4"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center max-w-4xl px-6">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-100 font-bold mb-8 animate-fade-in-up">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" /> Acesso Exclusivo
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
                Rio de Ondas
              </h2>
              <p className="text-xl text-blue-50/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Águas cristalinas para renovar as energias. O cenário perfeito para quem busca conexão com a natureza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 11 & 12 – LOCALIZAÇÃO E CHECKLIST (Combined) */}
      <section className="py-16 md:py-24 px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">📍 Localização Premium</h2>
                <ul className="space-y-4">
                  {["Apenas 24 km de Barreiras – BA", "Fácil acesso o ano todo", "Região segura e tranquila"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-lg text-slate-600">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">✅ Porteira Fechada? Quase!</h2>
                <p className="text-lg text-slate-600 mb-6">IMÓVEL 100% PRONTO. É comprar e usar.</p>
                <div className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200">
                  Ideal para moradia ou lazer
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img src={IMAGES.location} alt="Localização" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SEÇÃO 13 – OFERTA IRRESISTÍVEL */}
      {/* 🔹 GALERIA DE FOTOS E VÍDEOS */}
      <section className="py-16 md:py-24 px-6 bg-white" id="galeria">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950">📸 Galeria de Fotos e Vídeos</h2>
            <p className="text-xl text-slate-600">Explore cada cantinho da sua futura chácara.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Videos - First if expanded */}
            {displayedVideos.map((vid, index) => (
              <div key={`vid-${index}`} className="aspect-square rounded-2xl overflow-hidden shadow-md bg-black relative group">
                <video
                  src={vid}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  controls
                />
                <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white pointer-events-none">
                  <Play size={16} fill="white" />
                </div>
              </div>
            ))}

            {/* Images */}
            {displayedImages.map((img, index) => (
              <div key={`img-${index}`} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-default group">
                <img
                  src={img}
                  alt={`Foto da chácara ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {!showAllGallery && (
            <button
              onClick={() => setShowAllGallery(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all animate-pulse"
            >
              <Camera className="w-6 h-6" />
              Ver todas as fotos e vídeos
            </button>
          )}
        </div>
      </section>

      {/* 🔹 SEÇÃO 13 – OFERTA IRRESISTÍVEL */}
      <section className="py-20 md:py-32 px-6 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <SectionDivider position="top" color="fill-slate-100" variant="tilt" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-400/30 text-emerald-300 font-bold tracking-widest text-sm mb-6 animate-pulse">
            OPORTUNIDADE ÚNICA
          </span>
          <h2 className="text-3xl md:text-6xl font-playfair font-black text-white mb-12">
            O seu sonho custa menos do que você imagina.
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 mb-12 transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24">
              <div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Valor de Investimento</p>
                <p className="text-5xl md:text-7xl font-black text-white">R$ 250<span className="text-3xl text-emerald-400">mil</span></p>
              </div>
              <div className="h-px md:h-24 w-full md:w-px bg-white/20" />
              <div className="text-left space-y-4">
                <div>
                  <p className="text-emerald-400 font-bold mb-1">ENTRADA FACILITADA</p>
                  <p className="text-3xl font-bold text-white">R$ 100.000,00</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-bold mb-1">PARCELAMENTO</p>
                  <p className="text-3xl font-bold text-white">15x R$ 10.000,00</p>
                  <p className="text-emerald-200 font-bold text-sm tracking-wide mt-1">FIXAS E SEM JUROS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-emerald-200/80 max-w-2xl mx-auto">
              Natureza, conforto, privacidade e espaço. Tudo isso com uma condição de pagamento que cabe no seu bolso.
            </p>
            <WhatsAppButton label="QUERO APROVEITAR ESSA OPORTUNIDADE" className="w-full max-w-xl mx-auto !py-6 !text-xl shadow-2xl hover:shadow-emerald-500/20" />
          </div>
        </div>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="py-12 px-6 bg-emerald-950 border-t border-emerald-900 text-center text-emerald-400/60 font-medium">
        <div className="flex flex-col items-center gap-4">
          <TreePine className="w-8 h-8 text-emerald-600 mb-2" />
          <p>© 2026 Chácara dos Sonhos - Barreiras/BA</p>

        </div>
      </footer>

      {/* Floating Action Button */}
      <WhatsAppButton variant="fixed" />
    </div >
  );
};

export default App;
