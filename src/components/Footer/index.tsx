import { Social } from '../Social';

export function Footer() {
  return (
    <footer className='bg-[#d494cc] py-10'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <p className='text-primary text-2xl'>Desenvolvido por Antonio Alexandre</p>
          <Social />
        </div>
      </div>
    </footer>
  );
}
