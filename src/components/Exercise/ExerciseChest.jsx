import React from 'react'
import '/src/css/Exercise.css'

export default function ExerciseChest() {
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">EXERCISES</h1>
                    <h2 className="header__subtitle">Chest</h2>
                </div>
                <div className="cards">
                    <div className="card__expander">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>note:- warm up is important before starting your exercise to stay injury free and it helps to lift weight easily</p>
                    </div>
                    <br></br>
                   
                    <div className="card__expander-g">
                        <i className="fa fa-close [ js-collapser ]" />
                        <p>try to do push-ups to increase strength, if you are beginner start with inclined push-ups then try noraml push-ups if it feels easy then go for declined push-ups.</p>
                    </div>
                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                            {/* <video src='https://youtube.com/shorts/inXJ0CiLoYU?si=OeOpHyOYX5jHBATN' width="400px" autoPlay ></video> */}
                            <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/RzJMbxUEP9c?si=yeSf3n5pFxzt2hA2" title="YouTube video player" frameborder="0" autoplay muted></iframe>
                            <span>UPPER CHEST</span>
                            <p>This exercise is designed for upper chest </p>
                            <p>Using a resistance band, you can effectively work on chest growth. As you perform, focus on your upper chest, pulling the band with locked arms and contracting your chest at the top position.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                            {/* <video src='https://youtube.com/shorts/inXJ0CiLoYU?si=OeOpHyOYX5jHBATN' width="400px" autoPlay ></video> */}
                            <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/Rn-hf5iauTc?si=_G5HfLUc5bQCUtVA" title="YouTube video player" frameborder="0" autoplay muted></iframe>
                            <span>MIDDLE CHEST</span>
                            <p>This exercise will target your entire chest </p>
                            <p>with the help of resistance band you can effectively work on chest growth.</p>
                            <p>while performing focus on your chest try to spread your arms and feel that stretch on your chest.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                    <div className=" card [ is-collapsed ] ">
                        <div className="card__inner [ js-expander ]">
                            {/* <video src='https://youtube.com/shorts/inXJ0CiLoYU?si=OeOpHyOYX5jHBATN' width="400px" autoPlay ></video> */}
                            <iframe className='vid' width="453" height="245" src="https://www.youtube.com/embed/91Jatv286xs?si=0c3ntRyRzwsrevEb" title="YouTube video player" frameborder="0" autoplay muted></iframe>
                            <span>lower CHEST</span>
                            <p>This exercise will target your lower chest </p>
                            <p>with the help of resistance band you can effectively work on chest growth.</p>
                            <p>As you perform, concentrate on your lower chest, aiming to bring your hands together during the contraction.</p>
                            <p>sets: 2-3 </p>
                            <p>repetition: 12-10-8 </p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

