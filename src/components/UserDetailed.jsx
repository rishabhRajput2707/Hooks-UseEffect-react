import React, { useContext } from 'react'
import { UserContext } from '../context/Context';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetailed = () => {
  const navigate = useNavigate()
   const {id} = useParams();
   const {users} = useContext(UserContext);
   console.log(users[id]);
   
  return (
    <div>
      <h1 className=' mb-2 text-bold text-4xl text-red-300'>{users[id].username}</h1>
      <h1 className='mb-2 text-2xl text-red-200' >{users[id].city}</h1>
      <button onClick={()=>navigate(-1)} className='px-3 py-2 bg-red-300 rounded-full'>go back</button>
    </div>
  )
}

export default UserDetailed