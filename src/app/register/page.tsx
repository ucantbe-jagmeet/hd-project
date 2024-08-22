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
    <main className='h-screen w-screen flex items-center justify-center flex-col md:flex-row'>
        <div className='md:w-[55%] w-[90%] '>
            <Image 
            src={signUp ? signUpImg: signInImg}
            width={650}
            height={600}
            alt='image'
            className='mx-auto w-52 md:h-screen md:w-full object-contain  '
            />
        </div>
        <div className='md:w-[45%] w-[90%] '>
            <RegisterForm/>
        </div>
    </main>
  )
}

export default Page