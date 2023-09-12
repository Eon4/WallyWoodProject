import style from "../styles/footer.module.scss";
import iconface from '../assets/images/face-icon.png';
import iconpint from '../assets/images/pint.png';
import iconinsta from '../assets/images/insta.png';
import icontweet from '../assets/images/twitter.png';



export function Footer() {
  return (
    <footer className={style.autoFlow}>
      <article>
        <h2>WALLYWOOD</h2>
        <p>
          Øster Utrrupvej 1 <br />
          9000 Aalborg <br />
        </p>
      </article>
      <article>
        <p>CVR: 12345678</p>
        <p>
          MAIL: Info@plakatshoppendk<br />
          MOBIL: +45 9812 3456
        </p>
      </article>
      <article>
        <img className={style.icons} src={iconpint} alt="Logo/link to Facebook" />
        <img className={style.icons} src={iconinsta} alt="Logo/link to Facebook" />
        <img className={style.icons} src={iconface} alt="Logo/link to Facebook" />
        <img className={style.icons} src={icontweet} alt="Logo/link to Facebook" />
    
      </article>
    </footer>
  );
}
