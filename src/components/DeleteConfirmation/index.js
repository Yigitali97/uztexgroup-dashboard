import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Wrapper } from "./style";

const DeleteConfirmation = ({ data, mutate }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteConfirm = () => {
    mutate(data);
    setOpen(false);
  };

  return (
    <Wrapper>
      <button onClick={handleClickOpen} className="open-button">
        <DeleteIcon color="error" />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Oʻchirish</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ushbu ma'lumotni oʻchirib tashlamoqchimisiz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Yo'q</Button>
          <Button onClick={handleDeleteConfirm} className="confirm-btn">
            Ha
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default DeleteConfirmation;
