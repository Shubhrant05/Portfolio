import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
 background-color : white;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height:  200px;
  position: relative;
  margin-top: 2rem;

  h1 {
    display:flex;
    justify-content:center;
    align-items:center;
    
    color: crimson;
    font-size:2rem;
  }

`;
function Footer() {
  return (
    <FooterSection>
      <div>
        <h1>Hope You Liked My Portfolio Site!!</h1>
      </div>
    </FooterSection>
  );
}

export default Footer;
