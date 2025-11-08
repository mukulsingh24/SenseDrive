import {React,useState,useEffect} from "react";
import axios from "axios";
import './filelist.css';
function Formlist({files}){
    return(
        <div style={{
            padding: '40px',
            maxWidth: '600px',
            margin: '40px auto',
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <h2 style={{
                color: '#333333',
                fontSize: '24px',
                marginBottom: '24px',
                textAlign: 'center',
                fontWeight: '600',
                letterSpacing: '0.5px'
            }}>Uploaded Files</h2>
            
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {files.map((file, index) => (
                    <li 
                        key={file._id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            marginBottom: index < files.length - 1 ? '12px' : '0',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            border: '1px solid #e9ecef',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f1f3';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span style={{
                            color: '#333333',
                            fontSize: '15px',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            📄 {file.originalname}
                        </span>
                        <button 
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#ff6b6b',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '13px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#ff5252';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#ff6b6b';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 2px 8px rgba(255, 107, 107, 0.3)';
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Formlist