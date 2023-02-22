import { FiMail, FiMapPin } from 'react-icons/fi'

export function Contact() {
  return (
    <section id='about' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-4xl font-bold text-white'>Contact</h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            <div className='flex flex-col lg:flex-row gap-x-4'>
              <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                <FiMail />
              </div>
              <div>
                <h4 className="text-xl mb-1 text-gray-200">
                  Have a question?
                </h4>
                <p className="text-gray-500 font-normal">
                  'I am here to help you.'
                </p>
                <p className="text-accent font-normal">
                  'Email me at hello@youremail.com'
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-x-4'>
              <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-xl mb-1 text-gray-200">
                  'Current Location'
                </h4>
                <p className="text-gray-500  font-normal">
                  'Bucharest, Romania'
                </p>
                <p className="text-accent font-normal">
                  'Serving clients worldwide'
                </p>
              </div>
            </div>
          </div>
          <form className='space-y-8 w-full max-w-[780px]'>
            <div className='flex gap-8'>
              <input className='input ' type='text' placeholder='Your Name' />
              <input className='input' type='email' placeholder='Your Email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea className='textarea' placeholder='Your Message' />
            <button className='btn btn-lg bg-accent hover:bg-secondary-hove'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
