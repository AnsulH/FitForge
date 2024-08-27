import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseForearms() {
  return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Forearms</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/Z64A_Q2aG3U?si=OvS2oTGG-6cAFMTt&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>Wrist curls</span>
                            <p>This exercise targets your forearms</p>
                            <p>while performing this make sure to lock your elbows and only move your wrist.</p>
                            <p>keep doing until you feel burn in forearms.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/JR1K02b0O2s?si=QFPiLi5dPIXqA0CD&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>reverse wrist curls</span>
                            <p>This exercise targets your forearms</p>
                            <p>while performing this only move your wrist and keep doing it until you feel the burn.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/JL--tgGVzMI?si=jEO9Ts6GdQ1QEcGH&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>reverse curls</span>
                            <p>This exercise targets your forearms </p>
                            <p>this exercise is like biceps curls but in this due to underarm grip you will feel it on forearm and also on biceps.</p>
                            <p>make sure you lock the elbows.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>


                </div>
            
            </div>


        </>
  )
}
