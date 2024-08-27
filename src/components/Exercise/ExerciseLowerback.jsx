import React from 'react'
import '/src/css/Exercise.css'
export default function ExerciseLowerback() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Lower Back</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    <div className="card__expander-g">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>as a beginner you should focus on form and not on weight and also you can skip dead lifts</p>
                    </div>
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/AweC3UaM14o?si=pMDDl2BlJ_O9oxDL&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>dead lifts</span>
                            <p>while performing it is very important to maintain the form.</p>
                            <p>keep the bar close to legs, back straight, engage your lats and slowly lift the weight, dont lift your hips first.</p>
                            <p>sets: 3-4 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/obM6SBVa-MU?si=1Rlp-KFyvgYDricJ&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>dead lifts using resistance bands</span>
                            <p>This exercise targets your lower back</p>
                
                            <p>sets: 3-4 </p>
                            
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/ENXyYltB7CM?si=Ta2f1zi6UIgpJ7Y7&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>back extension</span>
                            <p>This exercise targets lower back</p>
                        
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>



                </div>
            
            </div>


        </>
  )
}
