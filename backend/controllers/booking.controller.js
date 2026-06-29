import Listing from "../model/listing.model.js"
import Booking from "../model/booking.model.js"
import User from "../model/user.model.js"


export const createBooking =async(req,res)=>{
    try{
        let {id}=req.params
        let {checkIn,checkOut,totalRent}=req.body
        let listing=await Listing.findById(id)
        if(!listing){
            return res.status(404).json({message:"Listing is not found"})
        }
        if(new Date(checkIn)>= new Date(checkOut)){
            return res.status(400).json({message:"Invalid checkIn/checkOut date"})
        }
        if(listing.isBooked){
            return res.status(400).json({message:"Listing is already Booked"})
        }
        let booking=await Booking.create({
            checkIn,
            checkOut,
            totalRent,
            host:listing.host,
            guest:req.userId,
           listing: listing._id
        })

        await booking.populate("host","email");

        let user=await User.findByIdAndUpdate(req.userId,{
            $push:{booking:booking._id}
        },{new:true})
        if(!user){
            return res.status(404).json({message:"User is not found"})
        }
        listing.guest=req.userId
        listing.isBooked=true
        await listing.save()
       let populatedBooking = await Booking.findById(booking._id).populate("host", "email name")
       return res.status(201).json({message:"Booking Created", booking: populatedBooking})
        

    }catch(error){
    console.log("BOOKING ERROR:", error.message)
    return res.status(500).json({message:`booking error ${error.message}`})
}
}

export const cancelBooking = async (req, res) => {
    try {
        let { id } = req.params

        let listing = await Listing.findById(id)
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" })
        }

        
        let booking = await Booking.findOneAndDelete({ listing: id })

       
        await User.findByIdAndUpdate(listing.guest, {
            $pull: { booking: booking._id }
        })

       
        await Listing.findByIdAndUpdate(id, { isBooked: false, guest: null })

        return res.status(200).json({ message: "Booking Cancelled" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Booking Cancel error" })
    }
}