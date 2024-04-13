import { AppBar, Box, Container, IconButton, Toolbar, Typography, Grid} from '@mui/material';
import MyIcon from './assets/imageIcon.png'

function App() {

  return (
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
        <Grid item xs={12} md={12} justifyContent={'center'} alignContent={'center'} textAlign={'center'}>
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }} >
            <Typography variant='h3' color="#31363F">
              Secure Access System
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
          </Box>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
