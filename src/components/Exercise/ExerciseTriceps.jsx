import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseTriceps() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Triceps</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/UfUV19KPi_I?si=8GbfCalG3nuzzJke&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>triceps push down</span>
                            <p>This exercise targets your triceps</p>
                            <p>while performing keep your elbows lock, at stretch position hold it for 1sec to feel the triceps.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/MUIMkb47fdg?si=s8TMCfw6AbqK-I31&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>overhead triceps extension</span>
                            <p>This exercise targets your rear triceps</p>
                            <p>keep your elbows lock and do not spread your elbow outward and slowly perform exercise.</p>
                            <p>sets: 3 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/JhX1nBnirNw?si=1FuDUgrYxMgTEo-4&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>tricep dips</span>
                            <p>This exercise targets your rear triceps</p>
                            <p>keep your back straight and going too deep will create tension on shoulders.</p>
                            <p>sets: 3 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/XtU2VQVuLYs?si=X4TxEDGw5VWGmokn&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>diamond push-ups</span>
                            <p>This exercise targets your rear triceps</p>
                            <p>keep your elbows lock and do not spread your elbow outward and slowly perform exercise.</p>
                            <p>sets: 3 </p>
                            <p>repetition: 10-8-5</p>
                        </div>
                    </div>


                </div>
            
            </div>


        </>
  )
}
