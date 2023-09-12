import style from '../styles/posters.module.scss'
import { Navigation } from '../Components/Navigation'



export function Posters(){
    return (
        <div>

        <Navigation /> {/* Include the Navigation component */}
      
                           
          <h1 className={style.h1style}> This is the poster page</h1>


        </div>

    )
}