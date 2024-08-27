import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseLats() {
  return (
    <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Latissimus dorsi (Lats)</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>Note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                    <div className="card__expander-g">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>to increase strength you can do pull-ups start with 5-7 pull-ups (straps can help) </p>
                    </div>
                    
                    
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/_97pmOC2tzE?si=3_q2ENjDvxBvyB-h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>lat pull down</span>
                            <p>while performing keep focus on your back at stretch position feel the stretch on your lats(open lats) and at contraction hold it for a second.</p>
                            <p>imagine you are pulling weight through elbows ,you can use straps(not recommended for beginners)</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe  className='vid' width="453" height="245" src="https://www.youtube.com/embed/IjcDCVPChB8?si=9JFACvi2QGUCsrh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>seated rows</span>
                            <p>This exercise targets your lats</p>
                            <p>keep your chest out and back straight imagine you're pulling handle towards your stomach and hold in contract position.</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 12-10-8</p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                        <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/fKtVcKKtKM0?si=UAjeAaJwVBB6mU32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span>lats push down</span>
                            <p>This exercise targets lats</p>
                            <p>keep your hands lock in same position slowly pull band down and hold for 2-3 seconds.</p>
                            <p>sets: 3-4 </p>
                            <p>repetition: 15-12-10</p>
                        </div>
                    </div>



                </div>
            </div>


        </>
  )
}
