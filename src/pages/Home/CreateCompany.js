import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { API } from "../../services/api";

const CreateCompany = ({ refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useMutation(async (payload) => {
    await API.createCompany(payload)
      .then((res) => {
        toast.success("Kompaniya yaratildi!");
        refetch();
        reset();
      })
      .catch((err) => {
        console.log("Kompamiya yaratilmadi", err);
        toast.error("Xalolik yuzberdi!");
      });
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Wrapper>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Kompaniya yaratish
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Kompaniya nomi"
          {...register("name", { required: true, maxLength: 80 })}
        />
        <input type="submit" />
      </form>
    </Wrapper>
  );
};

export default CreateCompany;

const Wrapper = styled.div`
  input {
    height: 40px;
    margin-right: 10px;
    border: 1px solid lightcoral;
    border-radius: 5px;
    padding: 0px 5px;
    width: 300px;
  }
  input:last-child {
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 0;
    width: 100px;
    cursor: pointer;
  }
`;
