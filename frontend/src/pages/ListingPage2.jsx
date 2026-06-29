import React, { useContext } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GiFamilyHouse } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { GiShop } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { listingDataContext } from '../context/ListingContext';

function ListingPage2() {
    let {category,setCategory}=useContext(listingDataContext)
    let navigate=useNavigate()
  return (
    

    <div className='w-[100%] min-h-[100vh] bg-white flex flex-col items-center pt-[80px] pb-[30px]'>
    
   
    <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[20px] left-[20px] rounded-[50%] flex items-center justify-center' 
        onClick={()=>navigate("/listingpage1")}>
        <FaLongArrowAltLeft className='w-[25px] h-[25px] text-[white]' />
    </div>

  
    <div className='w-[200px] h-[50px] text-[20px] bg-[#d60d0d] text-white flex items-center justify-center rounded-[30px] absolute top-[20px] right-[10px] shadow-lg'>
        SetUp Your Category
    </div>

    <h1 className='text-[18px] text-[black] md:text-[30px] px-[10px] mb-[20px]'>
        Which of these best describes your place?
    </h1>

    <div className='w-[95%] md:w-[70%] flex flex-wrap items-center justify-center gap-[15px]'>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="villa"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("villa")}>
            <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
            <h3>Villa</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="farm house"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("farm house")}>
            <FaTreeCity className='w-[30px] h-[30px] text-black' />
            <h3>Farm House</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="pool house"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("pool house")}>
            <MdPool className='w-[30px] h-[30px] text-black' />
            <h3>Pool House</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="rooms"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("rooms")}>
            <MdBedroomParent className='w-[30px] h-[30px] text-black' />
            <h3>Rooms</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="flat"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("flat")}>
            <FaBuilding className='w-[30px] h-[30px] text-black' />
            <h3>Flat</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="pg"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("pg")}>
            <IoBedOutline className='w-[30px] h-[30px] text-black' />
            <h3>PG</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="cabins"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("cabins")}>
            <GiWoodCabin className='w-[30px] h-[30px] text-black' />
            <h3>Cabins</h3>
        </div>
        <div className={`w-[140px] h-[100px] md:w-[180px] flex justify-center items-center flex-col cursor-pointer border-[2px] hover:border-[gray] text-[16px] rounded-lg ${category=="shops"? "border-[3px] border-[gray]":""}`} onClick={()=>setCategory("shops")}>
            <GiShop className='w-[30px] h-[30px] text-black' />
            <h3>Shops</h3>
        </div>
    </div>

    
    <button 
        className='mt-[30px] px-[50px] py-[10px] bg-red-500 text-[white] text-[18px] md:px-[100px] rounded-lg cursor-pointer disabled:opacity-50'
        onClick={()=>navigate("/listingpage3")} 
        disabled={!category}
    > 
        Next
    </button>
</div>
  )
}

export default ListingPage2