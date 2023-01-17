import React from "react";

import Form from "./Form";
import Card from "./Card";
import { Image, Carousel, Container, Row, Col } from "react-bootstrap";

import "./Home.css";
import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.jpeg";

import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="row">
        <div className="Form-Container bg-light col-sm-6" style={{ padding: "15px" }}>
          <h1 className="text-dark">Book a free Class</h1>
          <Container className="justify-content-md-center">
            <Form />
          </Container>
        </div>
      </div>
      <Card />
      <div className="cnt mt-5 mb-3">
        <h1 className="text-center">Our Students</h1>
        <Carousel fade className="txt-color justify-content-sm-center">
          <Carousel.Item>
            <Row className="justify-content-md-center">
              <Col sm={3} md="auto" className="mx-auto students">
                <Image src={Img1} className="FeedbackImg" roundedCircle />
                <h2>Kanishak Kataria</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>

                </p>
              </Col>
              <Col sm={3} md="auto" className="mx-auto students">
                <Image src={Img2} className="FeedbackImg" roundedCircle />
                <h2>Dhruv Mittal</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>

                </p>
              </Col>
              <Col sm={3} md="auto" className="mx-auto students">
                <Image src={Img3} className="FeedbackImg" roundedCircle />
                <h2>Santosh Chaudhary</h2>
                <p className="text-wrap" style={{ width: "15rem" }}>

                </p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="chat_icon text-info h1 ">
        <i className="fas fa-comments"></i>
      </div>
      <div className="chat_box bg-light">
        <div className="conv-form-wrapper">
          <form action="" method="GET" className="hidden">
            <select
              name="category"
              data-conv-question="These are the few Faq's?"
              className="question"
            >
              <option value="hackathon">What is a Hackathon?</option>
              <option value="event"> Who is this event for? </option>
            </select>
            <div data-conv-fork="category">
              <div data-conv-case="hackathon">
                <input
                  type="text"
                  data-conv-question="A hackathon is a social coding event where programmers, designers, and developers collaborate to 
                    solve a problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle
                     against the clock and the competition."
                />
              </div>
              <div data-conv-case="event">
                <input
                  type="text"
                  data-conv-question="This event is open to both participants and spectators from the community 
                    who want to cheer them on and see what the hackathon is all about."
                />
              </div>
              <div data-conv-case="prizes">
                <input
                  type="text"
                  data-conv-question="Swags, Goodies & coupons + Internship opportunities"
                />
              </div>
              <div data-conv-case="cost">
                <input type="text" data-conv-question=" Completely FREE " />
              </div>
              <div data-conv-case="place">
                <input type="text" data-conv-question=" Platform: Teams " />
              </div>
            </div>
            <select
              name="category"
              data-conv-question="These are the few Faq's?"
            >
              <option value="judged"> How will teams be judged? </option>
              <option value="prizes"> Will there be prizes? </option>
            </select>
            <div data-conv-fork="category">
              <div data-conv-case="hackathon">
                <input
                  type="text"
                  data-conv-question="A hackathon is a social coding event where programmers, designers, and developers collaborate to 
                    solve a problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle
                     against the clock and the competition."
                />
              </div>
              <div data-conv-case="event">
                <input
                  type="text"
                  data-conv-question="This event is open to both participants and spectators from the community 
                    who want to cheer them on and see what the hackathon is all about."
                />
              </div>
              <div data-conv-case="prizes">
                <input
                  type="text"
                  data-conv-question="Swags, Goodies & coupons + Internship opportunities "
                />
              </div>
              <div data-conv-case="cost">
                <input type="text" data-conv-question=" Completely FREE" />
              </div>
              <div data-conv-case="place">
                <input type="text" data-conv-question=" Platform: Teams" />
              </div>
            </div>
            <select
              name="category"
              data-conv-question="These are the few Faq's?"
            >
              <option value="cost"> What is the cost of participating? </option>
              <option value="place">
                Where will the Hackathon take place?{" "}
              </option>
            </select>
            <div data-conv-fork="category">
              <div data-conv-case="hackathon">
                <input
                  type="text"
                  data-conv-question="A hackathon is a social coding event where programmers, designers, and developers collaborate to 
                        solve a problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle
                         against the clock and the competition."
                />
              </div>
              <div data-conv-case="event">
                <input
                  type="text"
                  data-conv-question="This event is open to both participants and spectators from the community 
                        who want to cheer them on and see what the hackathon is all about."
                />
              </div>
              <div data-conv-case="prizes">
                <input
                  type="text"
                  data-conv-question="Swags, Goodies & coupons + Internship opportunities "
                />
              </div>
              <div data-conv-case="cost">
                <input type="text" data-conv-question=" Completely FREE" />
              </div>
              <div data-conv-case="place">
                <input type="text" data-conv-question=" Platform: Teams" />
              </div>
              <input type="text" data-conv-question="What is your Name" />
            </div>
            <select
              name="callbackTest"
              data-conv-question="You can do some cool things with callback functions. Want to rollback to the 'programmer' question before?"
            >
              <option value="yes" data-callback="rollback">
                Yes
              </option>
              <option value="no" data-callback="restore">
                No
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
