import React from "react";
import "./Succes.css";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";

const Succes = () => {
  return (
    <div>
      
      <div class="testimonial10 py-5 bg-success-gradiant">
        <div class="container">
          <div class="owl-carousel owl-theme text-center testi10">
            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                  The optional subject you choose must be something you have a good command over. My subject was Mathematics because that was my area of interest and something that I exelled in. I would say that continuous practice is a must when it comes to prelims preparation.
                </h3>
              </div>
              
              <div class="pto">
              <img src={image1} alt="Photo"/>
              </div>

              <h6 class="text-white mb-0 font-weight-medium">
                Kanishak Kataria
              </h6>
              <span class="text-white">(AIR-1 UPSC CSE 2018)</span>
            </div>

            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                  Praveen Sir, it is my huge privilege to be able to adress  this testimony to you. All of us know that optional is critical to clearing civil services exams. Your guidance regarding how to write geography answers, draw diagrams, and sufficient case studies especially for paper 2 was highly usefulfor me for my optional preparation. I will always be thankful to you for your immense contribution in my success.
                </h3>
              </div>
              <div class="pto">
              <img src={image2} alt="Photo"/>
              </div>


              <h6 class="text-white mb-0 font-weight-medium">
                Dhruv Mittal
              </h6>
              <span class="text-white">(AIR-99 UPSC CSE 2018)</span>
            </div>

            <div class="item">
              <div class="quote-bg">
                <h3 class="font-weight-light text-white">
                 When I met Praveen Sir, my first words were, "I have no idea how to tackle grography, I feel like am going to fail". Not only he motivated me but became my lighthouse throughout the preparation journey. His smart & Integrated strategy, approach, and answer writing guidance helped me cracr UPSC. From hime only I understand how to include case studies, diagrams & current affairs in my answers. I'll always be grateful to him for his constant support and motivation.
                </h3>
              </div>
              
              <div class="pto">
              <img src={image3} alt="Photo"/>
              </div>

              <h6 class="text-white mb-0 font-weight-medium">
                Santosh Chaudhari
              </h6>
              <span class="text-white">(UPSC 2018)</span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Succes;
