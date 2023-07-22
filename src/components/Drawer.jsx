/* eslint-disable react/prop-types */
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useApp } from '../hooks/useApp'
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiSearch } from 'react-icons/bi'

const options = [
  {
    id: 1,
    city: 'Helsinki',
  },
  {
    id: 2,
    city: 'Turku',
  },
  {
    id: 3,
    city: 'Vaasa',
  },
  {
    id: 4,
    city: 'Oulu',
  }
]

const Drawer = ({ isOpen, onClose }) => {

  const { filterKey,
    setFilterKey,
    increaseAdultCount,
    decreaseAdultCount,
    increaseChildrenCount,
    decreaseChildrenCount,
    adultCount,
    childrenCount,
    setFilterReady
  } = useApp()

  const onSelectFilterKey = (key) => {
    setFilterKey({ city: key, maxGuests: totalCount })
    console.log(filterKey)
  }

  if (!isOpen) {
    return null
  }

  const totalCount = adultCount + childrenCount

  return (
    <div
      className="fixed h-full w-full z-50 left-0 top-0 transition"
    >
      <div className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]" />

      <div className="fixed h-auto w-full top-0 bg-white shadow-lg p-4 ">
        <AiOutlineClose size={24} onClick={onClose} className='cursor-pointer absolute top-2 right-2' />
        <div className='flex flex-row gap-0.5 justify-between mt-6'>
          <div className='flex flex-col gap-y-2 flex-1'>
            <div className='px-4 py-2 shadow-md flex flex-col gap-y-2 bg-white rounded-md'>
              <h3 className='font-bold text-sm'>Location</h3>
              <span className='text-xs font-medium text-neutral-600'>{filterKey.city ? filterKey.city : 'Helsinki, Finland'}</span>
            </div>
            <ul className='px-2 space-y-2 mt-6'>
              {options.map((option) => (
                <li
                  onClick={() => onSelectFilterKey(option.city)}
                  className='flex flex-row gap-x-2 cursor-pointer'
                  key={option.id}
                >
                  <FaMapMarkerAlt size={16} className='text-red-600' />
                  {option.city}, Finland
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-y-2 flex-1'>
            <div className='px-4 py-2 shadow-md flex flex-col gap-y-2 bg-white rounded-md'>
              <h3 className='font-bold text-sm'>Guests</h3>
              <span className='text-xs font-medium text-neutral-600'>{totalCount} guests</span>
            </div>
            <div className='flex flex-col gap-y-4'>
              <h3 className='font-bold text-sm'>Adult</h3>
              <p className='text-xs font-medium text-neutral-600'>Ages 13 or above</p>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  onClick={() => increaseAdultCount()}
                  className='p-1 rounded-full border-[1px] border-black'>
                  <AiOutlinePlus />
                </button>
                <span>{adultCount}</span>
                <button
                  onClick={() => decreaseAdultCount()}
                  className='p-1 rounded-full border-[1px] border-black'>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <h3 className='font-bold text-sm'>Children</h3>
              <p className='text-xs font-medium text-neutral-600'>Ages 2 -12 </p>
              <div className='flex flex-row items-center gap-x-2'>
                <button
                  onClick={() => increaseChildrenCount()}
                  className='p-1 rounded-full border-[1px] border-black'>
                  <AiOutlinePlus />
                </button>
                <span>{childrenCount}</span>
                <button
                  onClick={() => decreaseChildrenCount()}
                  className='p-1 rounded-full border-[1px] border-black'>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
          <div className='px-4 py-2 shadow-md flex h-[60px] gap-y-2 bg-white rounded-md'>
            <div className='group p-2 rounded-full bg-red-500 text-white'>
              <div
                className='group-hover:cursor-pointer flex flex-row items-center gap-x-2'
                onClick={() => {
                  onClose()
                  setFilterReady(true)
                }}
              >
                <BiSearch className='text-white' size={20} />
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
