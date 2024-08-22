import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { Button } from 'antd';
import { clearUser } from '@/redux/UserSlice/userSlice';

const UserProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  if (!user.email) {
    return <div className='flex items-center flex-col mt-20'>
        <p>No user is currently logged in.</p>
        <a href='/register'>Go back</a>
    </div>;
  }

  return (
    <div className='flex items-center flex-col mt-20'>
      <h1>Welcome, {user.firstName} {user.lastName}!</h1>
      <p>Email: {user.email}</p>
      <p>Contact Mode: {user.contactMode}</p>
     <Button type="primary" onClick={() => dispatch((clearUser()))}  className={`w-[10rem] text-xl py-5 bg-white  border-2 text-[#3A244A] border-[#3A244A] mt-5`}>
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
