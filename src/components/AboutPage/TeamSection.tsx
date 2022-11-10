import { FaTiktok, FaWeibo, FaZhihu } from 'react-icons/fa';

interface TeamMember {
  id: number | string;
  type: string;
  title: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className='group mb-[30px] text-center'>
    <div className='relative rounded-[6px_6px_0px_0px]'>
      <a href='#' className="relative block before:absolute before:inset-x-0 before:bottom-0 before:z-[-1] before:h-[calc(100%_-_60px)] before:w-full before:rounded-[6px_6px_0px_0px] before:bg-[#F5F9F8] before:content-['']">
        <img src={`/images/template/team/person${member.id}.png`} className='mx-auto block h-auto w-auto' loading='lazy' width='215' height='310' alt={member.title} />
      </a>
    </div>

    <div
      className='relative z-[1] rounded-[0px_0px_6px_6px] border-b-[6px] border-primary bg-[#FFFDFC] px-[15px] py-[20px] drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] 
      before:absolute before:left-0 before:bottom-0 before:z-[-1] before:h-0 before:w-full before:bg-primary before:transition-all before:duration-300 group-hover:border-secondary group-hover:before:h-full'
    >
      <h3>
        <a href='#' className='font-recoleta text-base font-normal text-primary group-hover:text-white'>
          {member.title}
        </a>
      </h3>
      <p className='mt-[5px] text-[14px] font-normal capitalize leading-none group-hover:text-white'>{member.type}</p>
      <ul className='absolute top-[-15px] left-0 inline-flex w-full items-center justify-center overflow-hidden'>
        <li className='ml-[15px] translate-y-[30px] transition delay-300 duration-300 ease-in-out first:ml-0 group-hover:translate-y-[0]'>
          <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
            <FaTiktok />
          </a>
        </li>
        <li className='ml-[15px] translate-y-[30px] transition delay-300 duration-500 ease-in-out group-hover:translate-y-[0]'>
          <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
            <FaWeibo />
          </a>
        </li>
        <li className='ml-[15px] translate-y-[30px] transition delay-300 duration-700 ease-in-out group-hover:translate-y-[0]'>
          <a href='#' className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFF6F0] text-[#494949] transition-all hover:text-[#3B5998] hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)]'>
            <FaZhihu />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default function TeamSection() {
  const teams: TeamMember[] = [
    {
      id: '1',
      type: 'Real Estate Agent',
      title: 'Albert S. Smith',
    },
    {
      id: '2',
      type: 'Real Estate Broker',
      title: 'Amelia Margaret',
    },

    {
      id: '3',
      type: 'Real Estate Agent',
      title: 'Stephen Kelvin',
    },
    {
      id: '4',
      type: 'Real Estate Broker',
      title: ' Michael Richard',
    },
  ];

  return (
    <section className='team-section overflow-hidden py-[80px] lg:py-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <div className='mb-[30px] text-center lg:mb-[60px]'>
              <span className='text-tiny mb-2 inline-block text-secondary'>Our Agents</span>
              <h2 className='font-recoleta text-[24px] capitalize text-primary sm:text-[30px] xl:text-[36px]'>
                Here is our Experts<span className='text-secondary'>.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className='mb-[-30px] grid gap-x-[30px] sm:grid-cols-2 lg:grid-cols-4'>
          {teams.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
