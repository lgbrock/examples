import React from 'react';
import { useForm } from 'react-hook-form';
import './newUserForm.css';

const NewUserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Phone Number" {...register("Phone Number", { required: true, maxLength: 12 })} />
            <input type="text" placeholder="Company" {...register("Company", {})} />
            <textarea {...register("Message", {})} />

            <input type="submit" />
        </form>
    );
}

export default NewUserForm