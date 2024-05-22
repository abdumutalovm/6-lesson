import React from "react";
import HomeHero from "../components/HomeHero";
import styled from "@emotion/styled";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import PlaylistCard from "../components/PlaylistCard";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../components/utilits";
import { useState } from "react";
import { create } from "../redux/authSlice";
import { useEffect } from "react";
function Home() {
  const [featured, setFeatured] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFeatured(data.playlists.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getToken()
        .then((data) => {
          dispatch(create(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, dispatch]);
  const HomeWrapper = styled.div`
    width: 66%;
    background-color: #121212;
  `;
  const Container = styled.div`
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    padding: 21px;
    display: flex;
    align-items: center;
    gap: 31px;
    flex-wrap: wrap;
  `;
  const CardWrapper = styled.div``;

  const HomeWrapperh1 = styled.h1`
    font-family: "CircularStd", sans-serif;
    font-size: 30px;
    line-height: 37.95px;
    letter-spacing: -3%;
    font-weight: 700;
    color: white;
    margin-top: 50px;
    margin-bottom: 26px;
  `;

  return (
    <HomeWrapper>
      <HomeHero>
        <Container></Container>
      </HomeHero>
      <CardWrapper>
        <HomeWrapperh1>Your top mixes</HomeWrapperh1>
        <Container>
          {featured.length > 0 &&
            featured.map((el, index) => {
              return <PlaylistCard key={index} data={el}></PlaylistCard>;
            })}
        </Container>
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home;
