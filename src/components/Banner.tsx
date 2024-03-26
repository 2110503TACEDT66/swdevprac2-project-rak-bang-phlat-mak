'use client'
import { useSession } from 'next-auth/react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
//import
export default function Banner(){
    const router = useRouter()
    const [index , setIndex] = useState(0)
    const {data:session} = useSession()

    console.log(session?.user)
    
    return(
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            
            <Image src='/img/massage.jpg' alt='cover' fill={true}
            priority 
            style={{objectFit:'cover'}}
            className="blur-md"
            />
            
            <div className={styles.bannerText}>
                <h1 className="text-7xl font-mono py-8 font-semibold inline-block bg-gradient-to-r from-slate-400 via-slate-700 to-slate-900 text-transparent bg-clip-text drop-shadow-md">
                    Welcome to Our Massage Shop
                </h1>
                <h3 className="text-2xl font-sans text-gray-900">
                    Get started by registering and choosing the shop that you like from the bottom right button.
                </h3>
            </div>
            {
                session? 
                <div className='z-25 absolute top-10 right-10 font-semibold text-slate-800 text-3xl'>Welcome, {session.user?.name}!
                 </div>: null
            }
            
    <button onClick={(e)=>{e.stopPropagation(); router.push('/shops')}}

    className='bg-slate-100 text-xl text-slate-800
      font-semibold py-3 px-3 rounded-lg z-30 fixed bottom-10 right-10 shadow-xl
      hover:bg-slate-600 hover:text-white hover:border-tranparent'>View Shops</button>
        </div>
    )
}