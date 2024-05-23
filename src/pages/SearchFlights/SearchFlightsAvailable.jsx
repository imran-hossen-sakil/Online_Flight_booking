import React, { useEffect } from 'react'
import planeRoute from "../../assets/route-plan.png"
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchFlights } from '../../redux/features/flights/flightSlice';
import Loading from '../../components/Loading';
import { format, parseISO } from 'date-fns';
import airportData from 'airport-data-js'
// page link => http://localhost:5173/search/available


const SearchFlightsAvailable = () => {
    const {flights, loading} = useSelector(state => state?.flight)
    const dispatch = useDispatch()

    console.log(flights);
    const [searchParams] = useSearchParams();

    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const date = searchParams.get('date');
    const pessanger = searchParams.get('pessanger');

    
    useEffect(() => {
        dispatch(getSearchFlights({from, to, date, pessanger}))
    }, [dispatch])


    const parseDuration = (duration) => {
        const match = duration?.match(/P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match) {
            throw new Error('Invalid duration format');
        }
    
        const days = match[1] ? parseInt(match[1]) : 0;
        const hours = match[2] ? parseInt(match[2]) : 0;
        const minutes = match[3] ? parseInt(match[3]) : 0;
    
        return `${days > 0 ? days + " days " : ""}${hours > 0 ? hours + " hours " : ""}${minutes > 0 ? minutes + " minutes" : ""}`;
    };


    const formatDate = (dateString) => {
        return format(parseISO(dateString), 'yyyy-MM-dd, hh:mm a').split(",")[0];
    };

    const formatTime = (dateString) => {
        return format(parseISO(dateString), 'yyyy-MM-dd, hh:mm a').split(',')[1];
    };
      


  return (
    loading ? <Loading /> :
    <div>
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-start items-start w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6   
                    xl:p-8 flex-col">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Price Range</h3>
                    <div className="flex mt-2 justify-between w-full">
                        <div>$ : <span>0</span></div>
                        <div>$ : <span>10000</span></div>
                    </div>
                    <input id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"/>
                    <hr className='' />
                    <h3 className="text-xl dark:text-white font-semibold leading-5 mt-4 text-gray-800">Airlines</h3>

                    <div className='w-full flex items-center justify-between mt-4'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Emirates Airline    
                        </div>  
                        <span className=''> (02)</span>
                      
                    </div>


                    
                    <div className='w-full flex items-center justify-between mt-4'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Qatar Airways    
                        </div>  
                        <span className=''> (04)</span>
                      
                    </div>


                    <div className='w-full flex items-center justify-between mt-4'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Saudi Arabia Airline    
                        </div>  
                        <span className=''> (06)</span>
                      
                    </div>

                    <select className='mt-12 text-indigo-950' name="" id="">
                        <option value="">Show all Airlines</option>
                    </select>
                    <div className='w-full flex items-center justify-between mt-4'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Saudi Arabian Airlines    
                        </div>  
                        <span className=''> (06)</span>
                      
                    </div>
                    <div className='w-full flex items-center justify-between mt-6'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Air Asia    
                        </div>  
                        <span className=''> (08)</span>
                      
                    </div>
                    <div className='w-full flex items-center justify-between mt-6'>
                        <div>
                            <input className='' type="radio" name="" id="" /> Noakhali    
                        </div>  
                        <span className=''> (10)</span>
                      
                    </div>
                
                    <p><input className='mt-6' type="radio" name="" id="" /> Emirates Airline <span className=''>(08)</span></p>
                </div>



                <div className="w-full flex flex-col gap-3">


                    {flights?.map((f, i) => (
                        <>
                            
                                <div className="bg-gray-100 shadow-md rounded-md p-6">
                                    {f?.segments.map((segment, segIndex) => (
                                        <>
                                            <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
                                                <div className="flex flex-col items-start md:gap-2 gap-5">
                                                        {/* <img className='w-20 h-20 object-cover rounded-full' src="https://qph.cf2.quoracdn.net/main-qimg-54cc7a9d7bbf2edc5b83731bef7ced55-lq" alt="" /> */}
                                                    <div className='md:text-start text-center'>
                                                        <h5 className="text-2xl font-semibold text=gray-700">{segment?.destination?.name}</h5>
                                                        <h6 className="text-gray-500 text-xl">{segment?.aircraft?.name}</h6>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-between items-center gap-3">
                                                    <div className="text-center">
                                                        <h5 className="text-2xl font-bold">{formatTime(segment?.departing_at || segment?.departure?.at)}</h5>
                                                        <h5 className="text-gray-600 text-xl">{segment?.origin?.iata_code}</h5>
                                                        <h5 className="text-gray-800 font-semibold">{formatDate(segment?.departing_at || segment?.departure?.at)}</h5>
                                                    </div>
                                                    <div className="flex flex-row justify-between items-center gap-3">
                                                        <span className="text-gray-700">From</span>
                                                        <div className="flex flex-col gap-3 items-center">
                                                            <h5 className="text-gray-800 fontbol">{parseDuration(segment?.duration)}</h5>
                                                            <img src={planeRoute} alt="" />
                                                            {/* <h6 className="">1 Stop</h6> */}
                                                        </div>
                                                        <span className="text-gray-700">To</span>
                                                    </div>
                                                    <div className="text-center">
                                                        <h5 className="text-2xl font-bold">{formatTime(segment?.arriving_at || segment?.arrival?.at)}</h5>
                                                        <h5 className="text-gray-600 text-xl">{segment?.destination?.iata_code}</h5>
                                                        <h5 className="text-gray-800 font-semibold">{formatDate(segment?.arriving_at || segment?.arrival?.at)}</h5>
                                                    </div>
                                                </div>
                                                {/* <div className="md:text-start text-center md:mb-0 mb-3"> 
                                                    <div className="mb-4">
                                                        <h5 className="text-2xl font-bold">{f?.total_price?.toFixed(2)} {f?.currency}</h5>
                                                        <h6 className="text-gray-600 text-xl">Price</h6>
                                                    </div>
                                                    <a href="#" className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Book Now</a>
                                                </div> */}
                                            </div>
                                            <hr className="my-4" />
                                            {/* <div className="flex items-center justify-between">
                                                <h5 className="text-gray-800 font-semibold">Departure: {formatDate(segment?.departing_at || segment?.departure?.at)}</h5>
                                                <h5 className="text-gray-800 font-semibold">Arrival:  {formatDate(segment?.arriving_at || segment?.arrival?.at)}</h5>
                                            </div> */}
                                        </>
                                    ))}


                                    <div className="md:text-end text-center md:mb-0 mb-3"> 
                                        <div className="mb-4">
                                            <h5 className="text-2xl font-bold">{f?.total_price?.toFixed(2)} {f?.currency}</h5>
                                            <h6 className="text-gray-600 text-xl">Price</h6>
                                        </div>
                                        <a href="#" className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Book Now</a>


                                        <a href="#" className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Details</a>
                                    </div>


                                    
                                </div>


                            
                        </>
                    ))}





                    
            
                </div>

            </div>

            
        </div>
    </div>
  )
}

export default SearchFlightsAvailable
