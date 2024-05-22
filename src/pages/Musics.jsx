import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clock from "../assets/clock.svg";
import { FaHeart } from "react-icons/fa";
import styled from "@emotion/styled";
import pause from "../assets/pause.svg";
import shuffle from "../assets/shuffle.svg";
import repeat from "../assets/repeat.svg";
import music_time from "../assets/music_time.svg";
import volume_icon from "../assets/volume_icon.svg";
import volume from "../assets/volume.svg";

const MusicsWrapper = styled.div`
  width: 66%;
  min-height: 100%;
  position: relative;
`;

const BottomPlayer = styled.div`
  width: 66%;
  position: fixed;
  bottom: 0.1px;
  display: flex;
  align-items: center;
  background: #181818;
  margin: 0 auto;
  padding: 23px;
`;

const MusicAbout = styled.div`
  display: flex;
  align-item: center;
  flex-direction: column;
  margin-right: 32px;
`;

const MusicAbouth1 = styled.h1`
  width: 100px;
  font-family: "CircularStd", sans-serif;
  font-size: 18px;
  line-height: 22.77px;
  color: white;
  font-weight: 450;
`;
const MusicAbouth2 = styled.h1`
  font-family: "CircularStd", sans-serif;
  font-size: 16px;
  line-height: 20.24px;
  color: #b3b3b3;
  font-weight: 450;
  letter-spacing: -5%;
`;

const PlayerRep = styled.div`
  display: flex;
  align-items: center;
  gap: 76px;
  margin-left: 65px;
  margin-right: 210px;
  margin-bottom: 5px;
`;

const PlayerMenu = styled.img`
  cursor: pointer;
`;

const PlayerVolume = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Player = styled.div``;
function Musics() {
  const params = useParams();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [params.id, token]);

  return (
    <MusicsWrapper>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date Added</th>
            <th>
              <img src={clock} alt="clock img" />
            </th>
          </tr>
        </thead>
        <tbody>{/* Ro'yxat ma'lumotlarini joylashtiring */}</tbody>
      </table>
      <BottomPlayer className="bottom_music-player">
        <MusicAbout>
          <MusicAbouth1>Play It Safe</MusicAbouth1>
          <MusicAbouth2>Julia Wolf</MusicAbouth2>
        </MusicAbout>
        <FaHeart
          style={{
            fontSize: "25px",
            color: "green",
            marginRight: "105px",
            cursor: "pointer",
          }}
        />
        <Player>
          <PlayerRep>
            <PlayerMenu src={shuffle} alt="shuffle icon" />
            <PlayerMenu src={pause} alt="pause icon" />
            <PlayerMenu src={repeat} alt="repeat icon" />
          </PlayerRep>
          <PlayerMenu style={{ width: "400px" }} src={music_time} alt="" />
        </Player>
        <PlayerVolume>
          <PlayerMenu src={volume_icon} alt="volume_icon" />
          <PlayerMenu src={volume} alt="volume" />
        </PlayerVolume>
      </BottomPlayer>
    </MusicsWrapper>
  );
}

export default Musics;
