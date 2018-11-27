import React from 'react';
import {withRouter} from 'react-router';
import '../css/home.css';

const Home = () => {
  return (
    <React.Fragment>
         <main 
          style={{margin: "auto", width: "57%"}}
          className="home-wrapper"
        >
          <div className="container">
            <section id="top">
              <div className ="row">
                <div className ="col m10 offset-m1 s12 ">
                  <div className ="center-align">
                    <img style={{ marginTop: "40px" }} className ="responsive-img" src="./assets/logo.png" alt="logo"/>
                  </div>
                  <p className="center-align italic-light">
                    Illuminating the path between the dreams of today and the healthcare of tommorow.
                        </p>
                  <div className="center-align">
                    <img className="responsive-img" src="./assets/roadmap.png" alt="roadmap"/>
                  </div>
                  <div className="col s10 offset-s1">
                    <p className="quote">
                      Thousands of students in need. Five states with shortages of primary care physicians. One medical school trying to turn the
                      tide. As part of UW Medicine,
                                <b>Waypoint</b> maps the healthcare education pipeline so that programs can coordinate their
                      outreach, and students can find the services they need to succeed as healthcare professionals.
                            </p>
                  </div>
                </div>
              </div>
            </section>


            <section id="problem">

              <div className="row">
                <div className="col m10 offset-m1 s12">
                  <h2 className="center-align">Why Waypoint?</h2>
                  <p className="flow-text">
                    Since the 1970’s health professionals have known of a lack of primary care physicians
                    in the Greater Pacific Northwest region.
                    As the only accredited medical school in the area, the task fell on the UW School of Medicine
                    to solve this problem.
                        </p>

                  <div className="row">
                    <div className="col s8 xs12 offset-s2 center-align">
                      <img className="responsive-img" src="./assets/statesBig.png" alt="wwami region"/>
                      <p className="italic-light">The five states of the WWAMI Region.</p>
                    </div>
                  </div>

                  <p className="flow-text">
                    Over the next decades the School of Medicine would create the
                            <b>WWAMI initiative</b>, an innovative approach to promoting health care careers in underserved
                    areas with targeted youth outreach and medical residencies.
                        </p>

                  <h3>But there's a problem...</h3>

                  <p className="flow-text">
                    No one knows where this outreach is working and what areas need help. Students fall off the map, programs can't collaborate,
                    and the initiative suffers as a whole.
                        </p>
                </div>
              </div>
            </section>
            <section id="solution">
              <div className="row">
                <div className="col m10 offset-m1 s12">
                  <h2 className="center-align">Guide the Way</h2>
                  <div className="center-align">
                    <img className="responsive-img" src="./assets/Map-Initial-View.svg" alt='map'/>
                    <p className="italic-light">
                      With the mapping tool, students can easily find relevant programs in their area.
                            </p>
                  </div>


                  <p className="flow-text">
                    Waypoint offers students and partnering organizations a simple information hub for finding and connecting with outreach programs.
                    No longer do students risk the chance of not continuing their involment, and no longer do organizations
                    have to jump through hurdles just to connect and collaborate with similar offerings in their
                    area of operation.
                        </p>
                  <h3>Process as a Product</h3>

                  <p className="flow-text">
                    The data that fuels Waypoint was created practically from scratch. We designed a method of data collection for the WWAMI
                    Inititiave that enables them to collect clean, extensive information for an ever growing number
                    of outreach programs. As more organizations provide this information, Waypoint will provide a
                    greater wealth of information.
                        </p>
                  <div className="center-align">
                    <img className="responsive-img" src="./assets/steps.svg" alt="pipeline steps"/>
                    <p className="italic-light">
                      Creating a robust API for accessing the data collected allows future teams to utilize its potential to the fullest.
                            </p>
                  </div>

                  <p className="flow-text">
                    Waypoint was built on the premise that good tools rely on good data. Knowing that organizational needs change, we made the
                    database that houses all of the information we've gathered available as its own tool. Through
                    our partner Seattle Data for Good, all of the details of this project and instructions for using
                    the data derived from it will be made available to an entire community of innovators who will
                    continue to help the WWAMI Initiative acheive its goal of eliminating the shortage of physicians
                    in areas of need.
                        </p>
                </div>
              </div>
            </section>
          </div>
        </main>
    </React.Fragment>
      );
    };
    
    export default withRouter(Home);
