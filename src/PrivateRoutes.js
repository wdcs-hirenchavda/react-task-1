import { useContext, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { dataContext } from './component2/Context'

 const PrivateRoutes = ()=> {
    const {loginData} = useContext(dataContext)

    const navigate = useNavigate();

    useEffect(() => {
      // console.log("window.location", loginData, Object.keys(loginData).length === 0, window.location.pathname)
      if(Object.keys(loginData).length === 0 && window.location.pathname !== 'login') {
        navigate('/login');
      }
    }, [window.location.pathname, loginData])

    let auth = {'token':loginData.id}
  return (
      auth.token ? <Outlet/> : <Navigate to='/login'></Navigate>
  )
}

export default PrivateRoutes
