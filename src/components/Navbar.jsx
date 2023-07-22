import { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import Search from './Search'
import Drawer from './Drawer'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className='fixed bg-white z-10 w-full shadow-sm'>
        <div className='py-4 border-b-[1px]'>
          <Container>
            <div className='flex items-center justify-between gap-3 md:gap-0'>
              <Logo />
              <div
                onClick={() => setIsOpen(true)}
              >
                <Search />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Navbar
