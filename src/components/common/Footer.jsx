import React from 'react'
import { NavItems } from '../../lib/navigations'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">TRAVEL CARIBE</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {NavItems?.map((n, i) => (
                            <li key={i} className="mb-4">
                                <Link to={n.link} className=" hover:underline">{n.name}</Link>
                            </li>
                        ))}
             
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook </a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">TRAVEL CARIBE</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {NavItems?.map((n, i) => (
                            <li key={i} className="mb-4">
                                <Link to={n.link} className=" hover:underline">{n.name}</Link>
                            </li>
                        ))}
             
                    </ul>
                </div>
            
            </div>
       
        </div>


        <div className='py-5 border-t'>
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2028 TRAVEL CARIBE™. All Rights Reserved </span>
        </div>
    </footer>
  )
}

export default Footer
