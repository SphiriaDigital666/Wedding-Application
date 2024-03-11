'use client'
import Image from 'next/image';
import { FC } from 'react'
import { MdBrightness1, MdOutlineClose, MdOutlineDone } from 'react-icons/md';
import ProfilePic02 from '@/public/allMatches/profile-pic02.png';
import { UserProfile } from '@prisma/client';
import { useRouter } from 'next/navigation';


interface MatchCardProps {
  match: UserProfile
}

export const MatchCard: FC<MatchCardProps> = ({match}) => {
  const router = useRouter()
  return (
    <section className='mb-3 hover:cursor-pointer' onClick={()=>router.push(`/profile/${match.id}`)}>
      <div className='flex items-center gap-6 border border-[#5bace3] rounded-md p-4'>
        <Image
          src={match.profileImage || ProfilePic02}
          alt='Main Image'
          width={200}
          height={200}
          className='rounded-lg'
        />
        <div>
          <p className='font-bold text-[16px] text-[#000]'>{match.name}</p>
          <div className='flex gap-2 text-[14px] text-[#b1afaf]'>
            <p>M9658480</p>
            <p>|</p>
            <p>Last seen an hour ago</p>
          </div>
          <div className='flex gap-4 items-center text-[14px] text-[#141414]'>
            <p>30 yrs</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
            <p>5&apos; 9&apos;</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
            <p>Chettiar</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
            <p>Software Engineering</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
          </div>
          <div className='flex gap-2 items-center mb-8'>
            <p>Fashion Designer</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
            <p>Ts. 9 Lakhs</p>
            <MdBrightness1 className='text-[#b1afaf] text-[6px]' />
            <p>Chennai</p>
          </div>
          <p>Interested in {match.gender === 'male' ? 'him' : 'her'}?</p>
          <p>Connect Now</p>
          <div className='flex items-center gap-3 mt-1'>
            <div className='flex items-center justify-center gap-1 border border-[#b1afaf] text-[#b1afaf] text-[14px] w-max rounded-full py-[3px] px-3'>
              <MdOutlineClose />
              <p>Don&apos;t Show</p>
            </div>

            <div className='flex items-center gap-1 border bg-[#5bace3] border-[#5bace3] text-[#fff] text-[14px] w-max rounded-full py-[3px] px-3'>
              <MdOutlineDone />
              <p>Send Interest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
