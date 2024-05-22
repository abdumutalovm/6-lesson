import React from "react";
import styled from "@emotion/styled";

function RightSideBar() {
  const SideBarWrapper = styled.div`
    width: 17%;
    min-height: 100vh;
    background-color: #000;
    color: #b3b3b3;
  `;
  return <SideBarWrapper>RightSideBar</SideBarWrapper>;
}

export default RightSideBar;
