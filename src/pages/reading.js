import React from "react";
import Layout from "../components/layout";

export default function reading() {
    return (
        <div>
            <Layout>
                <h2 className="book-progress">In Progress &uarr;</h2>

                <div className="grids">
                    <div class="book-card">
                        <div className="book-card__image">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.amazon.ca/Humble-Pi-Comedy-Maths-Errors/dp/0141989149/ref=sr_1_2?dchild=1&keywords=humble+pi&qid=1612896840&sr=8-2"
                            >
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/71bnRAByN3L.jpg"
                                    alt="first book"
                                />
                            </a>
                        </div>
                        <div className="book-card__title">
                            Humble Pi: A Comedy of Maths Errors
                        </div>
                        <div className="book-card__author">by Matt Parker</div>
                    </div>
                    <div class="book-card">
                        <div className="book-card__image">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.amazon.ca/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X/ref=sr_1_1?crid=HFVFPR8MM1SM&dchild=1&keywords=computer+systems+programmer%27s+perspective+3%2Fe&qid=1612897125&sprefix=computer+system+a+programm%2Caps%2C-1&sr=8-1"
                            >
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/81ZugrP5S3L.jpg"
                                    alt="second book"
                                />
                            </a>
                        </div>
                        <div className="book-card__title">
                            Computer Systems: A Programmer's Perspective (3rd
                            Edition)
                        </div>
                        <div className="book-card__author">
                            by Randal E. Bryant, David R. O'Hallaron
                        </div>
                    </div>

                    <div class="book-card">
                        <div className="book-card__image">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.amazon.ca/Release-Design-Deploy-Production-Ready-Software/dp/1680502395/ref=sr_1_1?dchild=1&keywords=Release+It%21%3A+Design+and+Deploy+Production-Ready+Software&qid=1612897842&sr=8-1"
                            >
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/711kreNLLNL.jpg"
                                    alt="third book"
                                />
                            </a>
                        </div>
                        <div className="book-card__title">
                            Release It!: Design and Deploy Production-Ready
                            Software
                        </div>
                        <div className="book-card__author">
                            by Michael T. Nygard
                        </div>
                    </div>
                </div>

                <h2 className="book-completed">Completed</h2>

                <ul className="completed-books">
                    <li>
                        <a
                            href="https://www.amazon.ca/12-Rules-Life-Antidote-Chaos/dp/0345816021/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            12 Rules for Life: An Antidote to Chaos - Jordan
                            Peterson
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.amazon.ca/Beating-Street-Peter-Lynch/dp/0671891634/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Beating the Street - Peter Lynch
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.amazon.ca/Objectivism-Philosophy-Rand-Leonard-Peikoff/dp/0452011019"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Objectivism: The Philosophy of Ayn Rand - Leonard Peikoff
                        </a>
                    </li>
                </ul>

            </Layout>
        </div>
    );
}
