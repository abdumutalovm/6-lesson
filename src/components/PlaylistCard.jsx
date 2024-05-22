import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const CardWrapper = styled.div`
  background: #1b1b1b;
  width: 213px;
  height: 324px;
  padding: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    background: #212121;
  }
`;
const PlayListImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const PlayListh3 = styled.h3`
  color: white;
  font-family: "CircularStd", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 25px;
`;

const PlayListh4 = styled.h4`
  color: #b3b3b3;
  font-family: "CircularStd", sans-serif;
  font-size: 18px;
  font-weight: 450;
  line-height: 22.77px;
`;

const About = styled.div`
  width: 182px;
  height: 99px;
  overflow: hidden;
`;

function PlaylistCard(props) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`playlist/${props.data.id}`);
  }

  return (
    <CardWrapper onClick={handleRedirect}>
      <div>
        <PlayListImg src={props.data.images[0].url} alt="" />
      </div>
      <About>
        <PlayListh3>{props.data.name}</PlayListh3>
        <PlayListh4>{props.data.description}</PlayListh4>
      </About>
    </CardWrapper>
  );
}

export default PlaylistCard;
