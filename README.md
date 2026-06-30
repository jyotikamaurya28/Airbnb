# 🏡 Airbnb 

A full-stack Airbnb-inspired web application that allows users to explore property listings, host accommodations, manage bookings, and enjoy a seamless booking experience. Built using the **MERN Stack** with a responsive and modern user interface.

Watch Live- https://airbnb-iryb.onrender.com
---

## ✨ Features

* 🔐 **User Authentication**

  * Secure Sign Up & Login
  * Authentication-aware UI
  * Protected routes

* 🏘️ **Property Listings**

  * Browse all available properties
  * View detailed property information
  * Responsive image gallery

* 📝 **Host Dashboard**

  * Create new property listings
  * Edit existing listings
  * Delete listings

* 📅 **Booking System**

  * Book available properties
  * Cancel existing bookings
  * Manage booking history

* 🖼️ **Image Upload**

  * Cloudinary integration for secure image storage
  * Fast image upload and retrieval

* ⭐ **Ratings & Reviews**

  * Rate listed properties
  * View property ratings

* 🔍 **Live Search**

  * Search properties in real time
  * Instant matching results while typing

* 📱 **Responsive Design**

  * Mobile-friendly interface
  * Built with React and Tailwind CSS

* 🔄 **RESTful API**

  * Express.js backend
  * MongoDB database with Mongoose

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Other Technologies

* Cloudinary (Image Hosting)
* JWT Authentication
* REST API
* CORS
* dotenv

---

## 📂 Project Structure

```text
Airbnb/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── frontend/
    ├── src/
    ├── public/
    └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB (Local or Atlas)
* Cloudinary Account

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/jyotikamaurya28/Airbnb.git
cd Airbnb
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder.

```env
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PORT=8080
```

Start the backend server.

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The application will start on the default Vite development server, while the backend will run on the configured port.

---

## 🌟 Future Improvements

* 💳 Payment Gateway Integration
* ❤️ Wishlist / Favorites
* 🎯 Advanced Filters (Price, Location, Amenities)
* 🗺️ Google Maps Integration
* 💬 Property Reviews & Comments
* 📧 Email Notifications
* 🔔 Booking Confirmation Alerts
* 🌐 Dark Mode

---
