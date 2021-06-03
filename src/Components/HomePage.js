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
        <div>
          <h3 style={contentStyle}>
            <p1 className="about-paragraphy">
              “LET YOUR DREAM COMES AND PLANS COMES TRUE”
            </p1>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
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
