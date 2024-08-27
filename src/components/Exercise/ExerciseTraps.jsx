import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseTraps() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Trapezius (traps)</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/0DVlHlwRViQ?si=-FaIxnvs3fAS05jG&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>shrugs</span>
                            <p>This exercise targets your Trapezius (traps)</p>
                            <p>start by leaning slightly forward. Focus on lifting your shoulders upward while keeping your arms still, using your hands as hooks.</p>
                            <p>Hold the position for 1-2 seconds to feel the tension in your traps.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    
                </div>
            
            </div>


        </>
  )
}
