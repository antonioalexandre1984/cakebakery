import banner from '../../assets/img/banner-background.png';
export function Banner() {
  return (
    <section id='banner' className='section bg-banner'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-12'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <h1 className='text-lg text-primary  leading-5 md:text-5xl md:leading-tight'>
              Delicious Cakes Bakery <br />
              Upto 50% Off
            </h1>
            <p className='pt-4 pb-8 md:pt-6 text-primary md:pb-12 max-w-[600px] text-lg text-center lg:text-left'>
              Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
            </p>
            <button className='btn btn-md bg-cart hover:bg-secondary-hover rounded-md md:btn-lg transition-all'>
              Order Now!
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-center h-full'>
            <img src={banner} />
          </div>
        </div>
      </div>
    </section >
  );
}
