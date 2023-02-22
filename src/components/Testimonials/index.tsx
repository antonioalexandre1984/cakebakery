import { TestSlider } from '../TestSliderTsx';

export function Testimonials() {
  return (
    <section id='testimonials' className='section bg-hero'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl font-bold text-primary'>Testimonials</h2>
        </div>
        <TestSlider />
      </div>
    </section>
  );
}
