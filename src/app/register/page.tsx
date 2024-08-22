'use client'
import RegisterForm from '@/components/RegisterForm'
import signUpImg from '../../../public/sign-up.png'
import signInImg from '../../../public/sign-in.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Page = () => {
  const signUp = useSelector((state: RootState) => state.signUp.signUp);
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
        <div className='w-[55%]'>
            <Image 
            src={signUp ? signUpImg: signInImg}
            width={650}
            height={600}
            alt='image'
            className='mx-auto h-screen w-full object-contain '
            />
        </div>
        <div className='w-[45%] '>
            <RegisterForm/>
        </div>
    </main>
  )
}

export default Page