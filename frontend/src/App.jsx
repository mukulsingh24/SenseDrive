import { useState ,useEffect} from 'react'
import Form from './component/form'
import Formlist from './component/filelist'
import axios from 'axios'
function App() {
  const [files, setFiles] = useState([]);
  const fetchfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/files');
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
      <Formlist files={files} />
    </div>
  )
}

export default App
