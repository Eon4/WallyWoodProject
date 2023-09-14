import style from '../styles/posters.module.scss'
import { Navigation } from '../Components/Navigation'
import { AsideGenres } from "../Components/AsideGenres";




export function Posters(){
    return (
        <div>

        <Navigation /> 
      
                           
          <h1 className={style.postertext}> This is the poster page</h1>

          <section className={style.plakater}>
            {/* <Headline>Plakater</Headline> */}
            <AsideGenres/>
        </section>

        </div>

    )
}