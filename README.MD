# 📁 File Uploader

A full-stack file management system with a modern **React** frontend and a robust **Node.js/Express** backend.  
This project provides a seamless user interface for uploading, managing, and deleting files with **MongoDB (GridFS)** backend integration.

---

## 📋 Project Overview

**File Uploader** is a complete web application that allows users to **upload, view, and delete files** with an intuitive and modern user interface.  
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

## 🚀 Features

### Frontend Features

✅ **Modern Gradient UI** — Beautiful purple gradient upload form with smooth animations  
✅ **File Upload Component** — Intuitive file picker with elegant white upload button  
✅ **File List Display** — Clean white card layout with file icons (📄)  
✅ **Delete Functionality** — Red delete buttons with hover animations  
✅ **Interactive Animations** — Smooth hover effects and transitions on all elements  
✅ **Responsive Layout** — Flexbox-based design that works on all screen sizes  
✅ **Professional Typography** — Clean fonts with proper spacing and hierarchy  
✅ **Error Handling** — User-friendly alerts for upload failures and validations  
✅ **Box Shadows & Depth** — Modern card-based design with visual hierarchy  

### Backend Features

✅ **File Upload API** — Upload files via RESTful endpoint  
✅ **File Retrieval API** — Download or view uploaded files  
✅ **File Deletion API** — Delete files from the database  
✅ **Multer Middleware** — Efficient handling of multipart file uploads  
✅ **GridFS Storage** — Scalable file storage in MongoDB  
✅ **Error Handling** — Graceful error messages and validation  
✅ **CORS Support** — Cross-origin requests for frontend-backend communication  

## 📁 Project Structure

```
FileUploader/
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

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** instance (local or cloud-based)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mukulsingh24/Syntecxhub-FileUploader.git
   cd FileUploader
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup:**
   ```bash
   cd ../backend
   npm install
   npm start
   ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the backend folder
   - Add your MongoDB connection string (use environment variables, not hardcoded credentials)
   - Configure the API port and other settings

---

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/upload` | Upload a new file |
| **GET** | `/api/files/:id` | Retrieve a file by its ID |
| **DELETE** | `/api/files/:id` | Delete a specific file |
| **GET** | `/api/files` | List all uploaded files (optional) |

---

## 🧠 How It Works

1. User uploads a file via the `/upload` endpoint.  
2. **Multer** processes the upload and streams it to **GridFS** in MongoDB.  
3. Each file is assigned a unique ID and metadata for easy retrieval.  
4. Files can be fetched or deleted using the corresponding endpoints.  
5. Built-in error handling ensures stability and data consistency.  

---

## 🔐 Security & Best Practices

✅ **Environment Variables** — Store sensitive data (MongoDB URLs, API keys) in `.env` files  
✅ **No Hardcoded Credentials** — Never commit passwords or personal data to version control  
✅ **File Validation** — Implement file type and size restrictions  
✅ **CORS Configuration** — Restrict API access to trusted domains  
✅ **Error Handling** — Generic error messages to prevent information leakage  
✅ **Input Sanitization** — Validate all user inputs before processing  

### ⚠️ Important Security Notes

- **DO NOT** commit `.env` files or any files containing credentials to Git
- Add `.env` to `.gitignore` file
- Always use environment variables for database connections and API keys
- Store sensitive configuration in a secure configuration management system

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

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests with improvements
- Improve documentation

---

## 📞 Support & Documentation

For issues, feature requests, or questions:
- Check the [GitHub Issues](https://github.com/mukulsingh24/Syntecxhub-FileUploader/issues) page
- Create a new issue with a detailed description
- Reference any relevant code or error messages

---

**Status:** 
- 🟢 Frontend: Complete (Modern UI with Gradient Design)
- 🟡 Backend: Core Complete (GridFS Integration Ready)
- 🟡 Integration: Done
- ⚪ Deployment: Pending
