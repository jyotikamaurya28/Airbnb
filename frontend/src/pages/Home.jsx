import React from 'react'
import Nav from '../Component/Nav'
import { useContext } from 'react'
import { listingDataContext } from '../context/ListingContext'
import Card from '../Component/Card'

function Home(){
    let {listingData ,setListingData,newListData}=useContext(listingDataContext)
    return (
        <div >
            <Nav/>
            <div className='w-full  flex flex-wrap justify-start gap-[20px] pt-[20px] px-[20px] mt-[190px] md:mt-[180px] '>
                {newListData.map((list)=>(<Card title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} 
                image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} ratings={list.ratings}
                isBooked={list.isBooked} host={list.host}/>))}
            </div>

        </div>
    )
}
export default Home
