import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "John Smith",
  description: `I'm a front-end developer, at the moment I'm actively learning to create 
  SPA applications of any
  complexity using the following stack of technologies: React.js/ Redux / TypeScript.
  The next stages of learning that interest me are React Native and Node.js, because
  I see myself as a Full-stack developer.`,
  btnText: " Donwload CV",
  btnText2: "My Work",
};

const SliderFour = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/home-professional.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello there...
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Content Writter</p>
                    <p className="loop-text lead">Youtuber</p>
                    <p className="loop-text lead">Photographer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div className="d-flex btn-wrapper">
                  <a
                    className="px-btn px-btn-theme mr-4"
                    href="img/resume.png"
                    download
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    {sliderContent.btnText}
                  </a>
                  <a
                    className="px-btn btn-outline"
                    href="#work"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    {sliderContent.btnText2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFour;
