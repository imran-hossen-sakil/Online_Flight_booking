import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import countryList from "country-list-js"
import airportData from "airport-data-js"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import toast, { Toaster } from 'react-hot-toast'
import instance from '../../../axios'
import { useDispatch } from 'react-redux'
import { flight_add_by_search } from '../../redux/features/flights/flightSlice'
import { useNavigate } from 'react-router-dom'


const SearchForm = ({setLoading}) => {
  const allCountry = Object.entries(countryList?.all).map(cname => cname?.[1]);
  const dispatch = useDispatch() 
  const navigate = useNavigate()


  const [departureDate, setDepartureDate] = useState()
  const [originCity, setOriginCity] = useState([])
  const [desCity, setDesCity] = useState([])
  const [originCityCode, setOriginCityCode] = useState("")
  const [desCityCode, setDesCityCode] = useState("")
  const [passangers, setPassangers] = useState(1)


  


  const getCityCodeHandler = async (ev, city_type) => {
   


    const airData = await airportData.getAirportByCountryCode(`${ev?.target?.value || ''}`)
    if (city_type === "destination") {
      setDesCity(airData)
    }

    if (city_type === "origin") {
      setOriginCity(airData)
    }
    

    
  }



const searchFlightHandler = async (ev) => {

  ev.preventDefault()

  const formData = new FormData();
  formData.append('departureDate', departureDate);
  formData.append('originCity', originCity);
  formData.append('desCity', desCity);
  formData.append('originCityCode', originCityCode);
  formData.append('desCityCode', desCityCode);
  formData.append('passangers', passangers);



  if (!departureDate) return toast.error("Date is required");
  if (!originCityCode) return toast.error("Origin City is required");
  if (!desCityCode) return toast.error("Destination City is required");
  if (!passangers) return toast.error("Passangers City is required");

  setLoading(true)
  await instance.post("/flight/search", formData, {
    headers: {
      'Content-Type': 'application/json' 
    }
  }).then(({data}) => {

    dispatch(flight_add_by_search(data?.flights))
    setLoading(false)
    navigate(`/flight/search/${data?.token}`)

  }).catch(({response}) => {
    console.log(response?.data);
  })
  

  





}







  return (
    <form onSubmit={searchFlightHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Toaster />

      <div className='grid md:grid-cols-2 grid-cols gap-5'>

      {/* from country  */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origintination">
          From Country
        </label>
        <div className="relative">
          <select onChange={ev => getCityCodeHandler(ev, "origin")} className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Choose an option</option>
            {
              allCountry?.map((c, index) => (
                <option key={index} value={c?.iso2}>{c?.name}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>

      {/* to country */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origintination">
          To Country
        </label>
        <div className="relative">
          <select onChange={ev => getCityCodeHandler(ev, 'destination')} className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Choose an option</option>
            {
              allCountry?.map((c, index) => (
                <option key={index} value={c?.iso2}>{c?.name}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>





      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origintination">
          Origin City
        </label>
        <div className="relative">
          <select onChange={ev => setOriginCityCode(ev.target.value)} className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Choose an option</option>
            { originCity &&
              originCity?.map((c, index) => (
                <option key={index} value={c?.city_code}>{c?.city}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>


      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origintination">
          Destination City
        </label>
        <div className="relative">
          <select onChange={ev => setDesCityCode(ev.target.value)} className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Choose an option</option>
            { desCity &&
              desCity?.map((c, index) => (
                <option key={index} value={c?.city_code}>{c?.city}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>







      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
        Departure Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !departureDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={departureDate}
              onSelect={setDepartureDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>



      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
        Passangers
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="destination"
          type="number"
          placeholder="Passangers."
          value={passangers}
          onChange={ev => setPassangers(ev.target.value)}
        />
      </div>


      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search Flights
        </button>
      </div>

      </div>
    </form>
  )
}

export default SearchForm
