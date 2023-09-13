import style from '../styles/about.module.scss'
import { Navigation } from '../Components/Navigation'
import Star from '../assets/images/starwood.jpg';


export function About(){
    return (
        <div>
        <Navigation /> 
       <section className={style.sectionthing}>

                  {/* <div> */}
          <h1 className={style.abouttext}> Om os</h1>
          {/* </div>          */}

          <p className={style.meretext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed scelerisque ac ipsum sed faucibus. Vivamus mollis 
            sagittis hendrerit. Donec turpis erat, vestibulum non 
            turpis sed, finibus congue velit. Pellentesque sagittis
             est eget nisi malesuada, a aliquet est
              imperdiet. Aenean dapibus finibus laoreet. Pellentesque 
              suscipit hendrerit enim, non tempor erat sodales quis.
               Nullam sed enim eu elit posuere commodo at în nisl. 
               Aliquam egestas turpis vel odio consectetur auctor.

               <br />
                Cras porttitor orci non scelerisque porttitor. Phasellus 
                dictum ligula rutrum neque pharetra, faucibus molestie 
                libero ultricies. Aenean risus risus, sollicitudin at 
                rutrum vel, venenatis ac urna. Phasellus a pulvinar 
                massa. Phasellus faucibus libero eu malesuada tristique. 
                Donec tristique lacus in ipsum sollicitudin viverra. 
                Sed porttitor sit amet felis accumsan egestas. Fusce 
                quis commodo urna, non feugiat odio. Nam in tempus magna.
                 Quisque eu neque sed lacus egestas pulvinar eget in 
                 lacus. Quisque sit amet sem efficitur sapien bibendum 
                 mollis. Quisque in eros sit amet justo scelerisque
                  rutrum. Lorem ipsum dolor sit amet, consectetur 
                    
                  <br />
                  adipiscing elit. Sed scelerisque ac ipsum sed faucibus.
                   Vivamus mollis sagittis hendrerit. Donec turpis erat, 
                   vestibulum non turpis sed, finibus congue velit. 
                   Pellentesque sagittis est eget nisi malesuada, 
                   a aliquet est imperdiet. Aenean dapibus finibus 
                   laoreet. Pellentesque suscipit hendrerit enim, 
                   non tempor erat sodales quis. Nullam sed enim eu 
                   elit posuere commodo at în nisl.</p>

                   <img className={style.star} src={Star} alt="star img" />
                   </section>


        </div>
      

    )
}