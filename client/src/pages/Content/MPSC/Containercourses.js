import React from "react";

const createNews = (news) => {
  return <News key={news.id} news={news.news} />;
};
function News(props) {
  return (
    <div>
      <a href="#" className="news-list">
        {props.news}
      </a>
      <hr />
    </div>
  );
}
const d = new Date().toLocaleDateString();
const weekday = new Date().getMonth();
var result = "";
if (weekday === 0) {
  result = "Sunday";
} else if (weekday === 1) {
  result = "Monday";
} else if (weekday === 2) {
  result = "Tuesday";
} else if (weekday === 3) {
  result = "Wednesday";
} else if (weekday === 4) {
  result = "Thursday";
} else if (weekday === 5) {
  result = "Friday";
} else {
  result = "Saturday";
}
const news = [
  {
    id: 1,
    news: "Current Affairs",
  },
  {
    id: 2,
    news: "Current Affairs",
  },
  {
    id: 3,
    news: "Current Affairs",
  },
  {
    id: 4,
    news: "Current Affairs",
  },
  {
    id: 5,
    news: "Current Affairs",
  },
  {
    id: 6,
    news: "Current Affairs",
  },
];
const news1 = [
  {
    id: 1,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
  {
    id: 2,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
  {
    id: 3,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
  {
    id: 4,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
  {
    id: 5,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
  {
    id: 6,
    news: "Bhuvneshwar Kumar has been named vice-captain",
  },
];
const news2 = [
  {
    id: 1,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
  {
    id: 2,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
  {
    id: 3,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
  {
    id: 4,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
  {
    id: 5,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
  {
    id: 6,
    news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  },
];
const news3 = [
  {
    id: 1,
    news: "Monthly News",
  },
  {
    id: 2,
    news: "Monthly News",
  },
  {
    id: 3,
    news: "Monthly News",
  },
  {
    id: 4,
    news: "Monthly News",
  },
  {
    id: 5,
    news: "Monthly News",
  },
  {
    id: 6,
    news: "Monthly News",
  },
];
const Containercourses = () => {
  return (
      <>
     
    <div className="container mt-2">
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              backgroundColor: "#F7F7F9",
              borderRadius: "5px",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            NEET 2021
          </h2>
        </nav>
        <div className="row DIV">
          <div className="col div1">
            <div>
              <p>
              As per the scheduled released by National Testing Agency (NTA) few weeks ago, the NEET 2021 entrance exam will take place on August 1 and if the NTA wants to hold NEET 2021 entrance exam on August 1 then it is expected that the application form would soon be released on NTA's official website - <a href="https://nta.ac.in/">NEET 2021</a>.
              </p>
          
              <div>
                <h5>Table Of Contents</h5>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <a href="#Heading1" class="content-link">
                          About NEET Exam – Calendar, Notification, Syllabus &
                          Eligibility
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#Heading2" class="content-link">
                          NEET  – Pattern, Marks, Syllabus
                        </a>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>
                        <a href="#Heading4" class="content-link">
                          NEET Marking Scheme – Marks, Questions, What no to do in
                          the NEET Exam.
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#Heading5" class="content-link">
                          NEET 2021 Preparation – PCB Strategies, Notes, Important
                          Questions
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="Heading1">
                <h2 class="mHeading">NEET 2021 Application Form</h2>
                <p>
                Application Form for NEET 2021 was released in the month of July 2021. National Eligibility Entrance Test (NEET) is the national level examination conducted by the National testing Agency (NTA). NEET 2021 (previously known as AIPMT) will be conducted in the month of September 2021.
                </p>
              </div>
              <div id="Heading2">
                <h2 class="mHeading">NEET Eligibility</h2>
                <ul>
                  <li><strong>Nationality:</strong> Indian/ NRIs/ OCIs/ PIOs and foreign national candidates will be eligibility to apply.</li>
                  <li><strong>Qualification:</strong> Candidates must have passed 10+2 or equivalent from any recognized board. </li>
                  <li><strong>Subjects:</strong> Candidates must have passed their 12th with subjects i.e. physics, chemistry, biology/ biotechnology and English.</li>
                  <li><strong>Marks Criteria:</strong> Candidates must have passed with 50% marks (45% for PH and 40% for SC/ ST) in their qualifying examination.</li>
                </ul>
              </div>
              <div id="Heading3">
                <h2 class="mHeading">NEET 2021 Exam Pattern</h2>
                <p>NEET 2021 will be conducted in offline mode i.e. pen-paper based mode only. Students will have to mark their responses on an OMR sheet. </p>
                <ul>
                  <li><strong>Total Sections in NEET 2021:</strong> 3 sections i.e. Physics, Chemistry, and Biology (Botany and Zoology) </li>
                  <li><strong>Types Of Questions:</strong>MCQ type only</li>
                  <li><strong>Total Time Duration For Exam:</strong>3 hours</li>
                  <li><strong>Negative Marking:</strong>Yes; 1 mark will be deducted for every incorrect answer</li>
                  <li><strong>Marks For Correct Answer:</strong>For each correct answer, 4 marks will be awarded​​</li>
                  <li><strong>Total Number Of Questions:</strong>45 questions are assigned to Physics, Chemistry, Botany, and Zoology, each. </li>
                </ul>
              </div>
              
              <div id="Heading4">
                <h2 class="mHeading">NEET Paper Analysis for Physics</h2>
                <ul>
                  <li>Mechanics is the most important topic carrying maximum weightage.</li>
                  <li>From Electrodynamics you can expect almost 9-10 questions.</li>
                  <li>Physics is the most difficult section in NEET exam. </li>
                  <li>Most of the questions involve lengthy calculations.</li>
                  <li>It is imperative to remember all the formulas.</li>
                </ul>
              </div>

              <div id="Heading5">
                <h2 class="mHeading">NEET Paper Analysis for Chemistry</h2>
                <ul>
                  <li>Chemistry is regarded as a moderately difficult section in the paper.</li>
                  <li>Over the years, application-based questions have increased in number.</li>
                  <li>NEET 2019 saw more questions from the class XII syllabus. </li>
                  <li>Organic Chemistry has gradually gained more prominence than Inorganic Chemistry, expect 16-17 questions from Organic Chemistry in the paper.</li>
                  <li>Few questions are formed taking two different concepts together.</li>
                </ul>
              </div>
              
              <div id="Heading6">
                <h2 class="mHeading">NEET Paper Analysis for Biology</h2>
                <ul>
                  <li>Biology is relatively easier than the other two subjects.</li>
                  <li>The paper includes 45 questions each from Botany and Zoology.</li>
                  <li>NEET 2019 saw more questions from class XII syllabus, almost 46 out of 90.</li>
                  <li>Maximum questions are asked from NCERT so students should spend more time on that instead of reference books.</li>
                  <li>High weightage in the paper are Genetics, Biotechnology, Ecology, Plant Physiology, etc. </li>
                </ul>
              </div>
              <div id="Heading7">
                <h2 class="mHeading">NEET Post-Examination Dates</h2>
                <p>
                After the successful completion of NEET 2021 exam, students will be able to check the NEET 2021 answer key within a week after the completion of examination. The provisional answer key will be released in September 2021. Students after release of provisional answer key will be able to challenge it and submit responses.Final Answer Key will be released in the month of September 2021. NEET 2021 Result will be checked from the month of October 2021. The NEET 2021 Cut Off will be also published along with the declaration of result. Successful candidates will be invited to the counselling process. NEET counselling will be started from the month of October 2021. Candidates participating the counselling process will have to register for the counselling rounds as per the counselling schedule which will be released separately by the authority.
                </p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-3 div2">
            <div classNameName="searchDiv">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text search-button"
                    id="basic-addon1"
                  >
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              classNameName="card"
              style={{ width: "18rem", marginBottom: "15px" }}
            >
              <div className="card-body">
                <h6 className="card-text">Ceedmy Classroom Program</h6>
              </div>
              <a href="#">
                <img
                  className="card-img-top card-img"
                  src="https://www.livelaw.in/h-upload/2019/11/05/366225-neet.jpg"
                  alt="Sample"
                />
              </a>
            </div>
            <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
              <h5>Daily Updates : {d}</h5>
              {news1.map(createNews)}
            </div>
            <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
              <h5>Weekly Updates :</h5>
              {news2.map(createNews)}
            </div>
            <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
              <h5>Weekly Updates : {result}</h5>
              {news3.map(createNews)}
            </div>
            <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
              <h5>Current Affairs : {d}</h5>
              {news.map(createNews)}
            </div>
            <button className="btn btn-primary mt-2"><a href="/quiz" style={{"color":"white"}}>Take a Quiz</a></button>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};
export default Containercourses;
