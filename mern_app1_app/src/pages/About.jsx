import React, { useState } from "react";
import "../css/About.css";
import khushalImg from "../image/image khushal Verma.jpg";
import { UseAuth } from "../auth/auth";
function About() {
  const { user } = UseAuth();
  return (
    <div className="container">
      <div className="card">
        <div className="row fw-normal">
          <h1 className="mt-2 ms-2 text-center">About Developer</h1>
          <div className="col-7 fw-light">
            <p className="mt-2 ms-2 fs-3">
              Radhe Radhe {user ? user.username : ""} ❤,
            </p>
            <p className="mt-2 ms-2 fs-4">
              This is me (Khushal Verma). Hope you love the website created by
              this body. This website is build using MERN Stack (cause it's easy
              to build using MERN 😂).
            </p>
            <p className="mt-2 ms-2 fs-4">
              Currently in 3rd year of B.Tech CSE Core with 1500 others🤦‍♂️.
              Focusing on developing skills as every CS student do. <br /> Code
              then Code 😂😂.
            </p>
            <p className="mt-2 ms-2 fs-4">
              Currently learning, implementing MERN Technology.
            </p>
            <p className="mt-2 ms-2 fs-4">
              Past learned Skills 🤹‍♀️ and Tech's 💻 :
              <li>
                C, C++, OOPS concept SOLID Principles{" "}
                <img
                  src="https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000"
                  height={30}
                  width={30}
                />
              </li>
              <li>
                Java Core, Java EE, MVC Architecture, Spring Boot{" "}
                <img
                  src="https://img.icons8.com/?size=100&id=GPfHz0SM85FX&format=png&color=000000"
                  height={30}
                  width={30}
                />
              </li>
              <li>
                MERN Stack (MongoDB, Express.js, React.js, Node.js){" "}
                <img
                  src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
                  height={30}
                  width={30}
                />
              </li>
              <li>
                Postgres SQL {""}
                <img
                  src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                  height={30}
                  width={30}
                />
              </li>
            </p>
            <div className="mt-2 ms-2 fs-4">
              Contact Me
              <div className="row">
                <div className="col fs-5">
                  <span>
                    <span className="fs-3">📥</span> : vkkhushal18@gmail.com
                  </span>
                  <br />
                  <span>
                    <span className="fs-3">📲</span> : 8602352536
                  </span>
                </div>
                <div className="mt-3">
                  <button className="btn">Hire me</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              className="mt-5 ms-2"
              width={500}
              height={600}
              src={khushalImg}
              alt="This is image of human"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
