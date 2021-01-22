import React from "react";
import Hero from "../components/Hero";
import Content from '../components/Content';


function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            I am a web-developer in the making! I am fluent in English, Spanish, and I have experience with German.Skills:
    Language Skills: Fluent in English and Spanish and some experience with German. One of my favriot past times is playing soccer I am the most at peace when I have a ball at my feet. I love the sport soo much that I decieded to coach a girls under 10 soccer team. I am currently the assistant but, I treat as If I'm the main coach. I have been playing for a really long time that I thought I pass what I know to these kids. I am also enrolled at Cal State San Bernardino with the goal to proceed my knowledge with software. I am computer systems Major and will be certified with UCR in their coding bootcamp. I plan to take the knowledge I learn from UCR to many internship and will continue to finish my degree at Cal State San Bernardino. Check out my linkedIn profile <a href="https://www.linkedin.com/in/jorge-martinez-722022192/" target="_blank" rel="noopener noreferrer">here!</a> I have great work experience as I have been working since senior year of high school. I ave worked in retails. Sales, fast food restaurants and I am currently employeed at Amazon in their fufillment center. I have been working during this pandemic which gave me the idea to further my knowledge in coding which is why I enrolled into UCR coding bootcamp!
    Check out my resume  <a href="https://dochub.com/j-a-mjorgemartinez21/pqb0g5YRq7EMnWzVJ2nx67/jorges-resume-pdf" target="_blank" rel="noopener noreferrer">here!</a>
            </Content>
        </div>
    );

}

export default AboutPage;