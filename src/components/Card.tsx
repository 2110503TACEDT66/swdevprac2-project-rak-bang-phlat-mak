import Image from "next/image";

import InteractiveCard from "./InteractiveCard";
import { Rating, Typography } from "@mui/material";
//import { Router } from "next/router";
//import { useRouter } from "next/navigation";


//export default function ProductCard({hospitalName,imgSrc,onCompare}:{hospitalName:string,imgSrc:string,onCompare:Function}){
export default function Card({
  hospitalName,
  onRating,
  value,
  link, //onCarSelected
  //imgSrc
}: {
  hospitalName: string;
  onRating?: Function;
  value?: number | null;
  link: string;
  //imgSrc: string;
  //onCarSelected :Function
}) {
  //const router = useRouter()
  function onCarSelected(){
    //router.push(link)
    
  }
  
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

  return (
    <InteractiveCard contentName={hospitalName} link={link} /*onCarSelected={()=>{onCarSelected}}*/>
      <div className="flex flex-row h-full">
        <div className="w-1/4 h-full relative rounded-t-lg">
          {/*<Image src={imgSrc} 
                alt='Massage Shop Picture'
                fill={true}
                className='object-cover rounded-t-lg'
  />*/}
        </div>

      <div className="w-3/4 h-full p-[10px]">
        <div className="text-left pl-5">
        <div className="text-2xl ">
          {hospitalName}
        </div>
        </div>
        
        
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
        
      </div>
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
