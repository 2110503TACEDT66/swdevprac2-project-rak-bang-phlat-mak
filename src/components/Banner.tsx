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
                <h1 className="text-7xl py-8 font-serif semibold inline-block bg-gradient-to-r from-slate-400 via-slate-700 to-slate-900 text-transparent bg-clip-text drop-shadow-md">
                    Welcome to Our Massage Shop
                </h1>
                <h3 className="text-2xl font-sans text-gray-900 font-light">
                    Get started by registering and choosing the shop that you like from the bottom right button.
                </h3>
            </div>
            {
                session? 
                <div className='z-25 absolute bottom-10 left-10 m-5 font-normal text-slate-800 text-3xl'>Good to see you, {session.user?.name}!
                 </div>: null
            }
            
    <button onClick={(e)=>{e.stopPropagation(); router.push('/shops')}}

    className='bg-slate-100 text-xl text-slate-800
      font-semibold py-3 px-3 rounded-lg z-30 fixed bottom-10 right-10 shadow-[5px_12px_12px_-10px_rgba(0,0,0,0.5)] border border-slate-500
      hover:bg-slate-600 hover:text-white hover:border-tranparent'>View Shops</button>
        </div>
    )
}