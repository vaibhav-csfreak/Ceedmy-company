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
    news: "JEE Main 2021 3rd phase: Window to apply reopens, direct link to register",
  },
  {
    id: 2,
    news: "Education Minister LIVE: Ramesh Pokhriyal announced JEE Main 2021 3rd and 4th phase dates",
  },
  {
    id: 3,
    news: "NTA JEE Main 2021: NTA Releases Application Forms at jeemain.nta.nic.in, Allows Change In Exam Centres",
  },
  {
    id: 4,
    news: "JEE Advanced 2021 Allows Last Year's Students to Appear too, Will Competition Rise for IIT Entrance",
  },
  {
    id: 5,
    news: "JEE Advanced 2021: IIT Kharagpur releases informatio..list of documents for registration",
  },
  // {
  //   id: 6,
  //   news: "Bhuvneshwar Kumar has been named vice-captain",
  // },
];
const news2 = [
  {
    id: 1,
    news: "JEE Main 2021 3rd phase: Window to apply reopens, direct link to register",
  },
  {
    id: 2,
    news: "Education Minister LIVE: Ramesh Pokhriyal announced JEE Main 2021 3rd and 4th phase dates",
  },
  {
    id: 3,
    news: "NTA JEE Main 2021: NTA Releases Application Forms at jeemain.nta.nic.in, Allows Change In Exam Centres",
  },
  {
    id: 4,
    news: "JEE Advanced 2021 Allows Last Year's Students to Appear too, Will Competition Rise for IIT Entrance",
  },
  {
    id: 5,
    news: "JEE Advanced 2021: IIT Kharagpur releases informatio..list of documents for registration",
  },
  // {
  //   id: 6,
  //   news: "Shikhar Dhawan to lead India on limited-overs tour of Sri Lanka",
  // },
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
              IIT-JEE 2021
            </h2>
          </nav>
          <div className="row DIV">
            <div className="col div1">
              <div>
                <p>
                  The Joint Entrance Examination is an engineering entrance assessment conducted for admission to various engineering colleges in India. It is constituted by two different examinations: the JEE Main and the JEE Advanced.
                </p>
                <ul>
                  <li>JEE MAINS</li>
                  <li>JEE ADVANCED</li>
                </ul>
                <div>
                  <h5>Table Of Contents</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <a href="#Heading2" class="content-link">
                            Why IITs?
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading3" class="content-link">
                            JEE Mains
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading5" class="content-link">
                            JEE Advanced
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading6" class="content-link">
                            Colleges through JEE Mains and Jee Advanced
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading4" class="content-link">
                            Preparation for Engineering <strong>@CEEDMY</strong>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div id="Heading1">
                  <h2 class="mHeading">UPSC Exam 2021</h2>
                  <p>
                    The civil services examination simply called the UPSC Exam
                    takes place annually. It recruits candidates for the
                    All-India Services – IAS, IPS, IRS, etc. While the CSE
                    recruitment for 2020 is undergoing, the next examination
                    will take place in 2021. Read the details about the
                    examination below: UPSC Calendar 2021 The commission has
                    released the UPSC Civil Services Examination Calendar for
                    the year 2021 on 17th August. The calendar contains the
                    dates of all the examinations that are conducted by the
                    UPSC. The important dates of the examination are given
                    below: UPSC CSE Prelims 2021 – 10th October 2021 UPSC CSE
                    Mains 2021 – 17th September 2021{" "}
                    <strong>[Postponed]</strong> Revised Dates Soon! Get all
                    relevant information on UPSC Exam Dates in the UPSC Calendar
                    2021 post.
                  </p>
                </div> */}
                <div id="Heading2">
                  <h2 class="mHeading">Why IITs?</h2>
                  <p>
                    <ul>
                      <li>The IITs are the most elite and finest institutions for engineering reputed for their quality of engineering education,
                        world-class infrastructure & top class fa culty.</li>
                      <li>
                        Ills are premier institutes oflndia conferred with the status of institutions of National importance.
                      </li>
                      <li>IITs are renowned worldwide for their quality of teaching, internationally acclaimed research, excellent
                        infrastructure and the most fertile brains.</li>
                      <li>During placement season, the best companies flank the ITT campus offering handsome packages and top-notch
                        positions.</li>
                      <li>The IITs open the portals to a plethora of options for higher studies and the most coveted jobs.</li>
                    </ul>
                  </p>
                </div>
                <div id="Heading3">
                  <h2 class="mHeading">JEE Mains</h2>
                  <p>
                    <ul>
                      <li>First challenging exam and only those students who prove their mettle in this examination are allowed to appear for JEE (Advanced)-the next stage</li>
                      <li>Gateway for Engineering aspi rants to 31 NJT's, 18 GFIT's and other centrally funded technical institutions</li>
                      <li>Single choice objective paper (MCQ) with equal weightage given to Physics, Chemistry and Mathematics Duration of the paper is 3 hours</li>
                      <li>Held twice a year tentatively in January &April</li>
                      <li>For more details kindly visit <a style={{ color: "blue" }} href="https://jeemain.nta.nic.in/webinfo2021/Page/Page?PageId=1&LangId=P">JEE MAINS</a></li>
                    </ul>
                  </p>
                </div>
                <div id="Heading5">
                  <h2 class="mHeading">JEE Advanced</h2>
                  <p>
                    <ul>
                      <li>Second stage or entrance test for admissions to ITT's & ISM</li>
                      <li>Only top 2,24,000 successful candidates of JEE Main are eligible</li>
                      <li>Conducted by the seven zonal IITs - IIT Bombay. IIT DelhL IIT Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras and IIT RoorKee</li>
                      <li>Two objective Online papers, each of three hours duration with equal weightage to Physics, Chemistry and Mathematics</li>
                      <li>The candidates must have 75% (aggregate boards percentage) or should be in top 20 percentile of the respective board (whichever is lower)</li>
                      <li>The JEE Advanced exam is held every year tentatively in the 3rd week of May</li>
                      <li>For more details kindly visit <a style={{ color: "blue" }} href="https://jeeadv.ac.in/">JEE ADVANCED</a></li>
                    </ul>

                  </p>
                </div>
                <div id="Heading6">
                  <h2 class="mHeading">Colleges through JEE Mains and Jee Advanced</h2>
                  <p>
                    <ul>
                      <li>
                        JEE MAINS : NITs, IIITs, GFTIs, DTU and other Central Funded Technical Institutes(CFTIs)
                      </li>
                      <li>
                        IITs and IIST
                      </li>
                    </ul>
                  </p>
                </div>
                <div id="Heading4">
                  <h2 class="mHeading">Preparation for Engineering <strong>@CEEDMY</strong></h2>
                  <p>
                    <ul>
                      <li>Faculty at <strong>CEEDMY</strong> has been consistently producing toppers of JEE/ BITS/OLYMPIADS/CET</li>
                      <li>Faculty pool of ex-IIT professors, IITians and academicians.</li>
                      <li>Highly competit ive peer group.</li>
                      <li>Exhaust ive and well-researched study materials.</li>
                      <li>24x7 availabi lity of doubt faculties.</li>
                    </ul>
                  </p>
                </div>
                {/* <div id="Heading7">
                  <h2 class="mHeading">UPSC 2021 Preparation</h2>
                  <p>
                    The civil services examination simply called the UPSC Exam
                    takes place annually. It recruits candidates for the
                    All-India Services – IAS, IPS, IRS, etc. While the CSE
                    recruitment for 2020 is undergoing, the next examination
                    will take place in 2021. Read the details about the
                    examination below: UPSC Calendar 2021 The commission has
                    released the UPSC Civil Services Examination Calendar for
                    the year 2021 on 17th August. The calendar contains the
                    dates of all the examinations that are conducted by the
                    UPSC. The important dates of the examination are given
                    below: UPSC CSE Prelims 2021 – 10th October 2021 UPSC CSE
                    Mains 2021 – 17th September 2021{" "}
                    <strong>[Postponed]</strong> Revised Dates Soon! Get all
                    relevant information on UPSC Exam Dates in the UPSC Calendar
                    2021 post.
                  </p>
                </div>
                <div id="Heading8">
                  <h2 class="mHeading">UPSC 2021 Preparation</h2>
                  <p>
                    The civil services examination simply called the UPSC Exam
                    takes place annually. It recruits candidates for the
                    All-India Services – IAS, IPS, IRS, etc. While the CSE
                    recruitment for 2020 is undergoing, the next examination
                    will take place in 2021. Read the details about the
                    examination below: UPSC Calendar 2021 The commission has
                    released the UPSC Civil Services Examination Calendar for
                    the year 2021 on 17th August. The calendar contains the
                    dates of all the examinations that are conducted by the
                    UPSC. The important dates of the examination are given
                    below: UPSC CSE Prelims 2021 – 10th October 2021 UPSC CSE
                    Mains 2021 – 17th September 2021{" "}
                    <strong>[Postponed]</strong> Revised Dates Soon! Get all
                    relevant information on UPSC Exam Dates in the UPSC Calendar
                    2021 post.
                  </p>
                </div>
                <div id="Heading9">
                  <h2 class="mHeading">UPSC 2021 Preparation</h2>
                  <p>
                    The civil services examination simply called the UPSC Exam
                    takes place annually. It recruits candidates for the
                    All-India Services – IAS, IPS, IRS, etc. While the CSE
                    recruitment for 2020 is undergoing, the next examination
                    will take place in 2021. Read the details about the
                    examination below: UPSC Calendar 2021 The commission has
                    released the UPSC Civil Services Examination Calendar for
                    the year 2021 on 17th August. The calendar contains the
                    dates of all the examinations that are conducted by the
                    UPSC. The important dates of the examination are given
                    below: UPSC CSE Prelims 2021 – 10th October 2021 UPSC CSE
                    Mains 2021 – 17th September 2021{" "}
                    <strong>[Postponed]</strong> Revised Dates Soon! Get all
                    relevant information on UPSC Exam Dates in the UPSC Calendar
                    2021 post.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 div2">
              <div classNameName="searchDiv">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
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
                    src="https://i.ibb.co/417hs6y/ceedmy-iit.png"
                    alt="Sample"
                  />
                  {/* <img src="https://i.ibb.co/417hs6y/ceedmy-iit.png" alt="ceedmy-iit" border="0" /> */}
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
              {/* <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
                <h5>Weekly Updates : {result}</h5>
                {news3.map(createNews)}
              </div>
              <div className="newsDiv shadow-lg p-3 mb-5 bg-white rounded">
                <h5>Current Affairs : {d}</h5>
                {news.map(createNews)}
              </div> */}
              <button className="btn btn-primary mt-2"><a href="/quiz" style={{ "color": "white" }}>Take a Quiz</a></button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Containercourses;
