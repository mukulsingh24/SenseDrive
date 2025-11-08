import {React,useState} from "react";
import axios from 'axios';
import './form.css';
function Form({onUploadSuccess}){
    const [file,setFile] = useState(null);
    const uploadfile= async () =>{
        if(!file){
            alert("Select an File for Upload")
            return
        }
        const formdata = new FormData()
        formdata.append('file',file)

        try{
            await axios.post('http://localhost:5000/upload', formdata,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }})
            alert("File uploaded Successfully")
        
        onUploadSuccess(); 
        setFile(null);}
        catch(error){
            console.log("Error" ,error)
            alert("Error uploading File")
        }
    }
    return(
        <div style={{
            padding: '40px',
            maxWidth: '600px',
            margin: '40px auto',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <h1 style={{
                color: '#ffffff',
                fontSize: '28px',
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: '600',
                letterSpacing: '0.5px'
            }}>File Upload Form</h1>
            
            <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
            }}>
                <input 
                    type="file" 
                    key={file ? file.name : 'empty'}
                    placeholder="Upload the File Here" 
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{
                        flex: 1,
                        padding: '12px 16px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                    }}
                />
                <button 
                    style={{
                        padding: '12px 32px',
                        backgroundColor: '#ffffff',
                        color: '#667eea',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }}
                    onClick={uploadfile}
                >
                    Upload
                </button>
            </div>
        </div>
    )
}

export default Form