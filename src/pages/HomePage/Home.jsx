import React, { useEffect, useState } from 'react'
import homePlane from "../../assets/plane.png" 
import homeMap from "../../assets/map.png" 
import { Input } from '../../components/ui/input';
import "./Home.css"
import airports  from "airport-codes"

import SearchFilterInput from '../../components/SearchFilterInput'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import countryList from 'country-list-js'
import airportData from 'airport-data-js'
import PartnerLogoList from '../../components/PartnerLogoList';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const countries = Object.entries(countryList.all)
  const [myCounty, setCountry] = useState([...countries])

  console.log(airports.findWhere({ iata: 'USA' }));

  const [origin, setOrigin] = useState([])
  const [destination, setDestination] = useState([])


  // from, to, date, pessanger Data
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [pessanger, setPessanger] = useState('')

  const navigate = useNavigate()



  const originHandler = async (originValue) => {
    const getCityName = []
    const getAirPortsList = await airportData.getAirportByCountryCode(originValue[0])
    getAirPortsList?.filter(c => c?.city_code?.length > 0 && getCityName.push(c?.city_code))

    setOrigin(getCityName)
  }

  const destinationHandler = async (destinationValue) => {
    const getCityName = []
    const getAirPortsList = await airportData.getAirportByCountryCode(destinationValue[0])
    getAirPortsList?.filter(c => c?.city_code?.length > 0 && getCityName.push(c?.city_code))
    
    setDestination(getCityName)
  }

  const originInputHandler = value => {
    setFrom(value)
  }

  const destinationInputHandler = value => {
    setTo(value)
  }

  const homeSearchHandler = e => {
    e.preventDefault()


    if (!from) return toast.error("Field is required");
    if (!to) return toast.error("Field is required");
    if (!date) return toast.error("Field is required");


    navigate(`/flight/search/q?from=${from}&to=${to}&date=${date}&pessanger=${pessanger}`)


  }
  

  return (
    <div>
      <Toaster />
      <section className="bg-white dark:bg-gray-900 bg-contain min-h-screen bg-center bg-no-repeat" style={{backgroundImage: `url('${homePlane}')`}}>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-44">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white text-[#006cb9]">Book Your Dream Flights Now!</h1>
                <p className="max-w-2xl mb-6 font-light text-[#1e2124] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Enhancing the flight search and booking experience, offering a wide range of travel options through cross-GDS integration, improving user satisfaction with an intuitive and responsive design, and providing robust and scalable solutions for future growth. This positions the platform as a competitive player in the travel booking industry.</p>


                <a href="x" 
                  className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-200 bg-[#0056a6] border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Book Now
                </a>


         
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <form method='GET' onSubmit={homeSearchHandler} className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white/40 shadow-md border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Search Flights</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-4">Search your best flight and share your Opinion</p>



              
                    <div className='flex gap-2 mb-4'>
                        <Select onValueChange={originHandler}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select a origin Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Origin Country</SelectLabel>
                              {myCounty?.map((c, i) => <SelectItem key={i} value={c}>{c?.[1]?.name}</SelectItem>)}
                             
                            </SelectGroup>
                          </SelectContent>
                        </Select>


                        <Select onValueChange={destinationHandler}>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select a destination Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Destination Country</SelectLabel>
                              {myCounty?.map((c, i) => <SelectItem key={i} value={c}>{c?.[1]?.name}</SelectItem>)}
                             
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                   



                    <div className='flex gap-2 mb-4'>
                      <div className='w-full'>
                        <SearchFilterInput onChangeHandler={originInputHandler} options={origin ? origin : []} placeholder='Origin' />
                      </div>

                      <div className='w-full'>
                        <SearchFilterInput onChangeHandler={destinationInputHandler} options={destination ? destination : []} placeholder='Destination' />
                      </div>



                    </div>

                    <div className='mb-4'>
                      <Input
                        onChange={e => setPessanger(e?.target?.value)}
                        value={pessanger}
                        type="number"
                  
                        placeholder="Pessanger"
                      />
                    </div>



                    <div className="mb-4">
               
  
                        <input
                          onChange={e => setDate(e?.target?.value)}
                          type="date"
                          id="date"
                          value={date}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
         
                    </div>


           
              
                    
                    <button type='submit' className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Search Now</button>
                </form>
            </div>                
        </div>
      </section>


      {/* Partner */}
      <PartnerLogoList />




      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
     
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Enhanced Flight Search Capabilities</h2>
                    <p className="mb-8 font-light lg:text-xl">This ensures that customers can find the most suitable flights by combining options from multiple sources.</p>
        
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Improved User Experience</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Optimized Connection Times</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Streamlined Booking Process</span>
                        </li>
                    </ul>
                    <p className="mb-8 font-light lg:text-xl">Users can easily find and select the cities they want to travel to and from, improving the overall user experience.</p>
                </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={homeMap} alt="map image"/>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Home
