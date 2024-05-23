import React from 'react'
import PartnerLogoList from '../../components/PartnerLogoList'

// page link => http://localhost:5173/about

const AboutPage = () => {
  return (
    <div>
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold  text-gray-900 mt-6 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-gray-600 italic text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem nostrum, iure suscipit sint adipisci tempora reiciendis labore quas eligendi magnam nihil natus provident nesciunt dolor et earum ratione necessitatibus doloremque culpa maiores numquam? Officia vel beatae ratione perspiciatis maxime officiis iusto temporibus nesciunt molestias facere quae unde magnam modi repellendus, aperiam qui, sit dicta voluptate praesentium odio harum deleniti voluptas magni? Eligendi, perspiciatis, similique incidunt quo ipsum fugiat corporis dolor eum fuga voluptatum minima et soluta sapiente velit iusto alias inventore architecto tempora veritatis assumenda? Itaque dignissimos quia, quaerat pariatur sed eum porro consequuntur, corrupti, doloremque dolorum ducimus repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt mollitia, ad fugit vel
                        </p>
                        {/* <div className="mt-8">
                                <a href="#" className="text-white bg-blue-700 h-8 w-8 p-2 rounded-full hover:text-gray-100 font-medium">Read More
                                <span className="ml-2">&#8594;</span></a>
                        </div> */}
                    </div>
                    <div className="mt-8 md:mt-0">
                        <img className='drop-shadow-2xl shadow-lime-900 rounded-br-4xl rounded-tl-4xl' src="https://www.ibc24.in/wp-content/uploads/2024/03/neha-singhhh.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                    </div>
                </div>
            </div>
        </section>
        <div className='mt-14'>
            <PartnerLogoList />
        </div>
    </div>
  )
}

export default AboutPage
