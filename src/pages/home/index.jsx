import React from 'react'
import animation from '../../assets/img/animation.gif'

function Index() {
    return (
        <section className="home-section" >
            <figure>
                <img src={animation} alt="" />
            </figure>
            <article>
                <h1>YASIN BURAK KALKAN</h1>
                <h2>Senior Front-End Developer at Formalis. from Turkey.</h2>
            </article>
        </section>
    )
}

export default Index;