import { TextField, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { API } from '../../services/api';

const CreateAdmin = ({refetch}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const {mutate}  = useMutation(async (payload) => {
        await API.createAdmin(payload).then(res => {

            refetch()
            reset()
            console.log();
        }).catch(err => console.log("Admin yaratilmadi"))
    })

    const onSubmit = data => {
        mutate(data)
        
    };
 

  return (
    <div>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Admin yaratish
        </Typography>
    
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Password" {...register("password", {required: true})} />

      <input type="submit" />
    </form>
    </div>
  )
}

export default CreateAdmin