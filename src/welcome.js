
import React,{useState} from 'react';
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
  const [openComponents, setOpenComponents] = useState(false);

  const handleClickOpenComponent = () => {
    setOpenComponents(true);
  };

  const handleCloseComponent = () => {
    setOpenComponents(false);
  };
  const [openPages, setOpenPages] = useState(false);

  const handleClickOpenPages = () => {
    setOpenPages(true);
  };

  const handleClosePages = () => {
    setOpenPages(false);
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
        <button onClick={handleClickOpenComponent} className="welcome-buttons">
         <a className="btn btn-outline-blue btn-xl text-uppercase resp-button">Components</a>
         </button>
         <Dialog
        open={openComponents}
        onClose={handleCloseComponent}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"What Are Components?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Componenets are the reusable building blocks of my design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences.This includes guidance on accordions, buttons, cards and navigation
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseComponent} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
         <button onClick={handleClickOpenPages} className="welcome-buttons">
         <a  className="btn btn-outline-blue btn-xl text-uppercase resp-button">Pages</a>
         </button>
         <Dialog
        open={openPages}
        onClose={handleClosePages}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"What Are Pages?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Pages are reusable combinations of components that solve common user problems. These best practice solutions help users achieve their goals and help ensure consistency across experiences.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePages} color="primary">
            Got It!
          </Button>
        </DialogActions>
      </Dialog>
         </div>
      </header>
    )
}

export default Welcome
