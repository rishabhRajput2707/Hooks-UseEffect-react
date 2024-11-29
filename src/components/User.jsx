import React, { useContext } from 'react'
import Context, { UserContext } from '../context/Context'
import { Link } from 'react-router-dom';

const User = () => {
  const {users , setusers} = useContext(UserContext);
  
    return (
    <div>
      <h1 className='text-5xl mt-4 ml-[25%]'>User</h1>
      <div className='mt-5 ml-[25%]'>
        {users.map((u)=>(
          <Link key={u.id}  to={`/user/${u.id}`} className='bg-blue-300 flex items-center text-2xl mb-5 w-1/4'>{u.username}</Link>
        ))}
      </div>
    </div>
  )
}

export default User