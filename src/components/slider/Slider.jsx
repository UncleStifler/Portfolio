import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
    phone: "+34 698-609-855",
    email: " ambalexey@gmail.com",
};

const sliderContent = {
    name: "Alexey Nikolaenko",
    description: `I'm a front-end developer, at the moment I'm actively learning to create 
  SPA applications of any
  complexity using the following stack of technologies: React.js/ Redux / TypeScript.
  The next stages of learning that interest me are React Native and Node.js, because
  I see myself as a Full-stack developer.`,
    btnText: " Donwload CV",
};

const Slider = () => {
    return (
        <>
            {/*  Home Banner */}
            <section id="home" className="home-banner">
                <div className="hb-top-fixed d-flex">
                    <div className="hb-info">
                        <a href="tel:+34 698-609-855">{conctInfo.phone}</a>
                        <a href="mailto:mail%20to:ambalexey@gmail.com,com">
                            {conctInfo.email}
                        </a>
                    </div>
                    <div className="hb-lang">
                        <ul className="nav">
                            <li className="active">
                                <a href="#">EN</a>
                            </li>
                            {/*<li>*/}
                            {/*  <a href="#">FR</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
                {/* End hp-top-fixed */}

                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-7">
                            <div className="type-box">
                                <h6>Hello, My name is</h6>
                                <h1 className="font-alt">{sliderContent.name}</h1>
                                <TextLoop>
                                    <p className="loop-text lead">React.ts Developer</p>
                                    <p className="loop-text lead">Future full-stack Developer</p>
                                </TextLoop>{" "}
                                <p className="desc">{sliderContent.description}</p>
                                <div className="mt-4">
                                    <a
                                        className="px-btn px-btn-white"
                                        href="https://github.com/UncleStifler/UncleStifler/blob/master/cv.pdf"
                                        download
                                    >
                                        {sliderContent.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container*/}
                <div
                    className="hb-me"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/slider/main-photo.jpg"
                        })`,
                    }}
                />
            </section>

            {/* End Home Banner  */}
        </>
    );
};

export default Slider;
