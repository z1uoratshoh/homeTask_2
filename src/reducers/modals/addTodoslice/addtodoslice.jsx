import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import React, { useTransition } from 'react'

import { addDialog } from "../../todo/todoSlice"

console.log(addDialog);


const Addtodo = () => {
    
  return (
    <div>
      <Dialog
open={addDialog}
TransitionComponent={Transition}
keepMounted
onClose={handleClose}
aria-describedby="alert-dialog-slide-description"
>
<DialogTitle>{"Use Google's location service?"}</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-slide-description">
    Add User
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose}>Disagree</Button>
  <Button onClick={handleClose}>Agree</Button>
</DialogActions>
</Dialog>
    </div>
  )
}

export default Addtodo
