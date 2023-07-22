/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { stays } from '../data/stays';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [initialStays, setInitialStays] = useState([])
  const [filterKey, setFilterKey] = useState({})
  const [filteredStays, setFilteredStays] = useState([])
  const [adultCount, setAdultCount] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)
  const [filterReady, setFilterReady] = useState(false)

  useEffect(() => {
    if (!stays) {
      return null
    }
    try {
      setInitialStays(stays)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (filterKey) {
      const { city, maxGuests } = filterKey
      if (filterReady) {
        if (maxGuests && city) {
          setFilteredStays(initialStays.filter((stay) => stay.city === city && stay.maxGuests <= maxGuests))
        } else {
          alert('Please select city and guests')
        }
      }
      setFilterReady(false)
    }
  }, [filterKey, initialStays, filterReady])

  const increaseAdultCount = () => {
    setAdultCount(adultCount + 1)
  }

  const decreaseAdultCount = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1)
    }
  }

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1)
  }

  const decreaseChildrenCount = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1)
    }
  }

  return (
    <AppContext.Provider
      value={{
        initialStays,
        filteredStays,
        setFilteredStays,
        filterKey,
        setFilterKey,
        increaseAdultCount,
        decreaseAdultCount,
        increaseChildrenCount,
        decreaseChildrenCount,
        adultCount,
        childrenCount,
        filterReady,
        setFilterReady
      }}
    >
      {children}
    </AppContext.Provider>
  )
}