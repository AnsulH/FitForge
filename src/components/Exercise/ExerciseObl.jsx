import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseObl() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">obliques</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/vGdfWU9OyOI?si=KjdJPVzh7KAvuZjO&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>wood chopper</span>
                            <p>This exercise targets your obliques</p>
                            <p>keep your body steady and core tight.</p>
                            <p>slowly twist to feel the core.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 40-50 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/L1rt7qr5LCk?si=KnFjeFOdHqi4nsLI&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>hanging obliques knee raise</span>
                            <p>This exercise targets your obliques</p>
                            <p>you can use straps to increase hanging time.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 20-30 </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
  )
}
