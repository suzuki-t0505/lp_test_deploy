import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      title: "未来を創造するお",
      subtitle: "革新的なソリューション",
      description: "テクノロジーとクリエイティビティの融合で、ビジネスの可能性を広げます",
      bg: "from-purple-600 to-blue-600",
      icon: "🚀"
    },
    {
      title: "シンプルで強力",
      subtitle: "直感的なインターフェース",
      description: "誰でも簡単に使えるデザインで、複雑な作業もスムーズに",
      bg: "from-blue-600 to-cyan-600",
      icon: "⚡"
    },
    {
      title: "安心のサポート",
      subtitle: "24/7カスタマーケア",
      description: "専門チームがいつでもあなたのビジネスをサポートします",
      bg: "from-cyan-600 to-teal-600",
      icon: "💎"
    },
    {
      title: "今すぐ始めよう",
      subtitle: "無料トライアル実施中",
      description: "14日間すべての機能を無料でお試しいただけます",
      bg: "from-teal-600 to-green-600",
      icon: "🎯"
    }
  ];

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full h-full flex items-center justify-center bg-gradient-to-br ${slide.bg} p-6 md:p-8 lg:p-12`}
          >
            <div className="max-w-sm md:max-w-2xl text-center text-white space-y-6 animate-fade-in px-4 md:px-0">
              <div className="text-7xl mb-8 animate-bounce-slow">{slide.icon}</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <h2 className="text-sm md:text-2xl font-light mb-6 opacity-90">
                {slide.subtitle}
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-lg mx-auto leading-relaxed">
                {slide.description}
              </p>
              {index === slides.length - 1 && (
                <button className="mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-3 bg-white text-gray-900 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-2xl">
                  無料で始める
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {currentSlide === 0 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white text-sm opacity-70 animate-pulse md:hidden">
          スワイプして次へ →
        </div>
      )}
    </div>
  );
};

export default App;