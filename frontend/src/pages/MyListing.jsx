import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { userDataContext } from '../context/UserContext';
import Card from '../Component/Card';


function MyListing() {
    let navigate=useNavigate()
    let {userData}= useContext(userDataContext)
    let [title,setTitle]=useState("")
    let [description,setDescription]=useState("")
    let [frontEndImage1,setFrontEndImage1]=useState(null)
    let [frontEndImage2,setFrontEndImage2]=useState(null)
    let [frontEndImage3,setFrontEndImage3]=useState(null)
    let [backEndImage1,setBackEndImage1]=useState(null)
    let [backEndImage2,setBackEndImage2]=useState(null)
    let [backEndImage3,setBackEndImage3]=useState(null)
    let [rent,setRent]=useState("")
    let [city,setCity] =useState("")
    let [landmark,setLandmark]=useState("")



  return (
    <div className='w-full min-h-screen flex items-center justify-start flex-col gap-[50px] ' >
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[20px] left-[20px] rounded-[50%] flex items-center
                justify-center' onClick={()=>navigate("/")}><FaLongArrowAltLeft className='w-[25px] h-[25px] text-[white]' />
        </div>

        <div className='w-[50%] h-[10%] border-[2px] border-[#595757] p-[15px] flex items-center justify-center text-[30px] 
        rounded-md text-[#5d2323] font-semibold mt-[20px] md:w-[600px] text-nowrap'>MY LISTING</div>

        <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]'>
            {userData.listing.map((list) => (
    <Card 
        key={list._id}
        title={list.title} 
        landmark={list.landmark} 
        city={list.city} 
        image1={list.image1} 
        image2={list.image2}
        image3={list.image3}
        rent={list.rent} 
        id={list._id} 
        isBooked={list.isBooked} 
        host={list.host}
    />
))} </div>

        


        
    </div>
  )
}

export default MyListing