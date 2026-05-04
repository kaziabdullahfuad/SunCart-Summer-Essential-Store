# 🌞 SunCart – Summer Essentials Store

A modern, responsive eCommerce web application where users can explore and purchase summer essentials like sunglasses, outfits, skincare, and accessories.

---

## 🚀 Live URL

👉 https://sun-cart-summer-essential-store.vercel.app

---

## 🎯 Project Purpose

SunCart is designed to provide a smooth and visually appealing shopping experience focused on seasonal summer products. It demonstrates authentication, protected routes, user profile management, and modern UI practices using Next.js.

---

## ✨ Key Features

* 🔐 User Authentication (Email/Password + Google Login)
* 🛍️ Browse summer products with details
* 🔒 Protected Product Details Page
* 👤 User Profile with update functionality
* 📱 Fully responsive (mobile, tablet, desktop)
* 🎨 Modern UI with animations and notifications
* ⚡ Fast performance with Next.js App Router

---

## 🧩 Pages Overview

* **Home Page**

  * Hero banner with offers
  * Popular products section
  * Summer care tips
  * Top brands

* **Products Page**

  * Displays all available products

* **Product Details (Protected)**

  * Accessible only when logged in

* **Authentication**

  * Login / Register with Google support

* **My Profile**

  * View user info (name, email, avatar)
  * Update profile (name & image)

---

## 🛠️ Tech Stack

### Core

* Next.js
* Tailwind CSS
* DaisyUI
* HeroUI
* BetterAuth

### Additional Libraries

* React Toastify (notifications)
* Animate.css (animations)
* React Icons
* MongoDB (database)

---

## 📦 NPM Packages Used

```bash
react-toastify
animate.css
react-icons
react-fast-marquee (optional UI enhancement)
```

---

## 🔐 Environment Variables

The following environment variables are required:

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=your_vercel_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
```

---

## 📁 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sun-cart.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

---

## 🚀 Deployment

The project is deployed on **Vercel**.

To deploy:

* Push code to GitHub
* Connect repo to Vercel
* Add environment variables
* Deploy

---

## 🎨 UI/UX Highlights

* Clean and minimal eCommerce layout
* Smooth animations using Animate.css
* Toast notifications for better user feedback
* Avatar fallback handling for invalid images

---

## 🧠 Challenges & Learnings

* Handling protected routes in Next.js App Router
* Managing authentication with BetterAuth
* Dealing with external image sources in Next.js
* Implementing global UI systems like Toast notifications
* Debugging deployment and environment variable issues

---

## 📌 Future Improvements

* Add cart & checkout system
* Product filtering & search
* Order history
* Admin dashboard

---

## 👨‍💻 Author

Kazi Abdullah Fuad

---
