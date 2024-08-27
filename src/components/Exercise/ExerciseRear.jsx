import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseRear() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Rear Delts</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/JBpj9-3tP0c?list=PLhZGlihjTK9qNVYO0xEaPJk_QFW9e2SZn" title="How To Do Face Pull With Resistance Band | Upper Back &amp; Rear Delts Workout | Fitness My Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>face pull</span>
                            <p>This exercise targets your rear deltoids (shoulder) </p>
                            <p>while performing maintain body balance and try to pull the band toward your forehead.</p>
                            <p>hold the position for 1-2 sec to feel the tension.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/LwUgi7KCjRQ?si=h2Ilht5k8Ro4tp0s&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>rear delts flys</span>
                            <p>This exercise targets your rear deltoids (shoulder) </p>
                            <p>while performing keep your body stable and perform it slowly while feeling the muscle.</p>
                            <p>sets: 3 </p>
                            <p>repetition: 15-12-10</p>
                        </div>
                    </div>

                    
                </div>
            
            </div>


        </>
  )
}
