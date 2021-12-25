import React from "react";
import { stackList } from "../../data/ProjectData";
import Mypic from "../Hero/mypic.jpeg"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={Mypic}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong> Shubhrant Singh Yadav</strong> . I am pursuing my Bachelor's degree in Computer Science and Engineering from Indian Institue of Information Technology Design and Manufacturing , Jabalpur. Presently I am focussed on Competitive Coding and Web Development. I am a 3 star coder at codechef and have acquired skills on HTML , CSS , Javascript , Bootstrap , React.js , Node.js , Express.js and MySQL. I am also learning MongoDB . In near future I see myself as a MERN Developer and a refined coder. I want to become a Software Development Engineering and contribute to the technologies as much as I can. 
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
