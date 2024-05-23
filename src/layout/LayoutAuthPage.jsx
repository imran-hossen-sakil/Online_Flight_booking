
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getAuthUser } from '../../redux/features/user/authSlice'
import Loading from '../Loading'
import { formatedUser } from '../../lib/formattedUser'

const LayoutAuthPage = () => {
  const {authUser, loading, error} = useSelector(state => state?.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const {pathname} = useLocation()

  

  useEffect(() => {
    if (!authUser) {
      dispatch(getAuthUser())
    }
  }, [dispatch])

  if (authUser && !loading && pathname.includes("/dashboard")) {
    sessionStorage.setItem("user", JSON.stringify(formatedUser(authUser)))
  }


  console.log({authUser, loading, error});

  if (!loading && !authUser && error && pathname.includes("/dashboard")) {
    sessionStorage.clear()
    return navigate("/login")
  }

  
  
  return (
    loading ? <Loading /> : authUser &&
    <div>
        <Outlet />
      
    </div>
  )
}

export default LayoutAuthPage
