import React from 'react'
import '../css/journey.css'
export default function Journey() {
  return (
    <div>
      <div id='journey'>
      <div className='timeline'>        
        <h1 className="sub-title1">Journey</h1>
            <div className='journey1 left'>
              <div className="card-journey">
                <div className="card-body">
                  <h5 className="card-title">HighRadius Technologies</h5>
                  <h6 className="card-subtitle mb-2 text-muted">2021-Present</h6>
                  <p className="card-text">Working as Associate Software Developer in Core Platform Team</p>
                </div>
              </div>
            </div>
            <div className='journey1 right'>
              <div className="card-journey">
                <div className="card-body">
                  <h5 className="card-title">Kalinga Institute of Industrial Technology</h5>
                  <h6 className="card-subtitle mb-2 text-muted">2018-2022</h6>
                  <p className="card-text">Completed BTech in Computer Science and Engineering</p>
                </div>
              </div>
            </div> 
            <div className='journey1 left'>
              <div className="card-journey">
                <div className="card-body">
                  <h5 className="card-title">Army Public School</h5>
                  <h6 className="card-subtitle mb-2 text-muted">2016-2017</h6>
                  <p className="card-text">Completed 12th with a score of 86.4% in CBSE Board</p>
                </div>
              </div> 
            </div>           
        
      </div>
      </div>
      </div>
  )
}
 