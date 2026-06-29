import React, { useContext, useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../context/ListingContext';
import { userDataContext } from '../context/UserContext';
import { RxCross2 } from "react-icons/rx";
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import { FaStar } from "react-icons/fa6";
import { bookingDataContext } from '../context/BookingContext';
import { toast } from 'react-toastify';


function ViewCard() {
    let navigate = useNavigate()
    let { cardDetails } = useContext(listingDataContext)
    let {userData}=useContext(userDataContext)
    let [updatePopUp,setUpdatePopUp]=useState(false)
    let [bookingPopUp,setBookingPopUp]=useState(false)
    let [title,setTitle]=useState(cardDetails.title)
    let [description,setDescription]=useState(cardDetails.description)
    let [frontEndImage1,setFrontEndImage1]=useState(null)
    let [frontEndImage2,setFrontEndImage2]=useState(null)
    let [frontEndImage3,setFrontEndImage3]=useState(null)
    let [backEndImage1,setBackEndImage1]=useState(null)
    let [backEndImage2,setBackEndImage2]=useState(null)
    let [backEndImage3,setBackEndImage3]=useState(null)
    let [rent,setRent]=useState(cardDetails.rent)
    let [city,setCity] =useState(cardDetails.city)
    let [landmark,setLandmark]=useState(cardDetails.landmark)
    let {serverUrl}=useContext(authDataContext)
    let [updating,setUpdating]=useState(false)
    let [deleting,setDeleting]=useState(false)
    let [minDate,setMinDate]=useState("")
    let {checkIn,setCheckIn,
        checkOut,setCheckOut,
        total,setTotal,
        night,setNight,handleBooking,booking}=useContext(bookingDataContext)

        useEffect(()=>{
            if(checkIn && checkOut){
                let inDate = new Date(checkIn)
                let outDate = new Date(checkOut)
                let n = (outDate.getTime() - inDate.getTime()) / (24*60*60*1000)
                setNight(n)
                let airBnbcharge = (cardDetails.rent * (7/100))
                let tax = (cardDetails.rent * (7/100))
                if(n > 0){
                    setTotal((cardDetails.rent * n) + airBnbcharge + tax)
                } else {
                    setTotal(0)
                }
            }
        }, [checkIn, checkOut, cardDetails.rent])




    const handleUpdateListing=async()=>{
        setUpdating(true)
        try{
            let formData = new FormData()
    formData.append("title",title)
    if(backEndImage1){formData.append("image1",backEndImage1)}
    if(backEndImage2){formData.append("image2",backEndImage2)}
    if(backEndImage3){formData.append("image3",backEndImage3)}
    formData.append("description",description)
    formData.append("rent",rent)
    formData.append("city",city)
    formData.append("landmark",landmark)
   
      
        let result = await axios.post(serverUrl + `/api/listing/update/${cardDetails._id}`,formData,{withCredentials:true})
       
        console.log(result)
        navigate("/")
        toast.success("Listing Updated")
        setTitle("")
        setDescription("")
        setFrontEndImage1(null)
        setFrontEndImage2(null)
        setFrontEndImage3(null)
        setBackEndImage1(null)
        setBackEndImage2(null)
        setBackEndImage3(null)
        setRent("")
        setCity("")
        setLandmark("")
        
            
        }catch(error){
            setUpdating(false)
            console.log(error)
            toast.error(error.response.data.message)
        }
    
    }

    const handleDeleteListing=async()=>{
        setDeleting(true)
        try{
            let result =await axios.delete(serverUrl+`/api/listing/delete/${cardDetails._id}`,{withCredentials:true})
            console.log(result.data)
            navigate("/")
            toast.success("Listing Deleted")
            setDeleting(false)
            
        }catch(error){
            console.log(error)
            setDeleting(false)
            toast.error(error.response.data.message)
        }
    }

    const handleImage1 =(e)=>{
        let file = e.target.files[0]
        setBackEndImage1(file)
        
    }

    const handleImage2 =(e)=>{
        let file = e.target.files[0]
        setBackEndImage2(file)
        
    }

    const handleImage3 =(e)=>{
        let file = e.target.files[0]
        setBackEndImage3(file)
       
    }

    useEffect(()=>{
        let today=new Date().toISOString().split('T')[0]
        setMinDate(today)

        
    },[])

    return (
        <div className='w-[100%] min-h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative'>

            <div className='w-[95%] md:w-[80%] flex items-center justify-between gap-[15px] mt-[20px]'>
    <div
        className='fixed top-4 left-4 w-[50px] h-[50px] bg-[red] rounded-full flex items-center justify-center cursor-pointer z-50'
        onClick={() => navigate("/")}
    >
        <FaLongArrowAltLeft className='text-[25px] text-[white]' />
    </div>
    <h1 className='flex-1 text-center text-[18px] text-[#222] md:text-[26px] font-semibold'>
    {`In ${cardDetails.landmark} · ${cardDetails.city}`}
</h1>
</div>

            {/* Image Grid */}
            <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row'>
                <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white]'>
                    <img src={cardDetails.image1} alt="" className='w-[100%]' />
                </div>
                <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col'>
                    <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
                        <img src={cardDetails.image2} alt="" className='w-[100%]' />
                    </div>
                    <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
                        <img src={cardDetails.image3} alt="" className='w-[100%]' />
                    </div>
                </div>
            </div>

            {/* Details */}
         <div className='w-[95%] md:w-[80%] flex flex-col gap-[8px] border-b border-gray-200 pb-[20px]'>
    <h2 className='text-[22px] md:text-[30px] font-bold text-[#222]'>
        {cardDetails.title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
    </h2>
    <p className='text-[15px] text-[#666]'>
        {cardDetails.category.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
    </p>
    <p className='text-[14px] text-[#888]'>
        📍 {cardDetails.landmark.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}, {cardDetails.city.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
    </p>
    <p className='text-[15px] text-[#444] leading-relaxed mt-[6px]'>
        {cardDetails.description}
    </p>
</div>

<div className='w-[95%] md:w-[80%] flex items-center gap-[6px]'>
    <span className='text-[24px] font-bold text-[#e11d48]'>₹{cardDetails.rent}</span>
    <span className='text-[14px] text-[#666]'>/day</span>
</div>

            
<div className='w-[95%] md:w-[80%] md:px-[70px] flex justify-end items-center mt-4 mb-8'>
   {cardDetails.host==userData._id && <button className='px-6 py-3 bg-red-500 text-white text-[18px]  rounded-lg cursor-pointer '
   onClick={()=>setUpdatePopUp(prev=>!prev)}>
        Edit Listing
    </button>}
    {cardDetails.host != userData._id &&<button className='px-6 py-3 bg-red-500 text-white text-[18px] rounded-lg cursor-pointer'
    onClick={()=>setBookingPopUp(prev=>!prev)}>
        Reserve
    </button>}
</div>

   {/* update Listing Page*/}

{updatePopUp && <div className='w-[100%] h-[100%] flex items-center justify-center bg-[#000000c6] absolute top-[0px] z-[100]
 background-blur'>
    <RxCross2 className='w-[30px] h-[30px] bg-[red] cursor-pointer absolute top-[2%] left-[20px] rounded-[50%] flex items-center
    justify-center' onClick={()=>setUpdatePopUp(false)} />
    <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-start
            flex-col md:items-start gap-[10px] overflow-auto mt-[50px] text-[white] bg-[#272727] p-[20px]'
            onSubmit={(e)=>{e.preventDefault()}} >
    
            
            <div className='w-[200px] h-[50px] text-[20px] bg-[red] text-white flex items-center justify-center 
            rounded-[30px] absolute top-[2%] right-[10px] shadow-lg'>
                Update Your Details
    
            </div>
            <div className ='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[50px]'>
                <label htmlFor="title" className='text-[20px]'>Title</label>
                <input type="text" id='Title'  className = 'w-[90%] h-[40px] border-[2px] rounded-lg text-[18px] px-[20px] text-black '
                 required  onChange={(e)=>setTitle(e.target.value)} value={title}  placeholder='__bhkhouse/ best title' /> 
               
            </div>
    
            <div className ='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                <label htmlFor="des" className='text-[20px]'>Description</label>
                <textarea name="" id="des" className = 'w-[90%] h-[80px] border-[2px] rounded-lg text-[18px] px-[20px]  text-black ' 
                required  onChange={(e)=>setDescription(e.target.value)} value={description} 
                ></textarea>
            </div>
    
            <div className ='w-[90%] flex items-start justify-center flex-col gap-[10px] '>
                <label htmlFor="img1" className='text-[20px]'>Image1</label>
                <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]'>
                    <input type ="file" id='img1' className = 'w-[100%] text-[15px] px-[10px]'  onChange={handleImage1}/></div>
            </div>
    
            <div className ='w-[90%] flex items-start justify-center flex-col gap-[10px] '>
                <label htmlFor="img2" className='text-[20px]'>Image2</label>
                <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]'>
                    <input type ="file" id='img2' className = 'w-[100%] text-[15px] px-[10px]'  onChange={handleImage2}/></div>
            </div>
    
            <div className ='w-[90%] flex items-start justify-center flex-col gap-[10px] '>
                <label htmlFor="img3" className='text-[20px]'>Image3</label>
                <div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]'>
                    <input type ="file" id='img3' className = 'w-[100%] text-[15px] px-[10px]'onChange={handleImage3} /></div>
            </div>
    
            <div className ='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                <label htmlFor="rent" className='text-[20px]'>Rent</label>
                <input type="number" id='rent'  className = 'w-[90%] h-[40px] border-[2px] rounded-lg text-[18px] px-[20px]  text-black '  
                required  onChange={(e)=>setRent(e.target.value)} value={rent}/>
            </div>
    
            <div className ='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                <label htmlFor="city" className='text-[20px]'>City</label>
                <input type="text" id='city'  className = 'w-[90%] h-[40px] border-[2px] rounded-lg text-[18px] px-[20px]   text-black'  
              required  onChange={(e)=>setCity(e.target.value)} value={city} />
            </div>
    
            <div className ='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                <label htmlFor="landmark" className='text-[20px]'> Landmark</label>
                <input type="text" id='landmark'  className = 'w-[90%] h-[40px] border-[2px] rounded-lg text-[18px] px-[20px]  text-black '  
                 required  onChange={(e)=>setLandmark(e.target.value)} value={landmark}/>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-4 mt-5 '>
            <button className=' w-full md:w-auto px-8 py-3 bg-red-500 text-white text-nowrap cursor-pointer'
            onClick={handleUpdateListing} disabled={updating}> 
            {updating?"updating...":"Update Listing"} </button>

            <button className='w-full md:w-auto px-8 py-3 bg-red-500 text-white text-nowrap  cursor-pointer'
            onClick={handleDeleteListing} disabled={deleting}> 
            {deleting?"Deleting...":"Delete Listing"}
          </button></div>
    
            </form>
    
    </div>}
    {bookingPopUp &&<div className='w-[100%] min-h-[100%] flex items-center justify-center flex-col gap-[30px]  bg-[#ffffffcd] 
     absolute top-[0px] z-[100]  p-[20px] backdrop-blur-sm md:flex-row md:gap[100px]' >
        <RxCross2 className='w-[30px] h-[30px] bg-[red] cursor-pointer absolute top-[2%] left-[20px] rounded-[50%]
         flex items-centerjustify-center' onClick={()=>setBookingPopUp(false)} />

         <form className='max-w-[450px] w-[90%] h-[450px] overflow-auto bg-[#f3f1f1] p-[20px] rounded-lg 
         flex items-center justify-start flex-col gap-[10px] border-[1px] border-[#dedddddd]' onSubmit={(e)=>{e.preventDefault()}}>
            <h1 className='w-[100%] flex items-center justify-center py-[10px] text-[25px] border-b-[1px] border-[#a3a3a3]'>
                Confirm & Book
            </h1>
            <div className='w-[100%] mt-[10px] rounded-lg p-[10px]'>
                <h3 className='text-[19px] font-semibold flex items-start'>Your Trip -</h3>
                <div className='w-full flex items-center gap-[10px] mt-[10px]'>
                    <label htmlFor="checkin" className='text-[20px] shrink-0 w-[80px]'>CheckIn</label>
                    <input type="date" min={minDate} id='checkin'  className='border-[#555656] border-2 flex-1 min-w-0 h-[40px] 
                    rounded-lg text-[13px] px-[6px] text-black bg-white' 
                    required onChange={(e)=>setCheckIn(e.target.value)} value={checkIn} /></div>
                <div className='w-full flex items-center gap-[10px] mt-[10px]'>
                    <label htmlFor="checkout" className='text-[18px] shrink-0 w-[80px]'>CheckOut</label>
                    <input type="date" min={minDate} id='checkout'  className='border-[#555656] border-2 flex-1 min-w-0 h-[45px] 
                    rounded-lg text-[13px] px-[6px] text-black bg-white appearance-none'
                    required onChange={(e)=>setCheckOut(e.target.value)} value={checkOut}
                     /></div>
            </div>
            <div className='w-[100%] flex items-center justify-center'>
                <button className='px-[80px] py-[6px] bg-[red] text-white text-[15px] md:px-[100px] md:text-[18px] rounded-lg
                text-nowrap mt-[30px] 'onClick={()=>{handleBooking(cardDetails._id)}} disabled={booking}>{booking? "Booking...":"Book Now"} </button>
            </div>

         </form>
<div className='w-full md:w-[300px] bg-white rounded-2xl shadow-lg p-[20px] flex flex-col gap-[14px]'>

    <img src={cardDetails.image1} alt="" className='w-full h-[160px] rounded-xl object-cover' />

    <div className='flex flex-col gap-[4px]'>
      <p className='text-[11px] text-black uppercase tracking-wider'>
        {cardDetails.landmark}, {cardDetails.city}
      </p>
      <h2 className='text-[15px] font-semibold text-gray-800'>{cardDetails.title}</h2>
      <p className='text-[12px] text-black'>{cardDetails.category}</p>
      <p className='text-[12px] text-black line-clamp-2'>{cardDetails.description}</p>
    </div>

    <div className='border-t border-gray-100 pt-[12px] flex items-center justify-between'>
      <div className='flex items-center gap-[4px]'>
        <FaStar className='text-red-400 text-[12px]' />
        <span className='text-[13px] text-black'>{cardDetails.ratings}</span>
      </div>
      <p className='text-[13px] font-semibold text-black'>
        Rs.{cardDetails.rent}<span className='text-[11px] font-normal text-black'>/day</span>
      </p>
    </div>

    
    <div className='border-t border-gray-200 pt-[12px] flex flex-col gap-[10px]'>
      <h1 className='text-[16px] font-semibold'>Booking Price -</h1>
      <p className='w-[100%] flex justify-between items-center'>
        <span className='text-[13px] font-semibold'>{`Rs.${cardDetails.rent} X ${night} nights`}</span>
        <span className='text-[13px]'>{cardDetails.rent * night}</span>
      </p>
      <p className='w-[100%] flex justify-between items-center'>
        <span className='text-[13px] font-semibold'>Tax</span>
        <span className='text-[13px]'>{cardDetails.rent * 7 / 100}</span>
      </p>
      <p className='w-[100%] flex justify-between items-center border-b border-gray-200 pb-[10px]'>
        <span className='text-[13px] font-semibold'>Airbnb Charge</span>
        <span className='text-[13px]'>{cardDetails.rent * 7 / 100}</span>
      </p>
      <p className='w-[100%] flex justify-between items-center'>
        <span className='text-[14px] font-bold'>Total Price</span>
        <span className='text-[14px] font-bold'>Rs.{total}</span>
      </p>
    </div>

</div>
          
         </div>}
        
    </div>
    )
}

export default ViewCard