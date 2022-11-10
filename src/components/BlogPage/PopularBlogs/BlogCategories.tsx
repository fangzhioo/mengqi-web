export default function BlogCategories({ cates = [] }: { cates?: any[] }) {
  // const categories = [
  //   {
  //     id: 1,
  //     categoryName: 'Art and Entertainment',
  //     categoryNum: 35,
  //   },
  //   {
  //     id: 2,
  //     categoryName: 'Computer',
  //     categoryNum: 50,
  //   },
  //   {
  //     id: 3,
  //     categoryName: 'Healthy',
  //     categoryNum: 50,
  //   },
  //   {
  //     id: 4,
  //     categoryName: 'Interests and Crafts',
  //     categoryNum: 90,
  //   },
  //   {
  //     id: 5,
  //     categoryName: 'Pets and Animals',
  //     categoryNum: 32,
  //   },
  // ];

  return (
    <div className='mb-[40px] rounded-[8px] bg-[#F5F9F8] px-[20px] py-[50px] lg:px-[15px] xl:px-[35px]'>
      <h3 className='font-recoleta mb-[30px] text-[24px] leading-none text-primary underline'>
        Categories<span className='text-secondary'>.</span>
      </h3>

      <div className='mb-[-25px]'>
        {cates.map((cate) => (
          <a
            key={cate.id}
            href='#'
            className='mb-[25px] flex flex-wrap items-center justify-between rounded-[8px] border border-primary border-opacity-60 bg-white py-[10px]  pr-[20px] pl-[20px] font-light leading-[1.75] hover:border-[#FD6400] hover:border-opacity-60 hover:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)]'
          >
            <span>{cate.categoryName}</span> <span>{cate.categoryNum}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
