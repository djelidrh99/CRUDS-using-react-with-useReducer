import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createContext,useContext,useState } from 'react';

/* eslint-disable react/prop-types */


const SnachBarContext = createContext(()=>{})

export default function CustomizedSnackbars( {children}) {
  const [open, setOpen] = useState(false);
  const [message,setMessage]= useState("")

  const handleClick = (msg) => {
    setOpen(true);
    setMessage(msg)
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <SnachBarContext.Provider value={handleClick}>
    {children}
    <div>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
    </SnachBarContext.Provider>
  );
}

export const useSnackbar = ()=>{
    return useContext(SnachBarContext)
}