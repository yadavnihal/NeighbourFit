# 🏡 NeighborFit — Neighborhood Livability & Lifestyle Matching Platform

NeighborFit is a **full-stack MERN (MongoDB, Express, React, Node.js) web application** that helps users discover neighborhoods matching their lifestyle preferences.  
It evaluates livability metrics like **safety, amenities, commute, affordability, and more**, presenting them in an **interactive and user-friendly interface**.

---

## 📸 Preview

![NeighborFit Preview](/preview.png)


---

## 🌟 Features
- 🔍 Compare neighborhoods based on real-time livability metrics  
- 📊 Breakdown of factors: Amenities, Crime, Cost of Living, Commute, Employment, Schools, etc.  
- 🗺️ Interactive area maps with location markers  
- 📝 User signup/login with personalized profiles  
- 📈 Custom livability scoring algorithm  
- 📚 Uses open civic APIs & JSON datasets  

---

## ⚙️ Tech Stack
- **Frontend:** React, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Styling:** CSS-in-JS (Tailwind CSS optional)  
- **APIs/Data:** Open civic APIs & JSON datasets  

---

## 🚀 Getting Started

### 📦 Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally)

### 🔧 Installation
```bash
git clone https://github.com/yourusername/neighborfit.git
cd neighborfit

# Install server dependencies
cd Server
npm install

# Install client dependencies
cd ../Client/Client
npm install
```

### ▶️ Running the App
1. Start MongoDB (if not already running):
```bash
mongod
```
2. Start the backend:
```bash
cd Server
npm start
```
3. Start the frontend:
```bash
cd Client/Client
npm run dev
```

---

## 📄 Pages & Components Overview

### **HomePage**
Landing page introducing NeighborFit and its core features.

### **LoginPage**
Secure user login with email/password.

### **SignupPage**
Register new users and redirect to profile.

### **UserPage**
Displays profile info: name, email, join date.

### **Navbar**
Dynamic navigation bar with conditional links.

### **Footer**
Quick links: Home, About, Contact, Blog + credits.

### **LivabilityMetrics**
Grid of neighborhoods with livability scores.

### **LivabilityBreakdown**
Detailed score breakdown (amenities, crime, schools, etc.).

### **MapSection**
(Planned) Interactive map with area markers.

### **AreaRating.js**
Holds predefined scores for Delhi neighborhoods.

### **User API**
- Register user  
- Login  
- Fetch user profile  

---

## 📊 Future Enhancements
- 📍 **Compare Page:** Side-by-side neighborhood comparison  
- 📰 **Blog, Contact, About Pages**  
- 🌐 **Live Deployment (Planned)**  

---

## ⚠️ Important
To use the live version, ensure the project runs correctly on **localhost first**.

---

## 📜 License
This project is open-source under the [MIT License](LICENSE).

---
