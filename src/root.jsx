import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'

function Root() {
  const [cookies, setCookie] = useCookies(['user'])
  const [isloggedIn, setisLoggedIn] = useState(false)

  const setLoggedIn = (user) => {
    if(user !== null){
      setCookie('user', user, { path: '/' });
      setisLoggedIn(true);
    }
    else{
      setisLoggedIn(false);
    }
  }

  return (
   <div>
      {/* {isloggedIn ? 
        <Navigate to="/login" replace={true} /> :
        console.log(cookies.user)
      } */}
      <Navigate to="/login" replace={true} />
   </div>
  )
}

export default Root
