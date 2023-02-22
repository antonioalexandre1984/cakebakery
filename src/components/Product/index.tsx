import c1 from '../../assets/img/c1.png';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

export function Product() {
  return (
    <div className='border  hover:shadow flex-col  border-[#111] h-[400px] mb-4 relative overflow-hidden group transition'>

      <div className=" mx-auto flex justify-between items-center">
        <img className="max-h[160px] group-hover:scale-110 transition duration-300" src={c1} alt="" />
      </div>

      <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <button>
          <div className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill className='text-3xl' />
          </div>
        </button>
      </div>
      <div>
      </div>

      <div className=''>
        <div className='text-3xl text-primary  capitalize'>
          <h2 className='font-semibold mb-1'>Cream Cake</h2>
        </div>
        <p className='pb-2.5 text-sm text-primary capitalize'>Cream Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
        <div className='flex align-center justify-evenly'>
          <h2 className='font-semibold text-primary text-3xl'>$50,10</h2>
          <button className='btn btn-md bg-cart hover:bg-secondary-hover rounded-md md:btn-lg transition-all'>
            Add Cart
          </button>
        </div>
      </div>
    </div>

  );
}
