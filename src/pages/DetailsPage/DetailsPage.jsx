import React from 'react'

function DetailsPage() {
  return (
    <div>
        <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
            <h1 className="font-bold text-2xl my-4 text-center text-blue-600">TRAVEL CARIBE</h1>
            <hr className="mb-2" />
            <div className="mb-6">
                <h1 className="text-lg text-center">IGrantley Adams International Airport</h1>
                <h1 className="text-lg text-center">Boeing 777-300</h1>
            </div>
            <table className="w-full mb-8">
                <thead>
                    <tr>
                        <th className="text-left font-bold text-gray-700">Time :</th>
                        <th className="text-right font-bold text-gray-700">11:13 PM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-left text-gray-700">BRU</td>
                        <td className="text-right text-gray-700">Lorem, ipsum.</td>
                    </tr>
                    <tr>
                        <td className="text-left text-gray-700">Date :</td>
                        <td className="text-right text-gray-700">2024-05-31</td>
                    </tr>
                </tbody>
            </table>
            <hr className="my-4" />
            <table className="w-full mb-8">
                <tbody>
                    <tr>
                        <td className="text-left text-gray-700">Journey time : </td>
                        <td className="text-right text-gray-700">10 hours</td>
                    </tr>
                    <tr>
                        <td className="text-left text-gray-700">From :</td>
                        <td className="text-right text-gray-700">Lorem, ipsum dolor.</td>
                    </tr>
                    <tr>
                        <td className="text-left text-gray-700">To :</td>
                        <td className="text-right text-gray-700">Lorem, ipsum dolor.</td>
                    </tr>
                </tbody>
            </table>
            <hr className="my-4" />
            <table className="w-full mb-8">
                <thead>
                    <tr>
                        <th className="text-left font-bold text-gray-700">Time :</th>
                        <th className="text-right font-bold text-gray-700">03:13 AM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-left text-gray-700">BRU</td>
                        <td className="text-right text-gray-700">Lorem, ipsum.</td>
                    </tr>
                    <tr>
                        <td className="text-left text-gray-700">Date :</td>
                        <td className="text-right text-gray-700">2024-06-01</td>
                    </tr>
                </tbody>
            </table>
            <hr className="my-4" />
            <div className="text-right font-bold text-gray-700">326.55 <span>EUR</span></div>
            <div className="text-right font-bold text-gray-700 mb-6">Price</div>
            <div className="text-center text-gray-700 mb-2">Thank you for your Travel</div>
        
        </div>
    </div>
  )
}

export default DetailsPage
