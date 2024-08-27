import React from 'react'
import '/src/css/Exercise.css'

function ExerciseAT() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Anterior Tibialis</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe  className='vid' width="453" height="245" src="https://www.youtube.com/embed/VzIcGAgBiaM?si=9ruQhffGWGfxF2Xy&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>tibialis wall raises</span>
                            <p>This exercise tragets your legs</p>
                            <p>sets: 3 </p>
                            <p>repetition: 20-18-15</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/tc-k7hhAMbY?si=L0zFYxGgTt-SO-8N&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>tibialis</span>
                            
                            <p>sets: 3 </p>
                            <p>repetition: 15-12-10</p>
                        </div>
                    </div>

                    
                </div>
            
            </div>


        </>
  )
}

export default ExerciseAT