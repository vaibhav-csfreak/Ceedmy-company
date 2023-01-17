import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Footer = () => {
  return (
    <div >
    
    
       <footer className="bg-light text-body pt-5 pb-4">

<div className="container text-center text-md-left">

  <div className="row text-center text-md-left">

    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold text-body">Ceedmy</h5>
      <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
        ital consectetur lorem ipsum dolor sit amet adipisicing elit.</p>
      
    </div>

    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold text-body">RESOURCES</h5>
    <p>
      <a href="/" className="text-body" style={{textDecoration: "none"}}> Home</a>
    </p>
    <p>
      <a href="/course" className="text-body" style={{textDecoration: "none"}}> Buy Courses</a>
    </p>
    <p>
      <a href="succes" className="text-body" style={{textDecoration: "none"}}> Succes Stories</a>
    </p>
    <p>
      <a href="/about" className="text-body" style={{textDecoration: "none"}}> About us</a>
    </p>

    </div>

    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold text-body">Useful links</h5>
    <p>
      <a href="#" className="text-body" style={{textDecoration: "none"}}> Your Account</a>
    </p>
    <p>
      <a href="#" className="text-body" style={{textDecoration: "none"}}> Become Prime Member</a>
    </p>
    <p>
      <a href="#" className="text-body" style={{textDecoration: "none"}}>Buy A Course</a>
    </p>
    <p>
      <a href="#" className="text-body" style={{textDecoration: "none"}}> Help</a>
    </p>
    </div>

    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h5 className="text-uppercase mb-4 font-weight-bold text-body" >Contact</h5>
      <p>
        <i className="fas fa-home mr-3"></i>Thane West, Maharashtra 400601
      </p>
      <p>
        <i className="fas fa-envelope mr-3"></i>ceedmyelearning98@gmail.com
      </p>
      <p>
        <i className="fas fa-phone mr-3"></i>+91 3162859445
      </p>
      <p>
        <i className="fas fa-print	 mr-3"></i>+01 335 633 77
      </p>
    </div>
    
  </div>

  <hr className="mb-4"/>

  <div className="row align-items-center">

    <div className="col-md-7 col-lg-8">
      <p>	Copyright ©2020 All rights reserved by:
        <a href="#" style={{textDecoration: "none"}}>
          <strong class="text-body">Ceedmy E-Learning</strong>
        </a></p>
      
    </div>

    <div className="col-md-5 col-lg-4">
      <div className="text-center text-md-right">

        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="#" className="btn-floating btn-sm text-body" style={{fontSize: "23px"}}><i class="fab fa-facebook"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="btn-floating btn-sm text-body" style={{fontSize: "23px"}}><i class="fab fa-twitter"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="btn-floating btn-sm text-body" style={{fontSize: "23px"}}><i class="fab fa-google-plus"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="btn-floating btn-sm text-body" style={{fontSize: "23px"}}><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="btn-floating btn-sm text-body" style={{fontSize: "23px"}}><i class="fab fa-youtube"></i></a>
          </li>
        </ul>
        
      </div>
      
    </div>
    
  </div>

</div>

</footer>
    </div>
  );
};

export default Footer;
