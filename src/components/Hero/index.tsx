import { ReactNode } from 'react';
import background from '../../assets/img/background.png';


export function Hero() {
  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583987921452';
  };

  return (
    <section className='lg:h-[85vh] flex items-center bg-hero lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-2xl text-red-700 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Delicious Cakes Bakery
            </h1>
            <p className='pt-4 text-red-700  pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore dolor elit.
            </p>
            <button onClick={WhatsAppButton} className='btn btn-md bg-accent  hover:bg-secondary-hover rounded-md md:btn-lg transition-all'>
              Order Now!
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-center h-full'>
            <img src={background} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
