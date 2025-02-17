import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
// import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";


export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`
        }} 
      />

      {/* Hero Rings */}
      <div className='size-[620px] hero-ring -z-10' ></div>
      <div className='size-[820px] hero-ring -z-10'></div>
      <div className='size-[1020px] hero-ring -z-10'></div>
      <div className='size-[1220px] hero-ring -z-10'></div>

      {/* Content */}
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image 
            src={memojiImage} 
            className="size-[100px]"
            alt="Person seeking behind the laptop"
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping'></div>
            </div>
            <div className='text-sm font-medium'>Be the King of Trading</div>
          </div>
        </div>

        {/* Heading & Description */}
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Welcome to the World of Trading!
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
          &quot;Trade Smarter, not harder. Our course teaches you efficient strategies to maximize your returns.&quot;
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button 
            className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition'
          >
            <span className='font-semibold'>Explore My Work</span>
            <span>🔼</span>
          </button>
          <a href="https://t.me/tradebymaster">
          <button 
            className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 transition cursor-pointer'
          >
            <span>🤗</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};
