import { useState ,useEffect} from 'react'
import Form from './component/form'
import Formlist from './component/filelist'
import axios from 'axios'
function App() {
  const [files, setFiles] = useState([]);
  const handleDelete =  async(id) => {
        try{
            await axios.delete(`https://fileuploader-backend-x1qt.onrender.com/files/${id}`);
            fetchfile()
        }
        catch(error){
            console.log("Error" ,error)
            alert("Error Deleting File")
        }
    }
  const fetchfile = async () => {
    try {
      const response = await axios.get('https://fileuploader-backend-x1qt.onrender.com/files');
      setFiles(response.data);
    } catch (error) {
      console.log("Error Fetching File");
    }
  };
  useEffect(() => {
    fetchfile(); 
  }, []);
  return (
    <div className="App">
      <Form onUploadSuccess={fetchfile} />
      <Formlist files={files} handleDelete={handleDelete} />
    </div>
  )
}

export default App
