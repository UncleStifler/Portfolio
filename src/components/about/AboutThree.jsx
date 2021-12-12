import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const AboutThree = () => {
    return (
        <>
            <section id="about" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div
                            className="col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        <img src="img/about/about-me-3.jpg" alt="about image"/>
                                    </div>
                                    <Social/>
                                    {/* End social icon */}
                                </div>
                                {/* End img */}
                                <div className="info">
                                    <p>Front-end React.ts Developer</p>
                                    <h3>Alexey Nikolaenko</h3>
                                </div>
                                {/* End info */}
                            </div>
                            {/* End about-me */}
                        </div>
                        {/* End col */}

                        <div
                            className="col-lg-7 ml-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <div className="about-info">
                                <div className="title">
                                    <h3>Biography</h3>
                                </div>
                                <div className="about-text">
                                    <p>
                                        I'm a front-end developer, at the moment I'm actively learning to create SPA
                                        applications of any
                                        complexity using the following stack of technologies: React.js/ Redux /
                                        TypeScript.
                                        The next stages of learning that interest me are React Native and Node.js,
                                        because
                                        I see myself as a Full-stack developer.
                                    </p>
                                    <p>
                                        I'm a front-end developer, at the moment I'm actively learning to create SPA
                                        applications of any
                                        complexity using the following stack of technologies: React.js/ Redux /
                                        TypeScript.
                                        The next stages of learning that interest me are React Native and Node.js,
                                        because
                                        I see myself as a Full-stack developer.
                                    </p>
                                </div>
                                <div className="info-list">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Name: </label>
                                                    <span>Alexey Nikolaenko</span>
                                                </li>
                                                <li>
                                                    <label>Birthday: </label>
                                                    <span>22th November 1987</span>
                                                </li>
                                                <li>
                                                    <label>Age: </label>
                                                    <span>34 years</span>
                                                </li>
                                                <li>
                                                    <label>Address: </label>
                                                    <span>Barcelona</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Phone: </label>
                                                    <span>(+34) 698-609-855</span>
                                                </li>
                                                <li>
                                                    <label>Email: </label>
                                                    <span>ambalexey@gmail.com</span>
                                                </li>
                                                <li>
                                                    <label>Skype: </label>
                                                    <span>alexeynikolaenko</span>
                                                </li>
                                                <li>
                                                    <label>Front-end React.ts Developer: </label>
                                                    <span>Available</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End col */}
                    </div>

                    {/* separated */}
                    <div
                        className="separated"
                        style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "img/border-dark.png"
                            })`,
                        }}
                    />
                    {/* End separated */}
                    <div className="title">
                        <h3>What I do?</h3>
                    </div>
                    <Services/>
                    {/* End .row */}

                    {/* separated */}
                    <div
                        className="separated"
                        style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "img/border-dark.png"
                            })`,
                        }}
                    />
                    {/* End separated */}

                    <div className="title">
                        <h3>Awards.</h3>
                    </div>
                    <Awards/>
                    {/* End Awards */}

                    {/* separated */}
                    <div
                        className="separated"
                        style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "img/border-dark.png"
                            })`,
                        }}
                    />
                    {/* End separated */}

                    <div className="title">
                        <h3>Testimonials.</h3>
                    </div>
                    <Testimonials/>
                    {/* End Testimonaial */}
                </div>
            </section>
        </>
    );
};

export default AboutThree;
