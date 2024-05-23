import { Plane } from 'lucide-react'
import React from 'react'
import airportData from "airport-data-js"


const FlightList = ({flight}) => {
    console.log(flight);

  return (
    <div className="p-10 pt-3">
    <div className="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
        <div className="flex flex-row justify-between">

    <div className='flex flex-row items-baseline flex-nowrap bg-gray-100 p-2'>
    <h1 className="ml-2 uppercase font-bold text-gray-500">departure date</h1>
        <p className="ml-2 font-normal text-gray-500">{new Date(flight?.itineraries[0]?.segments[0]?.departure?.at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })}
        </p>

        <p className="font-bold ml-4">
            {new Date(flight.itineraries[0]?.segments[0]?.departure?.at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }) || 'N/A'}
        </p>
    </div>

    <div className='flex flex-row items-baseline flex-nowrap bg-gray-100 p-2'>
    <h1 className="ml-2 uppercase font-bold text-gray-500">Arrival date</h1>
        <p className="ml-2 font-normal text-gray-500">{new Date(flight?.itineraries[0]?.segments[0]?.arrival?.at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })}
        </p>

        <p className="font-bold ml-4">
            {new Date(flight.itineraries[0]?.segments[0]?.arrival?.at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }) || 'N/A'}
        </p>
    </div>
        </div>
        <div className="mt-2 flex justify-start bg-white p-2">
        {/* <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
        </div> */}
        </div>
        <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">

        {flight?.itineraries[0]?.segments?.map((fl, index) => (
        <div key={index} className="flex flex-row place-items-center p-2">
            <Plane />
            <div className="flex flex-col ml-2">
                <p className="text-xs text-gray-500 font-bold">Qatar Airways</p>
                <p className="text-xs text-gray-500">{fl?.departure?.iataCode}</p>
                <p className="text-xs text-gray-500 font-bold">{flight.itineraries[0]?.segments[0]?.carrierCode || 'N/A'}</p>
            <div className="text-xs text-gray-500">2*23kg</div>
            </div>
        </div>
        ))}

   

        </div>
        <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-center">
        <div>
            <p className='ml-5 font-bold text-md'>Available Seats: {flight?.numberOfBookableSeats}</p>
        </div>

        <div className="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">

            <div className="text-sm mx-2 flex flex-col">
            <p>Ticket</p>
            <p className="font-bold">{`${flight.price.total} ${flight.price.currency}`}</p>
            <p className="text-xs text-gray-500">total price</p>
            </div>
            <button className="w-32 h-11 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"><div className="">Book</div></button>

            <button className="w-32 h-11 rounded flex border-solid border text-white bg-yellow-800 mx-2 justify-center place-items-center"><div className="">View</div></button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default FlightList
