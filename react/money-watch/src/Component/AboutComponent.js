import React from 'react';
import './index.css';
import myphoto from '../Asset/myphoto.jpeg'
import {Card} from 'antd'
import {RightOutlined,GooglePlusOutlined,PhoneOutlined,AimOutlined,
    SmileTwoTone,
    ScheduleTwoTone,
    CustomerServiceTwoTone,
    DashboardTwoTone,

  } from '@ant-design/icons'
import { Progress } from 'antd';

const AboutComponent=()=>{
    return(
        <Card className="about-container">
            <h1 className="about-text">About</h1>
            <p> I'M  a SoftwareDeveloper and Fullstack,
                i love coding and  i can do  a website from back-end and front-end  love this career of coding,
                “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
</p>



<div  className='above-text'>
<img src={myphoto}alt="photo" className="photo"/>
<p>UI/UX Designer & Web Developer.</p>

</div>


<div className="about-status" >
 <p><RightOutlined /><span className="status"> Names</span>:Rutayisire Isimbi thirtsa</p> 
 <p className="status1"><GooglePlusOutlined />thirtsaisimbi@gmail.com</p>
 <p className="status2"><PhoneOutlined />+250789098736</p>
 <p className="status3"><AimOutlined />Rwanda/Kigali City</p>
 <p><RightOutlined /><span className="status4"> freelancer</span>:I'm available</p> 
</div>
<p className="paragraph-about4">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
</p>
            <h1 className="paragraph-about5">Facts</h1>
            <p className="paragraph-about">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
</p>
            <div className="about-facts" >
                <span><SmileTwoTone />  232</span><p className="fact-about">Happy Clients</p><p className="fact-about1">consequuntur quae</p>
                <span><ScheduleTwoTone /> 232</span><p className="fact-about">Projects </p><p className="fact-about1">consequuntur quae</p>
                <span><CustomerServiceTwoTone /> 1453</span><p className="fact-about">Hours Of Support </p><p className="fact-about1">aut commodi quaerat </p>
                <span><DashboardTwoTone /> 32</span><p className="fact-about">Hours Of Support </p><p className="fact-about1">aut commodi quaerat </p>
            </div>
             <h1 className="paragraph-about5">Skills</h1>
            <p className="paragraph-about">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
</p> 

<div className="skill" >
   HTML <Progress percent={80} size="small" status="active" />
CSS<Progress percent={90} size="small" status="active" />
JAVASCRIPT<Progress percent={60} size="small" status="active" />

PHOTOSHOP<Progress percent={55} size="small" status="active" />

</div>

</Card>
        
    )
}


export default AboutComponent;