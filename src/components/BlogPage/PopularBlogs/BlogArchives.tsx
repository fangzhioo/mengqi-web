export default function BlogArchives() {
  const archives = [
    {
      date: 'January, 2022',
      num: 34,
    },
    {
      date: 'December, 2021',
      num: 34,
    },
    {
      date: 'November, 2021',
      num: 34,
    },
    {
      date: 'October, 2021',
      num: 34,
    },
  ];

  return (
    <div className='mb-[40px] rounded-[8px] bg-[#F5F9F8] px-[20px] py-[50px] lg:px-[15px] xl:px-[35px]'>
      <h3 className='font-recoleta mb-[30px] text-[24px] leading-none text-primary underline'>
        Archives<span className='text-secondary'>.</span>
      </h3>

      <div className='mb-[-25px]'>
        {archives.map((arc) => (
          <a
            key={arc.date}
            href='#'
            className='mb-[25px] flex flex-wrap items-center justify-between rounded-[8px] border border-primary border-opacity-60 bg-white py-[10px]  pr-[20px] pl-[20px] font-light leading-[1.75] hover:border-[#FD6400] hover:border-opacity-60 hover:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]'
          >
            <span>{arc.date} </span> <span>{arc.num}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
