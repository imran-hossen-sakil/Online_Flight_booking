import React from 'react'

const SearchFlights = () => {
  return (
    <div>
          
    <div className="max-w-screen-lg mx-auto border bg-gray-50">
      <nav className="lg:px-16 px-6 bg-slate-300 shadow-md flex flex-wrap rounded-br-full rounded-bl-full items-center lg:py-0 py-2">
          <div className="flex-1 flex justify-between items-center">
            <a href="#" className="flex text-lg font-semibold">
              <div className="mt-2 text-White"></div>
            </a>
          </div>
          <label for="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
              <ul className="text-xl text-center items-center gap-x-5 pt-6 pb-6 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                {/* <li className="pt-4 lg:py-0 ">
                  <a className="pt-4 text-black hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                    href="#">text
                  </a>
                </li>
                <li className="py-2 lg:py-0 ">
                  <a className="text-black hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                    href="#">text
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
      </nav>


      <div className="">
       <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-10">
        
        <div className="relative cursor-pointer p-6 rounded-full border-red-600 bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-medium text-gray-500 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-horizontal"><polyline points="18 8 22 12 18 16"/><polyline points="6 8 2 12 6 16"/><line x1="2" x2="22" y1="12" y2="12"/></svg>
                    <span className='cursor-pointer'>One-way</span>
                </div>
            </div>
        </div>

        <div className="relative cursor-pointer p-6 rounded-full border-red-600 bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-medium text-gray-500 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                    <span className='cursor-pointer'>Round-trip</span>
                  </div>
            </div>
        </div>

        <div className="relative  p-6 rounded-full border-red-600 bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
                 <div className="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-medium text-gray-500 dark:text-gray-200">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-webhook"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>
                    <span className='cursor-pointer'>Multi-City</span>
                </div>
            </div>
        </div>
    </div>
  </div>







        <div className="grid grid-cols-1 md:grid-cols-12">
            
        <div className="bg-gray-50 md:col-span-4 p-10 text-gray-900">
        <ul className="flex flex-col gap-2 max-w-[280px] mx-auto mt-2">

<li>
    <details className="group">

        <summary
            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span className="flex gap-2">
                <span>
                Any-flight
                </span>
            </span>
            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article className="px-4 pb-4">

            <ul className="flex flex-col gap-4 pl-2 mt-4">

                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details className="group">

        <summary
            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span className="flex gap-2">
                <span>
                2 Passengers
                </span>
            </span>
            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article className="px-4 pb-4">

            <ul className="flex flex-col gap-4 pl-2 mt-4">

                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details className="group">

        <summary
            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span className="flex gap-2">
                <span>
                Economy
                </span>
            </span>
            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article className="px-4 pb-4">

            <ul className="flex flex-col gap-4 pl-2 mt-4">

                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

<li>
    <details className="group">

        <summary
            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">

            <span className="flex gap-2">
                <span>
                Any-flight
                </span>
            </span>
            <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                </path>
            </svg>
        </summary>

        <article className="px-4 pb-4">

            <ul className="flex flex-col gap-4 pl-2 mt-4">

                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>


                <li className="flex gap-2">
                    <a href="#">
                        Text
                    </a>
                </li>
            </ul>

        </article>

    </details>
</li>

        </ul>

        </div>
        <form action="" method="post" className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-8 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500">
                    <option value="">Leaving form &#8595;</option>
                    <option value="">Afghanistan</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                    <option value="">Andorra</option>
                    <option value="">Angola</option>
                    <option value="">Antigua and Barbuda</option>
                    <option value="">Argentina</option>
                    <option value="">Armenia</option>
                    <option value="">Australia</option>
                    <option value="">Austria</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Bahamas</option>
                    <option value="">Bahrain</option>
                    <option value="">Bangladesh</option>
                    <option value="">Barbados</option>
                    <option value="">Belarus</option>
                    </select>
                </div>

                <div className="w-full md:w-1/2 px-3">
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-8 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500">
                    <option className='p-2' value="">Going to &#8595;</option>
                    <option value="">Afghanistan</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                    <option value="">Andorra</option>
                    <option value="">Angola</option>
                    <option value="">Antigua and Barbuda</option>
                    <option value="">Argentina</option>
                    <option value="">Armenia</option>
                    <option value="">Australia</option>
                    <option value="">Austria</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Bahamas</option>
                    <option value="">Bahrain</option>
                    <option value="">Bangladesh</option>
                    <option value="">Barbados</option>
                    <option value="">Belarus</option>
                </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    Departure Date <br /> <br /> <input className='bg-gray-200' type="date" name="" id="" />
                    </label>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    Destination Date <br /> <br /> <input className='bg-gray-200' type="date" name="" id="" />
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    Main destination place <br /> <br />

                    <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off"/>

                    <select id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off">
                    <option value="">Leaving form &#8595;</option>
                    <option value="">Afghanistan</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                    <option value="">Andorra</option>
                    <option value="">Angola</option>
                    <option value="">Antigua and Barbuda</option>
                    <option value="">Argentina</option>
                    <option value="">Armenia</option>
                    <option value="">Australia</option>
                    <option value="">Austria</option>
                    <option value="">Azerbaijan</option>
                    <option value="">Bahamas</option>
                    <option value="">Bahrain</option>
                    <option value="">Bangladesh</option>
                    <option value="">Barbados</option>
                    <option value="">Belarus</option>
                    </select>

                    </label>
                </div>
                <div className="w-full md:w-1/2 px-3">


                <label className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-8 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        First Name
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                
                <div className="flex justify-between w-full px-3">
                  <p></p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <button
                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-full"
                        type="submit">&#9992; Search for...
                    </button>
                    
                </div>
    
            </div>
        </form>
       </div>
      </div><br /><br />
    
    </div>
  )
}

export default SearchFlights
