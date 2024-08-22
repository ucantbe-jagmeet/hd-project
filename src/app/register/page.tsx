import RegisterForm from '@/components/RegisterForm'
import signUp from '../../../public/sign-up.png'
import signIn from '../../../public/sign-in.png'
import Image from 'next/image'


const Page = () => {

  return (
    <main className='h-screen w-screen flex items-center justify-center'>
        <div className='w-[55%]'>
            <Image 
            src={signUp}
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