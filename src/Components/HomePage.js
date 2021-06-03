import React from "react";
import image from "../Assets/image.jpg";
import "./index.css";
import { Button ,Carousel} from "antd";
import { Link } from "react-router-dom";

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};

const Homepage = () => {
  return (
    <div className=" home-layout">
      <h1 style={{ margin: "3% 0% 0% 5%", font: "15px", color: "white" }}>
        Money watch
      </h1>
      {/* <h1 className="home">English</h1> */}
      <p className="middle-paragraphy">Money Watch</p>

      <Carousel autoplay>
        <div  className="about-paragraphy">
          <h3 style={contentStyle}>
            <p1 >
              “LET YOUR DREAM COMES AND PLANS COMES TRUE”
            </p1>
          
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <p2>Do not save what is left after spending, but spend what is left after saving.</p2>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <p3>Never spend your money before you have it.</p3>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <p5>He who buys what he does not need, steals from himself.</p5>
          </h3>
        </div>
      </Carousel>
      <div>
        <Button type="primary" htmlType="link" className="home-button">
          <Link to="/signin">Let's Get Started.</Link>
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
