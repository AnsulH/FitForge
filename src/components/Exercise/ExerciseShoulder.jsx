import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseShoulder() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Shoulder</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/aWZUEr7Jfx0?si=1o44aNs9vt8CwJfw&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>lateral raises</span>
                            <p>this exercise targets your middle deltoids </p>
                            <p>As you perform the exercise, lift your hands to shoulder level, focusing on pulling the weight through your elbows.</p>
                            <p>To increase muscle tension, lean slightly forward. Use proper form and stick to light weights for best results.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/S_t_p8QEPAc?si=6GdikISyhvHND-lA&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>front raises</span>
                            <p>This exercise targets your front deltoids (shoulder)</p>
                            <p>perform this exercise same as the lateral raises.</p>
                            <p>to generate more tension on muscle lean slightly forward. Use proper form and stick to light weights for best results.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/Ky8S6SCcyxI?list=PLhZGlihjTK9qNVYO0xEaPJk_QFW9e2SZn" title="How To Do Shoulder Press With Resistance Band | Shoulder Workout | Fitness My Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>shoulder press</span>
                            <p>This exercise targets your shoulder </p>
                            <p>While performing, maintain body balance and keep your elbows slightly forward from your chest, as if forming an arrow with your arms. Hold the position for 1-2 seconds to maximize tension.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
