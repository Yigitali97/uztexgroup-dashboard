import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { useMutation } from "react-query";
import { API } from "../../services/api";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ data, refetch }) {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState(data);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (key, value) => {
    setDetails((prevState) => ({ ...prevState, [key]: value }));
  };

  const { mutate } = useMutation(async (payload) => {
    await API.updateUser(payload)
      .then((res) => {
        refetch();
        toast.success("Malumot yangilandi!");
        handleClose();
      })
      .catch((err) => {
        // console.log("Update User Failed")
        toast.error("Malumot yangilashda xatolik yuzberdi!");
      });
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(details);
    // console.log(details);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={onSubmit}>
            <input
              className="input"
              type="text"
              placeholder="First name"
              value={details.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Last name"
              value={details.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              value={details.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <input type="submit" />
          </Form>
        </Box>
      </Modal>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  .input {
    width: 49%;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 6px;
  }
  input:last-child {
    background-color: lightgreen;
    border: none;
    padding: 5px 20px;
    border-radius: 6px;
    width: 49%;
    cursor: pointer;
  }
`;
