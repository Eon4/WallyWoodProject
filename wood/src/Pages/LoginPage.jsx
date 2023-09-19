import style from '../styles/login.module.scss'
import styled from 'styled-components';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../Components/loginContext";
import { Navigation } from '../Components/Navigation'

const SubmitButton = styled.input`
background-color: #D1B3A7;
color: #524641;
border: none;
padding: 10px 20px; /* You can adjust the padding as needed */
cursor: pointer;
border-radius: 5px;
font-weight: bold;
width: 150px; 
`;

export function LoginPage(){

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {setUser} = useContext(LoginContext)

  const onSubmit = (data) => {
    console.log(data);

    const url = "http://localhost:4000/login";

    const body = new URLSearchParams();
    body.append("username", data.username);
    body.append("password", data.password);
 
    const options = {
      metode: "POST",
      body: body,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  return (
    <div>
      <Navigation />
      <form className={style.loginStyle} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Brugernavn:
          <input {...register("username", { required: true })} />
          {errors.username && <span>Feltet skal udfyldes</span>}
        </label>
        <label>
          Password:
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <span>Feltet skal udfyldes</span>}
        </label>
        <SubmitButton type="submit" value="Submit" />
      </form>
    </div>
  )
}