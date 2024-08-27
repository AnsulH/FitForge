import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseInnerthigh() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Inner Thighs</h2>
                </div>

                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/9cnUauthNYA?si=7E9dOW_ZyZvBReyn&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>adductor</span>
                            <p>This exercise targets your innerthighs</p>
                            <p>keep your body stable and slowly perform the exercise.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 20-18-15 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/hxfj9hZ-ekQ?si=qeoS6U9tHpzi47ua&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>inner thigh</span>
                            <p>This exercise targets your inner thigh</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>


                </div>
            </div>


        </>
  )
}
