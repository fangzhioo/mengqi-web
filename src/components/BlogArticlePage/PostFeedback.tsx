import { AiFillLike, AiFillMessage } from 'react-icons/ai';

interface CommentModel {
  id: number;
  commentor: string;
  likes: number;
  createTime: string;
  content: string;
  children?: CommentModel[];
}

const comments: CommentModel[] = [
  {
    id: 1,
    commentor: 'Stela Flemming',
    likes: 254,
    createTime: '20 Jan, 2022',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat iste laudantium accusantium quos cumque inventore blanditiis tempore in sit.',
    children: [
      {
        id: 2,
        commentor: 'Shane Williamson',
        likes: 5,
        createTime: '20 Jan, 2022',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit distinctio maxime accusantium quia nam maiores deserunt eius consequuntur corrupti, perspiciatis rerum sapiente exercitationem corporis, ut laborum quas nostrum tempora quod.',
      },
    ],
  },
  {
    id: 3,
    commentor: 'Shohel Buddy',
    likes: 54,
    createTime: '20 Jan, 2022',
    content: 'Hic quaerat iste laudantium accusantium quos cumque inventore blanditiis tempore in sit.',
  },
];

export default function PostFeedback() {
  return (
    <>
      <h2 className='font-recoleta text-[24px] capitalize text-primary sm:text-[28px]'>
        Feedback
        <span className='text-secondary'>.</span>
      </h2>
      {comments && comments.length ? (
        <ul className='mt-[50px] lg:mt-[70px]'>
          {/* 一级评论 */}
          {comments.map((comment) => (
            <li key={comment.id} className='mb-[55px] flex flex-wrap last:mb-0'>
              <img className='mr-[35px] self-start rounded-[26px] border border-primary' src='/images/template/commentor/01.png' width='78' height='80' loading='lazy' alt='image' />
              <div className='flex-1'>
                <h4 className='font-recoleta mb-[5px] text-[18px] leading-none text-primary'>
                  <span className='mr-1'>{comment.commentor}</span>
                  <span className='text-[14px] text-[#494949]'>{comment.createTime}</span>
                </h4>
                <section dangerouslySetInnerHTML={{ __html: comment.content }} />
                <p className='mt-[8px] flex items-center text-sm'>
                  <a href='#' className='mr-3 inline-flex items-center hover:text-secondary'>
                    <AiFillLike />
                    <span className='ml-1'>{comment.likes}</span>
                  </a>
                  <a className='inline-block hover:text-secondary' href='#'>
                    <AiFillMessage />
                  </a>
                </p>
              </div>
              {/* 二级评论 */}
              {comment.children && (
                <ul className='mt-[50px] sm:ml-[110px] md:ml-[0px] lg:ml-[110px]'>
                  {comment.children.map((subComment) => (
                    <li key={subComment.id} className='mb-[55px] flex flex-wrap last:mb-0'>
                      <img className='mr-[35px] self-start rounded-[26px] border border-primary' src='/images/template/commentor/02.png' width='78' height='80' loading='lazy' alt='image' />
                      <div className='flex-1'>
                        <h4 className='font-recoleta mb-[5px] text-[18px] leading-none text-primary'>
                          <span className='mr-1'>{subComment.commentor}</span>
                          <span className='text-[14px] text-[#494949]'>{subComment.createTime}</span>
                        </h4>
                        <section dangerouslySetInnerHTML={{ __html: subComment.content }} />
                        <p className='mt-[8px] flex items-center text-sm'>
                          <a href='#' className='mr-[10px] inline-flex items-center hover:text-secondary'>
                            <AiFillLike />
                            <span className='ml-1'>{subComment.likes}</span>
                          </a>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className='py-4 text-center text-sm'>暂无评论～</div>
      )}
    </>
  );
}
