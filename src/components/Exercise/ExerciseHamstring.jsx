import React from 'react'
import '/src/css/Exercise.css'
export default function ExerciseHamstring() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Hamstring</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                   
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/LtTcXXgeRYo?si=S5KLp5sQLqgTQaYb&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>hamstring curls</span>
                            <p>keep your upper body at certain height to get stretch and tension on the hamstring</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/9eOchp1GB1s?si=hif2x6dMWNI2HmJO&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>sumo</span>
                            <p>keep your stance wide and go deep to get full tension on hamstring.</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/exReeOhZQ-E?si=pdynIfJ2gH6ipqYO&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>lunges</span>
                            <p>perform ech leg one by one, start with light weight.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>



                </div>
            
            </div>


        </>
  )
}
