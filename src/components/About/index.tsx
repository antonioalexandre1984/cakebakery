import about from '../../assets/img/about.png';

export function About() {
  return (
    <div className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            src={about}
            alt='about'
            className='object-cover w-full xl:w-1/2'
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-4xl font-bold text-white'>Jane Doe</h2>
              <p className='mb-4 text-accent'>
                Co-Founder
              </p>
              <p className='mb-8 text-white' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore earum dolorum quo consequatur rem nihil hic ducimus rerum soluta neque harum velit molestiae dignissimos distinctio dolorum nisi labore culpa nihil.
                <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
              <div>
                <button className='btn btn-md bg-accent hover:bg-secondary-hover rounded-md md:btn-lg transition-all'>
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
