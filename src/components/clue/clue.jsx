import { render } from "@testing-library/react";
import {React, Component} from "react";
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router';

import { Redirect } from 'react-router-dom'
import './clue.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Box, Modal, Card, Button, Typography, Grid } from '@mui/material';

class Barcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:"Not Found"
    }
}



  render() {
  return (
    <>
      <BarcodeScannerComponent

        onUpdate={(err, result) => {
          
          if(result) {
            this.state.data = result.text; 
            console.log(this.state.data);
           window.location.href="http://localhost:3000/#story";
          }
          else this.state.data="Not Found";
        }}
      />
    </>
  );
}
}





 export class Clue extends Component{ 
    constructor(props) {
      super(props);
      this.state = {
          open:false
      }
    }
  
    componentDidMount() {
      console.log(this.props);
    }
    handleClose =  () => {
      if(this.state.open)
       this.setState({open: false}, ()=> console.log("close"));
    }

    handleOpen =  () => {
       this.setState({open: true},  ()=>    console.log(this.state.open)
      
       );
    }

  render() {
      return(
          <Grid
          className="app"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh'}}
        >
        
          <Grid item  >
           <Typography fontFamily= 'Varela Round'
variant="h3" textAlign="center" color="white" gutterBottom>
  רמז {this.props.id}
      </Typography>

          </Grid>   
          <Grid item >
           <Card 
style={{  borderRadius: '30',  minWidth: '70vw',marginInline:'2vw' ,marginBottom:'5vh'}}>
           <Typography  fontFamily= 'Varela Round' 
variant="h5" sx={{padding: '2%'}} textAlign="center" color="text.primary" >
             {this.props.clue}
      </Typography>

          </Card>

          </Grid>   
          <Grid item>
          <Button  onClick={() => this.handleOpen()}
variant="contained" style={{  fontFamily:  'Varela Round'
}} size="large" sx={{  backgroundColor: "#8bc34a",
fontSize: 24}}>הגעתי!</Button>
          </Grid>

          <Modal
      open={this.state.open}
      onClose={(_, reason) => reason === 'backdropClick' && this.handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={500}
        height={500} >
        <Barcode/>
      </Box>
    </Modal>
        </Grid> 
      );
  }
}
 
// export default withRouter(Clue);




