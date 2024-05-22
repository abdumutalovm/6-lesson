import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.png";
import library from "../assets/library.png";
import liked_song from "../assets/liked_song.png";
import plus from "../assets/plus.png";
import home from "../assets/home.png";

const SideBarWrapper = styled.div`
  width: 17%;
  min-height: 100vh;
  background-color: #000;
  color: #b3b3b3;
  padding-left: 25px;
  padding-right: 48px;
  padding-top: 70px;
`;

const TopMenusSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-item: center;
`;
const MenuWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;

const HomeText = styled.h1`
  font-family: "CircularStd", sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  padding-top: 6px;
`;

const Hr = styled.hr`
  width: 210px;
  margin-top: 20px;
  background-color: #282828;
  height: 1px;
  border: none;
  margin-bottom: 20px;
`;

const CategoryText = styled.h1`
  font-size: 15px;
  margin-bottom: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TopMenusCategory = styled.div`
  width: 310px;
  font-family: "CircularStd", sans-serif;
  font-weight: 450;
  line-height: 22.77px;
  color: #b3b3b3;
  margin-bottom: 1472px;
`;
function LeftSideBar() {
  return (
    <SideBarWrapper>
      <TopMenusSideBar>
        <MenuWrapper>
          <img src={home} alt="home button icon" />
          <HomeText>Home</HomeText>
        </MenuWrapper>
        <MenuWrapper>
          <img src={search} alt="search button icon" />
          <HomeText>Search</HomeText>
        </MenuWrapper>
        <MenuWrapper style={{ marginBottom: "29px" }}>
          <img src={library} alt="library button icon" />
          <HomeText>Your Library</HomeText>
        </MenuWrapper>
        <MenuWrapper>
          <img src={plus} alt="plus button icon" />
          <HomeText>Create Playlist</HomeText>
        </MenuWrapper>
        <MenuWrapper>
          <img src={liked_song} alt="liked_song button icon" />
          <HomeText>Liked Songs</HomeText>
        </MenuWrapper>
      </TopMenusSideBar>
      <Hr />

      <TopMenusCategory>
        <CategoryText>Chill Mix</CategoryText>
        <CategoryText>Insta Hits</CategoryText>
        <CategoryText>Your Top Songs 2021</CategoryText>
        <CategoryText>Mellow Songs</CategoryText>
        <CategoryText>Anime Lofi & Chillhop Music</CategoryText>
        <CategoryText>BG Afro “Select” Vibes</CategoryText>
        <CategoryText>Afro “Select” Vibes</CategoryText>
        <CategoryText>Happy Hits!</CategoryText>
        <CategoryText>Deep Focus</CategoryText>
        <CategoryText>Instrumental Study</CategoryText>
        <CategoryText>OST Compilations</CategoryText>
        <CategoryText>Nostalgia for old souled mill...</CategoryText>
        <CategoryText>Mixed Feelings</CategoryText>
      </TopMenusCategory>
    </SideBarWrapper>
  );
}

export default LeftSideBar;
