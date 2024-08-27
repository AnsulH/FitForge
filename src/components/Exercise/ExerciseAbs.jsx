import React from 'react'
import '/src/css/Exercise.css'
export default function ExerciseAbs() {
  return (
    
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Abdominal(Abs)</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/Xyd_fa5zoEU?si=ulUZQ9yFnbnXjRz-&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>crunches</span>
                            <p>This exercise tragets your abdominis (abs)</p>
                            <p>to feel the tension hold for some second and increase the no. of repetition (30-40).</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 30-40</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/pvIjsG5Svck?si=xEQOWD0WfECDQkUn&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>planks</span>
                            <p>This exercise tragets your abdominis (abs)</p>
                            <p>hold the plank position as long as you can hold it (start with 40-60sec).</p>
                            <p>sets: 2-3 </p>
                            
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/Wp4BlxcFTkE?si=TWvOQtY_EHEUSdsL&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>legs raises</span>
                            <p>This exercise tragets your abdominis (abs)</p>
                            <p>perform like shown in the video</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 30-40</p>
                        </div>
                    </div>                    

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/ZrtLyuY-0L4?si=HCMmqncRQXp_6_z7&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>cable crunches</span>
                            <p>This exercise tragets your abdominis (abs)</p>
                            <p>get on your knees to get tension on your abs while moving down contract your abs and hold it for 2-3 sec to feel the burn.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 40-50</p>
                        </div>
                    </div>
                </div>
            
            </div>


        </>
  )
}
