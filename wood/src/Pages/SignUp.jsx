import { useForm } from "react-hook-form";
import style from '../styles/signup.module.scss'
import styled from 'styled-components';
import { Navigation } from '../Components/Navigation'


const SubmitButton = styled.input`
background-color: #D1B3A7;
color: #524641;
border: none;
padding: 10px 20px;
cursor: pointer;
border-radius: 5px;
font-weight: bold;
width: 150px; 

`;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const url = "http://localhost:4000/users"

    const body = new URLSearchParams()
    body.append('firstname', data.firstname)
    body.append('lastname', data.lastname)
    body.append('email', data.email)
    body.append('password', data.password)
    body.append('org_id', '1')
    body.append('is_active', '1')

    const options = {
        metode: "POST",
        body: body
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))

  };
  return (
    <>
          <Navigation />

    
    <form className = {style.signupStyle} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Fornavn:
        <input {...register("firstname", { required: true })} />
        {errors.firstname && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Efternavn:
        <input {...register("lastname", { required: true })} />
        {errors.lastname && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Feltet skal udfyldes</span>}
      </label>
      <SubmitButton type="submit" value="Submit" />
    </form>
</>
  );
};