import dummy  from "../assets/animal_oomimigitsune.png"

export const PageE = () => (
  <div className='min-w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-600 to-green-600 p-6 md:p-8 lg:p-12'>
    <div className="max-w-sm md:max-w-2xl text-center text-white space-y-6 animate-fade-in px-4 md:px-0">
      <div className="text-7xl mb-8 animate-bounce-slow">
        <img src={dummy} />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        今すぐ始めよう
      </h1>
      <h2 className="text-sm md:text-2xl font-light mb-6 opacity-90">
        無料トライアル実施中
      </h2>
      <p className="text-sm md:text-base opacity-80 max-w-lg mx-auto leading-relaxed">
        14日間すべての機能を無料でお試しいただけます
      </p>
    </div>
  </div>

);