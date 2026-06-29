import uploadOnCloudinary from "../config/cloudinary.js"
import Listing from "../model/listing.model.js"
import User from "../model/user.model.js"


// Add Listing
export const addListing = async (req, res) => {
  try {
    let host = req.userId;
    let { title, description, rent, city, landmark, category } = req.body;

    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);
    let image3 = await uploadOnCloudinary(req.files.image3[0].path);

    let listing = await Listing.create({
      title, description, rent, city, landmark, category,
      image1, image2, image3, host,
    });

    let user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: listing._id } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(201).json(listing);
  } catch (error) {
    return res.status(500).json({ message: `AddListing error: ${error}` });
  }
};


//  Get All Listings 
export const getListing = async (req, res) => {
  try {
    let listing = await Listing.find().sort({ createdAt: -1 });
    return res.status(200).json(listing);
  } catch (error) {
    return res.status(500).json({ message: `getListing error: ${error}` });
  }
};


// ─ Find Single Listing ─
export const findListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) return res.status(404).json({ message: "Listing not found" });

    return res.status(200).json(listing);
  } catch (error) {
    return res.status(500).json({ message: `findListing error: ${error}` });
  }
};


//  Update Listing 
export const updateListing = async (req, res) => {
  try {
    let { id } = req.params; 
    let { title, description, rent, city, landmark, category } = req.body;

    
    const existingListing = await Listing.findById(id);
    if (!existingListing) return res.status(404).json({ message: "Listing not found" });

   
    let image1 = existingListing.image1;
    let image2 = existingListing.image2;
    let image3 = existingListing.image3;

    
    if (req.files?.image1) image1 = await uploadOnCloudinary(req.files.image1[0].path);
    if (req.files?.image2) image2 = await uploadOnCloudinary(req.files.image2[0].path);
    if (req.files?.image3) image3 = await uploadOnCloudinary(req.files.image3[0].path);

    const updated = await Listing.findByIdAndUpdate(
      id,
      { title, description, rent, city, landmark, category, image1, image2, image3 },
      { new: true }
    );

    return res.status(200).json({ message: "Listing updated!", listing: updated });
  } catch (error) {
    return res.status(500).json({ message: `updateListing error: ${error}` });
  }
};


export const deleteListing =async(req,res) => {
  try{
    let {id}=req.params
    let listing = await Listing.findByIdAndDelete(id)
    let user= await User.findByIdAndUpdate(listing.host,{$pull:{listing:listing._id}},{new:true})
    if(!user){
      return res.status(404).json({message:"user is not found"})
    }
    return res.status(201).json({message:"Listing Deleted"})
  }catch(error){
    return res.status(500).json({message:`DeleteListing Error ${error}`})

  }
  
}


export const ratingListing =async(req,res)=>{
  try{
    let {id}=req.params
    let {ratings}=req.body
    let listing =await Listing.findById(id)
    if(!listing){
      return res.status(404).json({message:"listing not found"})
    }
    listing.ratings=Number(ratings)
    await listing.save();
    return res.status(200).json({ratings:listing.ratings})


  }catch(error){
    return res.status(500).json({message:`Rating Error ${error}`})

  }
}


export const search=async(req,res)=>{
  try{
    const {query}=req.query;
    if(!query){
      return res.status(400).json({message:"Search query is required"});
    }
    const listing =await Listing.find({
      $or:[
        {landmark:{$regex:query,$options:"i"}},
        {city:{$regex:query,$options:"i"}},
        {title:{$regex:query,$options:"i"}},
      ],
    });
    return res.status(200).json(listing);
  }catch(error){
    console.error("Search error:",error);
    return res.status(500).json({message:"Internal server error"});
  }
}