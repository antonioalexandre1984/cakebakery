import { ReactNode } from 'react';
import { Product } from '../Product';

export function ProductCard() {
  return (
    <section id='productCard' className='section  min-h[1400px] '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center '>

          <h2 className='text-5xl text-primary text-center font-semibold mb-16'>
            Cakes
            <div className=" border-yellow-500 border-4"></div>
          </h2>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </section >
  );
}
