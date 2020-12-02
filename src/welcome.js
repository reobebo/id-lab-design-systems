import { render } from '@testing-library/react';
import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import './scss/main.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const Welcome = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
    return (
        <header className="welcome-header">
        <h1>{props.name}</h1>
        <h4>{props.description}</h4>
        <div className="welcome-buttons-section">
          <button onClick={handleClickOpen} className="welcome-buttons">
        <a className="btn btn-outline-blue btn-xl text-uppercase resp-button">Foundations</a>
        </button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"What Are Foundations?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Foundations are the visual elements needed to create engaging end-to-end user experiences. This includes guidance on logo/iconography, typography, and color.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
        <button className="welcome-buttons">
         <a target="_blank" className="btn btn-outline-blue btn-xl text-uppercase resp-button">Components</a>
         </button>
         <button className="welcome-buttons">
         <a target="_blank" className="btn btn-outline-blue btn-xl text-uppercase resp-button">Pages</a>
         </button>
         </div>
      </header>
    )
}

export default Welcome
