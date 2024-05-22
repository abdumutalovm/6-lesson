import React from "react";
import styled from "@emotion/styled";
import addPerson from "../assets/userPlus.svg";
import union from "../assets/union.svg";

function RightSideBar() {
  const SideBarWrapper = styled.div`
    width: 17%;
    min-height: 100vh;
    background-color: #000;
    color: #b3b3b3;
  `;
  const SideBarTop = styled.div`
    display: flex;
    align-item: center;
    padding: 29px 20px;
  `;
  return (
    <SideBarWrapper>
      <SideBarTop>
        <h1 style={{ marginRight: "45px" }}>Friend Activity</h1>
        <img
          style={{
            marginRight: "7px",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "700",
          }}
          src={addPerson}
          alt="addPerson icon"
        />
        <img style={{ cursor: "pointer" }} src={union} alt="union" />
      </SideBarTop>
    </SideBarWrapper>
  );
}

export default RightSideBar;
