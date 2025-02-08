// import StarIcon from '@/assets/icons/star.svg';
// import Image from 'next/image';


const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex flex-none gap-4 py-4'>
        {words.map((word, index) => (
          <div key={`${word}-${index}`} className='inline-flex gap-4 items-center'>
            <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
            {/* <StarIcon /> */}
            {/* <Image 
        src={StarIcon} 
        className="size-6 -rotate-12"
        alt="Person seeking behind the laptop" /> */}
          <span className="size-6 -rotate-12">✴</span>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};
