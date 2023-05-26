import React from 'react'
import '../css/journey.css'
export default function Journey() {
  return (
    <div>
      <div id='timeline'>

        <div className='container-timeline left-container'>
          <img src={require("../images/highradius.jpg")} alt="img"/>
          <div className='text-box'>
            <h2>HighRadius Technologies</h2>
            <small>2022 - Present</small>
            <p>Working as Associate Software Developer in Core Platform.</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container-timeline right-container'>
        <img src={require("../images/kiit.jpg")} alt="img"/>
          <div className='text-box'>
            <h2>Kalinga Institute of Industrial Technology</h2>
            <small>2018 - 2022</small>
            <p>Completed BTech. in Computer Science with a score of 9.49 CGPA</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className='container-timeline left-container'>
        <img src={require("../images/army.jpg")} alt="img"/>
          <div className='text-box'>
            <h2>Army Public School</h2>
            <small>2016 - 2017</small>
            <p>Completed 12th in PCM with a score of 86.4%</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container-timeline right-container'>
        <img src={require("../images/army.jpg")} alt="img"/>
          <div className='text-box'>
            <h2>Army Public School</h2>
            <small>2014 - 2015</small>
            <p>Completed 10th in CBSE with a score of 86.4%</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
 