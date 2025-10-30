import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// ここに作成したページのコンポーネントを読み込む
import { PageA } from './components/PageA';
import { PageB } from "./components/PageB";
import { PageC } from "./components/PageC";
import { PageD } from "./components/PageD";
import { PageE } from "./components/PageE";


const App = () => {
  const slides = [
    <PageA />,
    <PageB />,
    <PageC />,
    <PageD />,
    <PageE />
  ]
  

  return (
    <div className='flex flex-col h-svh'>
      <Swiper 
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false} 
        modules={[Navigation, Pagination]} 
        className="mySwiper"
      >
        {slides.map((page) => (
          <SwiperSlide>
            <div className='h-full text-gray-900'>
              {page}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <button className="w-2/3 mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-3 bg-white text-gray-900 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-2xl">
          無料で始める
        </button>
      </div>
    </div>
  );
};

export default App;