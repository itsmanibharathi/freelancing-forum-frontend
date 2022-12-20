import React from 'react'
import profile from '../../assets/profileicon2.png'
import starColor from '../../assets/Color-star.png'
import starDull from '../../assets/dull-star.png'

function ProfileCard() {
    const rating=4
  return (
    <div className="card shadow my-4">
    <div className="card-body px-4">
    <div className="row">
      <div className="col-md-9 pb-4">
      <div className="project-title fs-4 my-1">SANJAI S</div>
      <div className="project-holder-department my-2 fw-bold">
        <span>Artificial Intelligence</span><span className="project-title mx-3">•</span><span>AI & ML</span>
      </div>
      <div className="project-dept">
      I am a freelance software engineer. I have more than 8 years of experience in programming and designing UI. I worked on front-end and as well as back-end of many high traffic websites and apps.
      </div>
      </div>
      <div className="col-md-3 text-end">
          <img src={profile} alt="profile-image" height='80px' width='80px' />
      </div>
    </div>
    <div className="text-end project-post-time">
    {(
      function () {
        var rate=[]
        for(let i=0;i<rating;i++){
          rate.push(<img src={starColor} alt='star' height='30px' />)
        }
        for(let j=0;j<5-rating;j++){
          rate.push(<img src={starDull} alt='star' height='25px' />)
        }
        return(
          <div>
          {rate}
          </div>
        )
      }
    ())}
    </div>
    </div>
  </div>
  )
}

export default ProfileCard