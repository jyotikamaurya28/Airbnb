**Airbnb🏡**
A full-stack Airbnb-inspired web application where users can browse listings, view property details, book stays, and 
manage their bookings — built using the MERN-style stack (MongoDB, Express, React, Node.js).

**Watch Live-** https://airbnb-iryb.onrender.com

**✨ Features**
🔐 User authentication (signup/login, auth-aware UI rendering)
🏘️ Browse and view property listings with images
📝 Create, update, and delete listings (host functionality)
📅 Booking system — create and cancel bookings
🖼️ Image upload and management via Cloudinary
⭐ Ratings system for listings
🔍 Live search bar — shows matching properties as you type
📱 Responsive, modern UI built with React and Tailwind CSS
🔄 RESTful APIs with Express and MongoDB (Mongoose)


**🛠️ Tech Stack**
Frontend
--React (Vite)
--Tailwind CSS

Backend
--Node.js
--Express.js
--MongoDB with Mongoose

Other
--Cloudinary (image hosting)
--CORS-enabled REST API


**📂 Project Structure**
Airbnb/
├── backend/        # Express server, routes, controllers, models
└── frontend/        # React + Tailwind client app

**🚀 Getting Started**
Prerequisites
-Node.js installed
-MongoDB instance (local or Atlas)
-Cloudinary account (for image uploads)

**Backend Setup**
-bash cd backend
-npm install

**Create a .env file in backend/ with the following:**
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=8080

**Run the server:**
bashnpm start

**Frontend Setup**
-bashcd frontend
-npm install
-npm run dev
The app should now be running locally — frontend on Vite's default port and backend on the configured PORT.

**📌 Future Improvements**
-Payment gateway integration
-Wishlist/favorites feature
-Filters (price, location, amenities)
