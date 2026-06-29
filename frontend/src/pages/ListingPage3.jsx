import React from 'react'
import { useContext } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../context/ListingContext';

function ListingPage3() {
    let navigate = useNavigate()
    let{title,setTitle ,
            description,setDescription ,
            frontEndImage1,setFrontEndImage1 ,
            frontEndImage2,setFrontEndImage2 ,
            frontEndImage3,setFrontEndImage3 ,
            backEndImage1,setBackEndImage1 ,
            backEndImage2,setBackEndImage2 ,
            backEndImage3,setBackEndImage3 ,
            rent,setRent,
            city,setCity,
            landmark,setLandmark,
            category,setCategory,
            handleAddListing,
            adding,setAdding
          
        } = useContext(listingDataContext)
  return (
    <div className='w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center
        justify-center ' onClick={()=>navigate("/listingpage2")}><FaLongArrowAltLeft className='w-[25px] h-[25px] text-[white] ' /></div>

        <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
            <h1 className='text-[12px] text-[black] md:text-[30px] text-ellipsis text-nowrap overflow-hidden px-[30px] md:px-[0px]'>
                {`In ${landmark.toUpperCase()} , ${city.toUpperCase()}`}</h1>
        </div>

        <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row ' >
            <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center
            border-[2px] border-[white] '>
                <img src={frontEndImage1} alt ="" className='w-[100%]' />
            </div>

            <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col '>
                <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] '>
                    <img src={frontEndImage2} alt ="" className='w-[100%]' />
                </div>
                <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
                    <img src={frontEndImage3} alt ="" className='w-[100%]' />
                </div>
            </div>
            

        </div>
       <div className='w-[95%] md:w-[80%] flex flex-col gap-[12px] border-b pb-[20px]'>
            <h2 className='text-[20px] md:text-[26px] font-bold text-[#222] capitalize'>
                {`${title} · ${category} `}
            </h2>
            <p className='text-[15px] md:text-[17px] text-[#444] leading-relaxed capitalize'>
                {description}
            </p>
        </div>

        {/* Rent */}
        <div className='w-[95%] md:w-[80%] flex items-center gap-[6px]'>
            <span className='text-[22px] md:text-[28px] font-bold text-[#e11d48]'>₹{rent}</span>
            <span className='text-[15px] text-[#666]'>/day</span>
        </div>

        <div className='w-[95%] h-[50px] flex items-center justify-end px-[80px]'>
        <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg  right-[5%] bottom-[5%] text-nowrap'
        onClick={handleAddListing} disabled={adding}>
            {adding? "adding...":"Add Listing"}
           
        </button></div>






    </div>
  )
}

export default ListingPage3