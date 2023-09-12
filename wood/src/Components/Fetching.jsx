import { useEffect, useState } from "react";
import style from '../styles/fetching.module.scss'
 
export function Fetching() {
  const [ posters, setPosters ] = useState([])
  const [ slicedPoster, setSlicedPoster] = useState()

  useEffect(() => {
      const url = "http://localhost:4000/poster/list?limit=2"
      fetch(url).then(res => res.json()).then(data => setPosters(data))
      
  },[])
  // posters.slice(0,1) 

  console.log("There is a poster here",posters);

  return(
      <section>
          <div className = {style.posterthiny}>
              {
                  posters?.map((item, index) => {
                      return(
                          <figure className = {style.figur} key={index}>
                              <img className = {style.images} src={item.image} alt="" />
                              <figcaption>
                                  <h3 className = {style.postertitle}>{item.name}</h3>
                                  {/* <OnClickButton clickEvent={() => alert('Du har klikket')} text={"Læs mere"}/> */}
                              </figcaption>
                          </figure>
                      )
                  } )
              } 
          </div>

          
          
      </section>
  )    
}