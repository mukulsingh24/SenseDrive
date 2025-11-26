# 📁 SenseDrive

A full-stack file management system with a modern **React** frontend and a robust **Node.js/Express** backend.  
This project provides a seamless user interface for uploading, managing, and deleting files with **MongoDB (GridFS)** backend integration.

---

## 📋 Project Overview

**SenseDrive** is a complete web application that allows users to **upload, view, and delete files** with an intuitive and modern user interface.  
It features a beautiful React frontend connected to a reliable backend API for efficient file management.

### ⚙️ Tech Stack

**Frontend:**
- **React 18+** with Vite (for fast development)
- **Modern Inline CSS** with Gradient UI & Animations
- **Responsive Design** with Flexbox layouts
- **Axios** for API communication
- **ESLint** for code quality

**Backend:**
- **Node.js** + **Express**
- **MongoDB** with GridFS (for scalable file storage)
- **Multer** for handling `multipart/form-data`
- **Custom error handling** and validation middleware
- **CORS** support for frontend-backend communication  

---

## 🎯 Key Objectives

✅ Provide an intuitive and modern UI for file management  
✅ Enable secure and efficient file uploads using Multer  
✅ Store files seamlessly in MongoDB with GridFS  
✅ Offer easy-to-use API endpoints for file operations  
✅ Ensure data integrity and proper error handling  
✅ Create a smooth and responsive user experience  

---
## 📁 Project Structure

```
SenseDrive/
├── backend/                          # Node.js Express API
│   ├── node_modules/                # Backend dependencies
│   ├── uploads/                     # Uploaded files storage
│   ├── index.js                     # Express server entry point
│   ├── mongo.env                    # MongoDB environment config
│   ├── package-lock.json            # Locked dependency versions
│   └── package.json                 # Backend dependencies
│
├── frontend/                         # React Vite application
│   ├── node_modules/                # Frontend dependencies
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── component/
│   │   │   ├── filelist.jsx        # File list display component
│   │   │   └── form.jsx            # File upload component with gradient UI
│   │   ├── App.jsx                 # Main application component
│   │   ├── index.css               # Global styles
│   │   └── main.jsx                # Application entry point
│   ├── .gitignore                  # Git ignore rules
│   ├── eslint.config.js            # ESLint configuration
│   ├── index.html                  # HTML template
│   ├── package-lock.json           # Locked dependency versions
│   ├── package.json                # Frontend dependencies
│   ├── README.md                   # Frontend documentation
│   └── vite.config.js              # Vite configuration
│
├── result/                          # Build output/results
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```
---
## 📚 Future Enhancements

🚧 **Planned Features:**

- 🔐 User authentication and file ownership tracking
- 🔒 JWT-based authorization
- 📦 File compression & preview functionality
- 📤 File sharing via secure public links
- 📊 Upload statistics and analytics dashboard
- 🕒 Upload history and activity logs
- ☁️ Cloud storage integration (AWS S3, Google Cloud)
- 🌓 Dark mode theme option
- 🔔 Email notifications for uploads/deletions
- 📱 Mobile app integration
- 🌍 Multi-language support
- 📥 Batch file upload capability  

---