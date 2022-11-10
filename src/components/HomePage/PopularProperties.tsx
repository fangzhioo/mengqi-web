import ArrowLink from '@/components/ArrowLink';

export default function PopularProperties() {
  // 流行属性
  const popularProperties = [
    {
      image: '1',
      type: 'Sale',
      title: 'Orchid Casel de Paradise.',
      address: '18B Central Street, San Francisco',
      price: '$255300',
      info: '1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage',
    },
    {
      image: '2',
      type: 'Rent',
      title: 'Ruposibangla de parlosia.',
      address: '18B Central Street, San Francisco',
      price: '$255300',
      info: '1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage',
    },
    {
      image: '3',
      type: 'Sale',
      title: 'Sinomen Studio Palace.',
      address: '194 Mercer Street, 627 Broadway, New York',
      price: '$255300',
      info: '1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage',
    },
  ];

  return (
    <section className='popular-properties py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            {' '}
            <span className='text-tiny mb-2 inline-block text-secondary'>Best Choice</span>
          </div>
          <div className='col-span-12'>
            <div className='mb-[50px] flex flex-col items-start justify-between sm:flex-row'>
              <div>
                <h2 className='font-recoleta text-[24px] capitalize text-primary sm:text-[30px] xl:text-xl'>
                  Popular Properties<span className='text-secondary'>.</span>
                </h2>
              </div>
              <ArrowLink href='/blog' className='text-tiny flex flex-wrap items-center text-secondary'>
                Explore all
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className='grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3'>
          {popularProperties.map((i) => (
            <div key={i.image} className='overflow-hidden rounded-md bg-[#FFFDFC] text-center drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px]'>
              <div className='relative'>
                <a href='properties-details.html' className='block'>
                  <img src='/images/template/properties/properties1.jpg' className='h-full w-full' loading='lazy' width='370' height='266' alt={i.title} />
                </a>
                <div className='absolute top-5 right-5 flex flex-col flex-wrap'>
                  <button className='mb-[5px] flex flex-wrap items-center rounded-[2px] bg-primary-700 p-[5px] text-xs text-white'>
                    <img className='mr-1' src='/images/template/icon/camera.png' loading='lazy' width='13' height='10' alt='camera icon' />
                    <span>07</span>
                  </button>
                </div>
                <span className='absolute bottom-5 left-5 rounded-[2px] bg-[#FFFDFC] p-[5px] text-[14px] font-normal capitalize leading-none text-secondary'>for {i.type}</span>
              </div>

              <div className='py-[20px] px-[20px]'>
                <h3>
                  <a href='properties-details.html' className='font-recoleta text-[22px] leading-tight text-primary xl:text-lg'>
                    {i.title}
                  </a>
                </h3>
                <h4>
                  <a href='properties-details.html' className='text-tiny font-light text-secondary underline'>
                    {i.address}
                  </a>
                </h4>
                <span className='text-sm font-light'>Lorem ipsum dolor sit amet.</span>
                <div className='relative before:absolute before:top-1/2 before:z-[-1] before:block before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#E0E0E0]'>
                  <span className='font-recoleta bg-white px-[15px] text-base text-primary'>{i.price}</span>
                </div>
                <p className='font-light'>{i.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
