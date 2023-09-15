import React from 'react'
import './SubNavbar.css'
export default function SubNavbar() {
  return (
    <div className="SubNavbar">
        <div className="SubNavBarImg">
        <img className="subNavBarImage" src="https://www.akashinstitutions.com/New/img/agi-slide-2.jpg" alt="backgroundimage"/>
        </div>
        <div className="navBarText">
            <div className="subNavBarText">
                <h2 className="welcome">Welcome to</h2>
                <strong className="akash"> AKASH GROUP OF INSTITUTIONS (AGI)</strong> 
                <h6 className="thirdText"> Akash Group of Institutions is one of the leading educational institutions in Karnataka that was founded in 2014.
                 The institute has a state of the art campus and is an embodiment of the essence of cultural heritage and diversity with a blend of 21st century modernity. 
                 The institute is comfortably nestled in the city of Bangalore, ‘The Silicon Valley of India’.</h6>
            </div>
            <div className="mainCard">
            <div className="card">
      <form >
        <h4 className="admission">Admission open 2023-25</h4>
        <input
          type="text"
          placeholder="Enter your first name"
          
        />
        <input
          type="text"
          placeholder="Enter your first name"
         
        />
        <input
          type="text"
          placeholder="Enter your email address"
         
        />
        <input
          type="text"
          placeholder="Enter your mobile number"
          
        />
        <input
          type="text"
          placeholder="SELECT STATE"
          
        />
        <input
          type="text"
          placeholder="Select City"
          
        />
        <input
          type="text"
          placeholder="Select Course"
         
        />
        
        <button type="submit" > Register</button>
      </form>
    </div>     
            </div>
        </div>
        <div>
            <h1 className="text">WHY AKASH GROUP OF INSTITUTIONS (AGI)</h1>
</div>
    </div>

  )
}
