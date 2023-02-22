import box1 from '../../assets/img/box1.jpg';
import box2 from '../../assets/img/box2.jpg';
import box3 from '../../assets/img/box3.jpg';

export function TopCard() {
  return (
    <div className='min-h-[400px] bg-topcard flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap'>
        <ul className='flex items-center justify-center'>
          <li className='flex gap-8 my-8 mx-8'>
            <a className=''>
              <img src={box1} alt="" className=' rounded-xl cursor-pointer' />
            </a>

            <a>
              <img src={box2} alt="" className=' rounded-xl cursor-pointer' />
            </a>

            <a className=''>
              <img src={box3} alt="" className=' rounded-xl cursor-pointer' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
