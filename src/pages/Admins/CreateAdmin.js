import { Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { API } from '../../services/api';

const CreateUser = ({refetch}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const {mutate}  = useMutation(async (payload) => {
        await API.createUser(payload).then(res => {

            refetch()
            reset()
            console.log();
        }).catch(err => console.log("Admin yaratilmadi"))
    })

    const onSubmit = data => {
        mutate(data)
        
    };
 

  return (
    <Wrapper>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Admin yaratish
        </Typography>
    
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className='input' type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      <input className='input' type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
      <input className='input' type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className='input' type="text" placeholder="Password" {...register("password", {required: true})} />

      <input type="submit" />
    </form>
    </Wrapper>
  )
}

export default CreateUser


const Wrapper = styled.div`
input {
  height: 35px;
  margin-right: 10px;
  border: 1px solid lightcoral;
  border-radius: 8px;
  padding: 0px 5px;
}
/* input:required:focus{
  border: 1px solid red;
} */
input:last-child {
  background-color: lightgreen;
  padding: 0;
  width: 100px;
  cursor: pointer;
}
`