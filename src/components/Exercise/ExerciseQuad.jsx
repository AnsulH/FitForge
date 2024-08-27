import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseQuad() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Quadriceps(Quad)</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    <div className="card__expander-g">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>if you are a beginner the start with squats without any weight and after some time shift to weightes squats</p>
                    </div>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/duP-UZsfOaQ?si=bdNVdjaIWh35Ci48&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>squats</span>
                            <p>This exercise tragets your legs</p>
                            <p>take shoulder width stance keep your toes pointing outward for stability .</p>
                            <p>take deep breath, hold it and go down (imagine their is water upto your chest and breath like that).</p>
                            <p>sets: 3 </p>
                            <p>repetition: 20-18-15</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/t6BOZqBny-Q?si=JhkIt5Tzbf7ehYVb&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>Leg extension</span>
                            <p>This exercise tragets your legs</p>
                            <p>take strong grip of the chair and slowly list your while feeling the weight.</p>
                            <p>sets: 3 </p>
                            <p>repetition: 25-20-18</p>
                        </div>
                    </div>

                    
                </div>
            
            </div>


        </>
  )
}
