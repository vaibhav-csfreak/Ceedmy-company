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
              UPSC 2021
            </h2>
          </nav>
          <div className="row DIV">
            <div className="col div1">
              <div>
                <p>
                  UPSC 2021 examination process started on 4th March 2021. The
                  Union Public Service Commission released the IAS Online
                  Application Form on its official website. There are going to
                  be three stages in this exam:
                </p>
                <ul>
                  <li>Preliminary</li>
                  <li>Mains</li>
                  <li>Interview</li>
                </ul>
                <div>
                  <h5>Table Of Contents</h5>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <a href="#Heading1" class="content-link">
                            About UPSC Exam – Calendar, Notification, Syllabus &
                            Eligibility
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading2" class="content-link">
                            UPSC Prelims – Pattern, Marks, Syllabus
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading3" class="content-link">
                            UPSC Mains – Pattern, Marks, Syllabus
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading4" class="content-link">
                            UPSC Interview – Marks, Questions, What no to do in
                            the IAS Interview
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#Heading5" class="content-link">
                            UPSC 2021 Preparation – GS Strategies, Notes, Daily
                            Current Affairs
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="Heading1">
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
                </div>
                <div id="Heading2">
                  <h2 class="mHeading">UPSC Prelims</h2>
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
                <div id="Heading3">
                  <h2 class="mHeading">UPSC Mains</h2>
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
                <div id="Heading4">
                  <h2 class="mHeading">UPSC Interview</h2>
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
                <div id="Heading5">
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
                <div id="Heading6">
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
                <div id="Heading7">
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
                    src="https://picsum.photos/seed/picsum/200/300"
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
              <button className="btn btn-primary mt-2">
                <a href="/quiz" style={{ color: "white" }}>
                  Take a Quiz
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Containercourses;
