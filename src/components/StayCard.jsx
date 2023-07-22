/* eslint-disable react/prop-types */

import { AiFillStar } from 'react-icons/ai';

const StayCard = ({ data }) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-3 w-full'>
        <div className='aspect-square w-full overflow-hidden rounded-xl'>
          <img
            src={data.photo}
            alt={data.title}
            width={200}
            height={200}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className='group-hover:scale-105 transition-transform duration-150'
          />
        </div>
        <div className='flex flex-row gap-2 text-neutral-500 items-center'>
          {data.superHost && (
            <div className='p-1 font-semibold text-neutral-700 text-sm uppercase border-2 border-black rounded-full'>
              SUPER HOST
            </div>
          )}
          <div className='font-semibold text-sm '>
            {data.type}.
          </div>
          <div className='text-sm font-semibold'>
            {data.beds} beds
          </div>
          <div className='ml-auto flex items-center gap-1'>
            <AiFillStar size={16} className='text-yellow-500' />
            {data.rating}
          </div>
        </div>
        <div className='font-bold text-lg text-neutral-800'>
          {data.title}
        </div>
      </div>
    </div>
  )
}

export default StayCard
