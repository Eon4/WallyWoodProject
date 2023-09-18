import style from '../styles/contact.module.scss'
import { Navigation } from '../Components/Navigation'
import { useForm } from "react-hook-form";
import { Footer } from "../Components/Footer";



export function Contact(){


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  
    return (
        <div>
        <Navigation /> 
       
                           
          <h1 className={style.contacttitle}>Kontakt os</h1>

          <form className={style.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Dit navn:
          <input
            {...register("fullName", { required: true, maxLength: 15 })}
            // placeholder="Enter your fullname here"
          ></input>
        </label>
        {errors.fullName && <span>Vær venlig at udfylde dette felt.</span>}


        <label>
          Din email:
          <input
            {...register("emailRequired", { required: true })}
            // placeholder="Enter your email here"
          ></input>
        </label>
        {errors.emailRequired && <span>Venligst udfyld dette felt.</span>}
        
        <h3>Din besked:</h3>
        <textarea
          rows="4"
          cols="50"
          name="comment"
        ></textarea>

        <input className={style.send} type="submit" value={"Send"}></input>

      </form>
      <Footer />

        </div>

        

    )
}