import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseBiceps() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Biceps</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/pXS-fSPWpk8?si=FSxM3ZBbpNNRIxS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>biceps curls</span>
                            <p>This exercise targets your biceps </p>
                            <p>while performing lock your elbows means do not move the part above the elbow and keep concentration on your biceps.</p>
                            <p>with the help of resistance band you can easily perform this exercise to grow your biceps.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/osTYcC1O5TE?si=oo5Cw82UOud_lrPz&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>concentration curls</span>
                            <p>This exercise will target your biceps </p>
                            <p>while performing focus on your biceps and try to improve mind muscle connection.</p>
                            <p>with the help of resistance band you can easily perform this exercise to grow your biceps.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/9b847EGg-cs?si=tPkLx394ehD_foDr&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>Hammer curls</span>
                            <p>This exercise will target your biceps & forearms</p>
                            <p>while performing lock your elbows means do not move the part above the elbow and keep concentration on your biceps. </p>
                            
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                </div>
            </div>


        </>
  )
}
