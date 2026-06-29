import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/UserContext'
import { listingDataContext } from '../context/ListingContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { bookingDataContext } from '../context/BookingContext'

function Card({ title,landmark,image1,image2,image3,rent,city,id,ratings,isBooked,host,guest}) {
  let navigate= useNavigate()
  let {userData}=useContext(userDataContext)
  let {handleViewCard}=useContext(listingDataContext)
  let [popUp,setPopUp]=useState(false)
  let {cancelBooking}=useContext(bookingDataContext)
  const handleClick=()=>{
    if(userData){
      handleViewCard(id)
    }
    else{
      navigate("/login")

    }
  }
  return (
    <div className='w-full sm:w-[330px]  max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer relative z-[10] ' 
    onClick={()=>!isBooked?handleClick():null}>
      {isBooked && userData && guest !== userData?._id && <div className='text-[green]  bg-white rounded-lg absolute flex items-center justify-center right-1 top-1 gap-[5px] p-[5px] '>
        <GiConfirmed className='w-[20px] h-[20px] text-[green]'/>Booked</div>}
        {isBooked && userData &&  guest == userData?._id && <div className='text-[#803100]  bg-white rounded-lg absolute flex items-center 
        justify-center right-1 top-1 gap-[5px] p-[5px] ' onClick={()=>setPopUp(true)}>
          <FcCancel className='w-[20px] h-[20px]'  />Cancel Booking
        </div>}

        {popUp && <div className='w-[300px] h-[100px] bg-[#ffffff] absolute top-[110px] left-[13px] rounded-lg'>
          <div className='w-[100%] h-[50%] text-[#2e2d2d] flex items-start justify-center rounded-lg overflow-auto 
          text-[20px] p-[10px]'>Booking Cancel</div>
          <div className='w-[100%] h-[50%] text-[18px] font-semibold flex items-start justify-center gap-[10px] text-[#986b6b]'>
            Are you sure? <button className='px-[20px] bg-[red] text-white rounded-lg hover:bg-slate-600 '
            onClick={()=> {cancelBooking(id);setPopUp(false)}}>Yes</button>
            <button className='px-[20px] bg-[red] text-white rounded-lg hover:bg-slate-600'onClick={()=>setPopUp(false)} >No</button>

          </div>
        </div>}





        <div className='w-[100%] h-[67%] bg-[#2e2d2d] rounded-lg overflow-auto flex'>
            <img src={image1} alt="" className='w-[100%] flex-shrink-0'/>
            <img src={image2} alt="" className='w-[100%] flex-shrink-0'/>
            <img src={image3} alt="" className='w-[100%] flex-shrink-0'/>
        </div>
        <div className='w-[100%] pt-[12px] pb-[16px] flex flex-col gap-[6px]'>
          <div className='flex items-center justify-between w-full'>
            <span className='text-[14px] text-[#666] uppercase tracking-wide truncate max-w-[75%]'>
              {`${landmark}, ${city}`}</span>
              <span className='flex items-center gap-[4px] shrink-0'><FaStar className='text-[#eb6262]' />
              <span className='text-[14px] font-medium text-[#222]'>{ratings > 0 ? ratings : "New"}</span>
              </span>
          </div>
            <span className='text-[17px] font-bold text-[#222] truncate text-left'>
              {title?.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}</span>
              <span className='text-[15px] font-semibold text-[#e11d48] text-left'>₹{rent}
                <span className='text-[13px] font-normal text-[#666]'>/day</span>
              </span>
        </div>



    </div>
  )
}

export default Card