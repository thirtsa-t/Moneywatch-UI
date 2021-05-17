import React from "react"
import './index.css';
import {Card} from 'antd'




const ResumeComponent=()=>{
    return( 
        <Card className="Resume-text">
    <h1 className="textresume">Resume</h1>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    <div>
    <h1 className="resume-title">MoneyWatch</h1>

        <p>
          MoneyWatch project was developed in React.js, Node.js and MongoDB which will be a tool that will be helping people to settle a budget and sticking on it.
          It gives a clear report of how money is used  and as well as how to save.
        </p>
        <h2>Search Engine USA</h2>
        <p>
          created search engine which is made in CSS , HTML and JavaScript and
          is able to fetch in API the state and cities in USA and display their
          population latitude, longitude ,etc.
        </p>
        <h3>BlOGPOST</h3>
        <p>
          Created back end Blogpost which enable users to create blogs and
          enables anyone to add comment in Node.js and MongoDb.
        </p>
      </div>
      <div className="resume-languages">
        <h2 className="personal-projects">LANGUAGES</h2>
        <h4>English</h4>
        <h4>Kinyarwanda </h4>
      </div>


    
</Card>

    )
}

export default ResumeComponent;