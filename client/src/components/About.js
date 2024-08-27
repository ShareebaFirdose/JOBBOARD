import React from "react";
import Navbar from "./ForHeader/Navbar";
import Footer from "./ForFooter/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
        <div className="row about-contact">
          <div className="col-8">
            <div className="about">
              <h1>About Us</h1>
              <br />
              <p>
              Welcome to Jobify, your gateway to endless career opportunities.
               We are a cutting-edge job portal dedicated to connecting job seekers with the right employers. 
               Our mission is to simplify the job search process, making it easier for candidates to
                find their Jobify and for companies to discover top talent.


              </p>
              <br />
              <p>
              At Jobify, we understand the challenges of the job market.
              That’s why we’ve built a platform that caters to both job seekers and employers.
               Whether you're a recent graduate looking for your first job, a seasoned professional exploring new opportunities,
                or an employer searching for the perfect candidate, we have the tools and resources you need.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="contact">
              <h3>Contact</h3>
              <p>email : Jobify@gmail.com</p>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
