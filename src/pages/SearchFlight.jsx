import React, { useEffect, useState } from 'react'
import FlightList from '../components/landing/FlightList'
import { useDispatch, useSelector } from 'react-redux'
import instance from '../../axios'
import { flight_add_by_search } from '../redux/features/flights/flightSlice'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const SearchFlight = () => {
    const {flights} = useSelector(state => state?.flight)
    const dispatch = useDispatch()
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    
    const [currentPage, setCurrentPage] = useState(1);
    const flightsPerPage = 10;

    const indexOfLastFlight = currentPage * flightsPerPage;
    const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
    const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            await instance.get(`/flight/search/${id}`).then(({data}) => {
                dispatch(flight_add_by_search(data?.flights))
                setLoading(false)
            })
        }

        if (flights?.length <= 0 || undefined) {
            fetchData()
        }
    }, [dispatch])


  

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };


  return (
    <div>
        {loading ? <Loading /> : currentFlights?.map((flight, index) => (<FlightList flight={flight} key={index} />))}

        <div className='flex items-center justify-center gap-3 pb-5'>
        {Array.from({ length: Math.ceil(flights.length / flightsPerPage) }, (_, index) => (
          <button className={`px-3 py-1 ${(index+1) === currentPage && 'bg-indigo-500 text-white'} text-md`} key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFlight
