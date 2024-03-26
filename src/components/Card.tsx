import Image from "next/image";

import InteractiveCard from "./InteractiveCard";
import { Icon, Rating, Typography } from "@mui/material";
import getHospital from "@/libs/getHospital";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PhoneAndroid } from "@mui/icons-material";
import { ClockIcon } from "@mui/x-date-pickers";
import Link from "next/link";
//import { Router } from "next/router";
//import { useRouter } from "next/navigation";

export default async function Card({
  hospitalName,
  onRating,
  value,
  link, 
  imgSrc,
  id
}: {
  hospitalName: string;
  onRating?: Function;
  value?: number | null;
  link: string;
  imgSrc: string;
  id: string
  //onCarSelected :Function
}) {

  const HospitalDetail = await getHospital(id);

  return (
    <InteractiveCard contentName={hospitalName} link={link}/*onCarSelected={()=>{onCarSelected}}*/>
      <div className="flex flex-row h-auto">
        <div className="w-1/5 h-auto relative rounded-t-lg">
          <Image src={imgSrc} 
                alt='Massage Shop Picture'
                fill={true}
                className='object-cover rounded-t-lg'
  />
        </div>

        <div className="w-3/5 h-auto p-[10px]">
          <div className="text-left pl-5">
            <div className="text-3xl">
              {hospitalName}
            </div>
            <div className="text-2xl my-10">
              <LocationOnIcon className="mr-5"/>
              {HospitalDetail.data.address}
            </div>
            <div className="text-2xl my-10">
              <PhoneAndroid className="mr-5"/>
              {HospitalDetail.data.tel}
            </div>
            <div className="text-2xl my-10">
              <ClockIcon className="mr-5"/>
              {HospitalDetail.data.openclose}
            </div>
          </div>
      </div>
      <Link href={`/shops/${HospitalDetail.data.id}`} className="w-1/5 h-auto bg-slate-800 rounded-xl hover:bg-slate-600">
            <div className="text-slate-100 text-4xl h-full flex items-center justify-center">
                Reserve!
            </div>
          </Link>
      </div>
    </InteractiveCard>
  );
} //

//
/*
<button className='block-h-[10%] text-sm rounded-md bg-sky-600 hover:bg-indigo' mx-2 px-1 py-1>
                Compare
            </button>
*/

/*
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

export default function Card({hospitalName, imgSrc, onRating, value} : 
{hospitalName:string, imgSrc:string, onRating:Function, value:number | null}) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>{hospitalName}</div>
            <Rating name={`${hospitalName} Rating`} value={value} 
            onChange={(e, newValue) => {onRating(hospitalName, newValue)}}
            onClick={(e)=>{e.stopPropagation();}}
            id={`${hospitalName} Rating`}
            data-testid={`${hospitalName} Rating`}/>
        </InteractiveCard>
    );
}

*/

  //const router = useRouter()
  // const compareRedeucer =(ratingList:Map<string,number>, action:{type:string; hospitalName:string;rating:number})=>{
  //     switch(action.type){
  //         case 'add':{
  //             ratingList.set(action.hospitalName,action.rating)
  //             return(new Map(ratingList))
  //             //return(ratingList)
  //         }
  //         case 'remove':{
  //             ratingList.delete(action.hospitalName);
  //             return(new Map(ratingList))
  //         }
  //         // case 'new':{
  //         //     return(new Map([
  //         //         ['Chulalongkorn Hospital', 5],
  //         //         ['Rajavithi Hospital', 5],+
  //         //         ['Thammasat University Hospital', 5],
  //         //         ]))
  //         // }
  //         default: return(ratingList)
  //     }

  //}
  // const[ratingList,ratingChange]=useReducer(compareRedeucer,new Map<string,number>([
  //     ['Chulalongkorn Hospital', 5],
  //     ['Rajavithi Hospital', 5],
  //     ['Thammasat University Hospital', 5],
  //     ]))

  // function onCarSelected(){
  //     alert("You Select    " + carName)
  // }

          {/* {
          onRating? <Rating
          name={hospitalName + " Rating"}
          id={hospitalName + " Rating"}
          data-testid={hospitalName + " Rating"}
          value={value}
          onChange={(e, newValue) => {
            onRating(hospitalName, newValue);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        /> :''
        } */}