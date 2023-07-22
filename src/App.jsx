import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StayCard from './components/StayCard'
import { useApp } from './hooks/useApp'

const App = () => {

  const { initialStays, filteredStays } = useApp()

  return (
    <>
      <Navbar />
      <Container>
        <div className='flex items-center justify-between pt-24'>
          <h1 className='text-4xl font-bold '>Stays in finland</h1>
          <span>{filteredStays.length || initialStays.length}</span>
        </div>
        <div className='pt-4 px-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
          {filteredStays.length ? (
            filteredStays.map((stay) => (
              <StayCard
                key={stay.photo}
                data={stay}
              />
            ))
          ) : (

            initialStays.map((stay) => (
              <StayCard
                key={stay.photo}
                data={stay}
              />
            ))
          )}
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default App
