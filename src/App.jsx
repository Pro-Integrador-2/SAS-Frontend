import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Grid} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import MyIcon from './assets/imageIcon.png'
import FormRegister from './components/FormRegister';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(false);
  const [responseData, setResponseData] = useState(null);


  const constraints = {
    video: { width: 520, height: 340 },
    audio: false,
  };

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = (stream) => {
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const handlePhotoClick = async () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 220, 140);
    // Convertir la imagen del canvas a un blob
    const blob = await new Promise(resolve => canvasRef.current.toBlob(resolve));
    setImage(blob);
    console.log(blob)
  }

  const handleResetClick = () => {
    setImage(''); // Establece el estado de las imágenes a un arreglo vacío

  };


  const submitRegister = (values) => {

    alert(JSON.stringify({...values,image},null, 2));
    console.log({...values,image})
  }
  

  useEffect(() => {
    getVideo()
  }, [])

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: '100%' }}>

      <header>
        <AppBar position="static">
          <Toolbar variant="dense" style={{backgroundColor:'#074173', height:'70px'}}>
            <IconButton edge="start" color="inherit" aria-label="menu" >
            <img src={MyIcon} alt="My Icon" style={{ width: '60px', height: '60px' }} />
            </IconButton>
            <Typography variant="h6" color="#fff" component="div">
              SAS
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <Container sx={{ display: 'flex', justifyContent: 'center', minWidth: '100%' }}>          
        <Grid container justifyContent={'center'} alignContent={'center'}>
          <Grid item xs={12} md={12} mb={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }} >
              <Typography variant='h3' color="#31363F" textAlign={'center'}>
                    Secure Access System
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} justifyContent={'center'} alignContent={'center'} textAlign={'center'}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <div style={{ border: '3px solid #074173',backgroundColor:'#000000', borderRadius: '8px', overflow: 'hidden', width: '500px', height: '310px', position: 'relative' }}>
                <video className="video" ref={videoRef}></video>
              </div>
              <div className="canvas-wrap" style={{ display: 'none' }}>
                <canvas className="canvas" width="220" height="140" ref={canvasRef}></canvas>
              </div>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
              <Button variant='contained' onClick={handlePhotoClick}  startIcon={<PhotoCameraIcon />}>Take a Photo</Button>

              <Button variant='contained'  onClick={handleResetClick} startIcon={<RestartAltIcon/>} style={{backgroundColor:'#ff5362', marginLeft:'8px'}}>Reset</Button>
            </Box>
          {
            image ? 
              <Box mt={2}>
                <img src={URL.createObjectURL(image)} className="photo" alt={'Image'} />
                <Typography align='center'>Photography</Typography>
              </Box>
            :
              <></>
         } 
          </Grid>

          <Grid item xs={12} md={6} mb={4} >
            <FormRegister submitRegister={submitRegister}/>
          </Grid>

        </Grid>
      </Container>
      </Box>
    </LocalizationProvider>
    
  );
}

export default App;