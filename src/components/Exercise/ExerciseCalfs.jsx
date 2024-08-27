import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseCalfs() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Calf</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                   
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/C7qnbmpLNGI?si=4APjNnDXxPJgcKxX&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>calfs raises</span>
                            <p>exercise listed in video can done for calf any 2 ,but size of calf depends on your genetics💀.</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    



                </div>
            
            </div>


        </>
  )
}
