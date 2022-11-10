export default function BlogTags({ tags = [] }: { tags?: any[] }) {
  // const tags = [
  //   {
  //     id: '1',
  //     tagName: 'Cat',
  //     tagCode: 'cat',
  //   },
  //   {
  //     id: '2',
  //     tagName: 'Dog',
  //     tagCode: 'dog',
  //   },
  //   {
  //     id: '3',
  //     tagName: 'Flower',
  //     tagCode: 'flower',
  //   },
  //   {
  //     id: '4',
  //     tagName: 'Food',
  //     tagCode: 'food',
  //   },
  //   {
  //     id: '5',
  //     tagName: 'Apple',
  //     tagCode: 'apple',
  //   },
  //   {
  //     id: '6',
  //     tagName: 'Earth',
  //     tagCode: 'earth',
  //   },
  // ];

  return (
    <div className='mb-[40px] rounded-[8px] bg-[#f5f9f8] px-[20px] py-[50px] lg:px-[15px] xl:px-[35px]'>
      <h3 className='font-recoleta mb-[30px] text-[24px] leading-none text-primary underline'>
        Tags<span className='text-secondary'>.</span>
      </h3>
      <ul className='my-[-7px] mx-[-5px] flex flex-wrap text-[12px] font-light'>
        {tags.map((tag) => (
          <li key={tag.id} className='my-[7px] mx-[5px]'>
            <a href={`/tag/${tag.tagCode}`} className='block rounded-[4px] border border-[#E0E0E0] py-[8px] px-[10px] leading-none hover:text-secondary'>
              {tag.tagName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
