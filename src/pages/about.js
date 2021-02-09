import React from 'react'
import Layout from '../components/layout'

export default function about() {
    return (
        <div>
            <Layout>
                <section className="about-me-content">
                    <h1>About Me</h1>
                    <div className="about-wrap">
                    <img className="about-pic" src={require('../images/aboutpic.jpeg')} alt="me in novascotia"/>
                        <p>I'm <a href="https://www.linkedin.com/in/safderaree/">Safder Areepattamannil</a>. I live in Toronto, Canada and grew up in the small town of Kingston, Ontario. I have been a Software Engineer for a year
                            but have been coding for around 7 years in total. I currently work in the consulting industry developing enterprise applications for large
                            financial clients. I got started in programming when I was 18 years old developing numerical computing programs for my Physics classes, this was all
                            in Python. I am comfortable in a few languages now including Javascript, C++, Java and C#.
                        </p>
                        
                    </div>
                    <p>This blog will about technology, code, culture and future trends. I am mostly interested in distributed systems and software architecture and how all the pieces fit into the big picture. You'll find me most weekends throwing
                       together random pieces of code and prototyping random ideas from data pipelines for my home server to web applications. I am fascinated by the range of topics 
                       in software engineering and always end up finding myself stuck on what to learn next.</p>

                    <ul>
                        <li>In 2019, graduated from the University of Toronto with a degree in Mathematics and Physics.</li>
                        <li>In 2020, started working at Slalom Consulting. Started developing Trailless, an ephemeral filesharing application (to be released soon) with
                            my close friend <a href="https://github.com/nikzt">Bence Linder</a>. </li>
                        <li>In 2021, started this blog to be able to write down my thoughts and share all the problems and tricks that I have picked up along the way. Also, I believe writing is an invaluable skill which 
                            I could brush up on, so hopefully pushing out content will help.
                        </li>
                    </ul>

                    <h3>Current Projects</h3>
                    <ul>
                        <li>Trailless - Ephemeral storage </li>
                        <li><a href="https://github.com/safderareepattamannil/stord-frontend/" target="_blank" rel="noopener noreferrer">Stord -</a>A self hosted media management software for your home cloud</li>
                    </ul>
                    <h3>How can I contact you?</h3>
                    <a href="mailto:safderareepattamannil@gmail.com">safderareepattamannil@gmail.com</a>
                
                </section>

            </Layout>
        </div>
    )
}
