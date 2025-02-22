import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/features/user/authSlice';
import instance from '../../axios';
import { formatedUser } from '../lib/formattedUser';


function Auth({page_type}) {
  // const authUser = useSelector(state => state?.user?.authUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const formSubmitHandler = async (ev) => {
    ev.preventDefault()


    const serverRoute = page_type === "register" ? "/register" : "/login"

    const formElement = ev.currentTarget;

    const form = new FormData(formElement)

    let formData = {}

    for (let [key, value] of form?.entries()) {
        formData[key] = value
    }

    const {email, password} = formData

    if (!email) return toast.error("Email is must be required")
    if (!password) return toast.error("Password is must be required")

  

    await instance.post(serverRoute, formData).then(({data}) => {
      dispatch(loginUser(formatedUser(data)))
      sessionStorage.setItem("user", JSON.stringify(formatedUser(data)))
      toast.success(data?.message)

      return setTimeout(() => navigate("/dashboard"), 600)
    }).catch(({response}) => {
      return toast.error(response?.data?.message)
    })
    
    
  }



  return (
    <div>

      <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
          <div className="grid gap-8">
            <div
              id="back-div"
              className="bg-gradient-to-r from-red-500 to-purple-500 rounded-[26px] m-4">
              <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                <h1 className="pt-1 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                <svg className="w-full h-20 text-center flex justify-center items-center" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	                  viewBox="0 0 511.999 511.999" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M344.186,237.247l-45.791,12.644l1.7,6.154l-3.437,0.949l-2.649-9.59l14.025-3.874c4.471-1.234,8.195-4.136,10.484-8.172
                          s2.869-8.721,1.634-13.192c-1.235-4.473-4.137-8.196-8.173-10.485c-4.035-2.287-8.721-2.868-13.193-1.633l-110.761,30.587
                          c-9.231,2.551-14.667,12.135-12.118,21.366c1.235,4.473,4.137,8.196,8.173,10.485c2.649,1.501,5.578,2.268,8.541,2.268
                          c1.552,0,3.115-0.21,4.652-0.634l57.098-15.769l3.493,12.649c-1.465,1.26-2.808,2.642-4.023,4.123l-3.315-12.012l-131.942,36.405
                          l-54.562-45.567l-0.676-2.449l20.177-5.572c4.472-1.234,8.196-4.136,10.485-8.172c2.289-4.037,2.869-8.722,1.634-13.192
                          c-2.55-9.232-12.129-14.666-21.366-12.119l-61.529,16.992c-9.231,2.551-14.667,12.135-12.118,21.366
                          c1.235,4.473,4.138,8.196,8.173,10.485c2.648,1.501,5.577,2.268,8.541,2.268c1.552,0,3.115-0.21,4.652-0.634l26.331-7.272
                          l1.972,7.142l82.473,68.876l113.698-31.399c0.197,1.63,0.515,3.265,0.965,4.895c4.075,14.757,17.519,24.459,32.135,24.459
                          c2.929,0,5.905-0.39,8.862-1.206l29.409-8.121l1.699,6.153l45.79-12.644L344.186,237.247z M17.844,247.897
                          c-0.589,0.164-1.061-0.002-1.354-0.167c-0.293-0.166-0.676-0.487-0.839-1.075c-0.262-0.948,0.296-1.932,1.244-2.193l61.533-16.993
                          c0.945-0.259,1.932,0.296,2.193,1.245c0.162,0.587-0.001,1.061-0.167,1.353c-0.166,0.293-0.488,0.676-1.076,0.84L17.844,247.897z
                          M248.83,283.448l-112.336,31.023l-3.355-2.802l117.87-32.522C250.181,280.525,249.454,281.963,248.83,283.448z M193.126,259.095
                          c-0.588,0.163-1.061-0.001-1.354-0.167c-0.293-0.166-0.676-0.487-0.839-1.075c-0.262-0.948,0.297-1.932,1.244-2.193
                          l110.761-30.587c0.171-0.048,0.333-0.066,0.482-0.066c0.366,0,0.664,0.116,0.871,0.235c0.293,0.166,0.676,0.487,0.839,1.075
                          c0.162,0.588-0.001,1.061-0.167,1.355c-0.166,0.292-0.487,0.675-1.075,0.839L193.126,259.095z M281.636,261.143l-9.589,2.648
                          l-2.648-9.59l9.589-2.648L281.636,261.143z M284.281,313.393c-9.433,2.605-19.22-2.95-21.824-12.378
                          c-2.604-9.43,2.949-19.22,12.379-21.825l29.408-8.121l9.446,34.203L284.281,313.393z M317.568,260.766l15.744-4.348l12.844,46.511
                          l-15.743,4.348L317.568,260.766z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="357.91" y="253.357" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -59.3473 107.1854)" width="15.585" height="38.302"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="290.223" y="278.419" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -66.7619 89.8408)" width="15.585" height="25.534"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="377.536" y="186.843" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -37.9598 109.2254)" width="12.768" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="359.084" y="191.934" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -39.981 104.4966)" width="12.768" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="340.621" y="197.029" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -42.0031 99.7637)" width="12.768" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="322.155" y="202.1" transform="matrix(0.9639 -0.2661 0.2661 0.9639 -44.0084 94.9958)" width="12.766" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="156.038" y="247.986" transform="matrix(0.9639 -0.2662 0.2662 0.9639 -62.2287 52.4666)" width="12.767" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M510.794,193.058c-2.862-10.366-10.62-18.702-20.752-22.3l-63.386-22.513l-281.403,77.712l-69.618-60.246l-48.452,13.382
                          l10.571,38.277l15.024-4.148l-6.422-23.256l25.389-7.011l69.618,60.246l284.708-78.626l16.349,5.807l-42.1,11.627l4.149,15.024
                          l63.562-17.554l16.796,5.965c4.788,1.701,8.564,5.41,10.385,10.094l-146.23,40.383l4.149,15.024l139.7-38.579
                          c-2.291,3.021-5.478,5.211-9.196,6.237l-111.095,30.68l4.149,15.024l111.095-30.68c8.492-2.345,15.563-7.856,19.908-15.519
                          C512.038,210.446,513.14,201.548,510.794,193.058z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="69.824" y="337.658" transform="matrix(0.9664 -0.2569 0.2569 0.9664 -83.5069 51.7234)" width="172.745" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="227.304" y="353.953" transform="matrix(0.9664 -0.2569 0.2569 0.9664 -83.5934 83.6515)" width="102.082" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="163.602" y="362.959" transform="matrix(0.9664 -0.257 0.257 0.9664 -89.1292 59.5444)" width="39.262" height="15.586"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="350.169" y="332.747" transform="matrix(0.9664 -0.257 0.257 0.9664 -75.4944 103.4527)" width="15.71" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        
                          <rect x="200.072" y="153.626" transform="matrix(0.9664 -0.2569 0.2569 0.9664 -31.4602 82.0339)" width="196.3" height="15.585"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="133.552" y="156.586" transform="matrix(0.9664 -0.257 0.257 0.9664 -36.7049 47.9173)" width="62.82" height="15.586"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="165.159" y="186.951" transform="matrix(0.9664 -0.257 0.257 0.9664 -44.2386 51.0055)" width="15.7" height="15.586"/>
                      </g>
                    </g>
                  </svg>
                </h1>
                <form onSubmit={formSubmitHandler} className="space-y-4" id='formElement'>
                  
                  <div>
                    <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
                    <input
                      id="email"
                      className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      type="email"
                      placeholder="Email"
                      name='email'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                    <input
                      id="password"
                      className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      type="password"
                      placeholder="Password"
                      name='password'
                      required
                    />
                  </div>

                  {page_type === "register" && (
                    <div>
                      <label htmlFor="conf_password" className="mb-2 dark:text-gray-400 text-lg">Confirm Password</label>
                      <input
                        id="conf_password"
                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  )}
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    {/* <span
                      className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Forget your password?
                    </span> */}
                  </a>
                  <button
                    className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    {page_type === "register" ? "Register" : "Login"}
                  </button>
                </form>
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3 className="dark:text-gray-300">
                    Don't have an account?
                    <Link to={`${page_type === "register" ? "/auth" : "/auth/register"}`}
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span
                        className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                      >
                        &nbsp; {page_type === "register" ? "LOG IN" : "SIGN UP"}
                      </span>
                    </Link>
                  </h3>
                </div>
                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
                >
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>

                </div>
                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                </div>
              </div>
            </div>
            </div>
      </div>

    </div>
  )
}

export default Auth
