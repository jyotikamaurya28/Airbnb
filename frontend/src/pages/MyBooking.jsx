import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import { FaLongArrowAltLeft } from "react-icons/fa";
import Card from '../Component/Card'

function MyBooking() {
  let navigate=useNavigate()
    let {userData}= useContext(userDataContext)
    return (
        <div className='w-full min-h-screen flex items-center justify-start flex-col gap-[50px] ' >
            <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[20px] left-[20px] rounded-[50%] flex items-center
                    justify-center' onClick={()=>navigate("/")}><FaLongArrowAltLeft className='w-[25px] h-[25px] text-[white]' />
            </div>
    
            <div className='w-[50%] h-[10%] border-[2px] border-[#595757] p-[15px] flex items-center justify-center text-[30px] 
            rounded-md text-[#5d2323] font-semibold mt-[20px] md:w-[600px] text-nowrap'>MY BOOKING</div>
    
            <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]'>
                {userData.booking.map((book) => (
    <Card
        key={book._id}
        title={book.listing?.title}
        landmark={book.listing?.landmark}
        city={book.listing?.city}
        image1={book.listing?.image1}
        image2={book.listing?.image2}
        image3={book.listing?.image3}
        rent={book.listing?.rent}
        id={book.listing?._id}
        isBooked={true}
        host={book.listing?.host}
        guest={book.guest}
    />
))}</div>
    
            
    
    
            
        </div>
      )
  
}

export default MyBooking