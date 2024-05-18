import React from "react";
import HomeHero from "../components/HomeHero";
import styled from "@emotion/styled";

function Home() {
  const HomeWrapper = styled.div`
    width: 66%;
  `;

  return (
    <HomeWrapper>
      <HomeHero></HomeHero>
    </HomeWrapper>
  );
}

export default Home;
