import React from "react";
import "./Home.css";
import Cdacimg from "./homepagecdac.jpg";
import ContentImg from "./cont-img.jpg";
import { SiCodio } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";
import { GiRadioTower } from "react-icons/gi";
import Navbar from "../Navbar";


function home() {
  return (
    <>
    <Navbar/>
    <div className="landing-page">
      <div className="banner">
        <img className="cdacImg" src={Cdacimg} alt="" />
      </div>

      <div className="content-main-div">
        <div className="content">
          <h1>C-DAC BENGALURU</h1>
          <p>
            C-DAC, Bengaluru centre, is the 2nd of C-DAC centres established in
            1989 to carry-out research and deliver solutions and products in the
            area of System Software for PARAM series of supercomputers of C-DAC.
            PARAM Padma was housed at C-DAC's Terascale Supercomputing Facility
            (CTSF), results from its third mission project in High-Performance
            Computing Technologies, which was listed in the Top 500
            Supercomputers. The centre is equipped with PARAM Utkarsh
            Supercomputing facility, contributing towards National Super
            computer mission (NSM) and offers HPC System Software solutions &
            services along with development of debuggers, profilers, web
            frameworks, high speed data transfer tools for national grid
            computing, AI framework & big data Software suites, and gateways for
            multiple scientific application domains. The centre is highly
            acclaimed as a centre for excellence in the thematic areas of HPC,
            Grid Computing, Hardware Security, Cyber Security, IoT, DNSSec,
            Strategic Electronics, FOSS and Software Technologies, Language and
            Heritage Computing, Knowledge & Resource Centre for Accessibility,
            ICT for Social welfare, Consultancy and Training.
          </p>
        </div>

        <img className="content" src={ContentImg} alt="" />
      </div>

      <div className="card-div">
        <div className="heading">
          <h1>Courses</h1>
        </div>
        <div className="card-container">
          <div className="card">
            <p>
              <SiCodio className="cardIcon" />
            </p>
            <h2 className="card-title">PG-DAC</h2>
            <p className="card-content">
              Post Graduate Diploma in Advanced Computing
            </p>
          </div>

          <div className="card">
            <p>
              <BsFillDatabaseFill className="cardIcon" />
            </p>
            <h2 className="card-title">PG-DBDA</h2>
            <p className="card-content">
              Post Graduate Diploma in Big Data Analytics
            </p>
          </div>

          <div className="card">
            <p>
              <GiRadioTower className="cardIcon" />
            </p>
            <h2 className="card-title">PG-IoT</h2>
            <p className="card-content">
              Post Graduate Diploma in Internet of Things
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default home;
