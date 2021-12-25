import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Myself from './mypic.jpeg'
import Likes from './Likes'
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
let likes = "Like It?"
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isLiked , setIsLiked] = useState(false);

  const like = () =>{
    if(isLiked){
      likes = "Thank you for liking"
    }
    else if(isLiked === false){
      likes = "Like It?"
    }
    setIsLiked(!isLiked)
  }

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Shubhrant Singh Yadav</h1>
            <h5>Competitive coder and Web Developer</h5>
            <p>
              I am Competitive Coder and an enthusiatic Web Developer and I seek to learn new tools and technologies .
            </p>
            <Likes liked = {like} liketext= {likes}/>
          </HeroLeft>
          <HeroRight>
            <Image
              src={Myself}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        {/* <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              // src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown> */}
      </HeroContainer>
    </main>
  );
}

export default Hero;
