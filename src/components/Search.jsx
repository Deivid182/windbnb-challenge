import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className='border-x-[1px] md:w-auto py-2 w-full rounded-full shadow-sm transition-shadow cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='font-semibold text-sm px-6'>Helsinki, Finland</div>
        <div className='border-x-[1px] text-sm font-semibold text-center px-6 '>
          Add guests
        </div>
        <div className='px-6'>
          <BiSearch size={16} />
        </div>
      </div>
    </div>
  )
}

export default Search
