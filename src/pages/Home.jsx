import React, { useState, useEffect } from "react";
import HomeHero from "../components/HomeHero";
import styled from "@emotion/styled";
import PlaylistCard from "../components/PlaylistCard";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../components/utilits";
import { create } from "../redux/authSlice";

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loader, setLoader] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setLoader(true);
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
        })
        .finally(() => {
          setLoader(false);
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
    display: flex;
    align-items: center;
    gap: 31px;
    flex-wrap: wrap;
  `;
  const CardWrapper = styled.div`
    margin: 0 auto;
    padding: 21px;
  `;

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

  const Skeleton = styled.div`
    background-color: #333;
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -150%;
      width: 150%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 0) 0%,
        rgba(51, 51, 51, 0.2) 50%,
        rgba(51, 51, 51, 0) 100%
      );
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      0% {
        left: -150%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 100%;
      }
    }
  `;

  const SkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 200px;

    .skeleton-image {
      height: 160px;
      width: 100%;
    }

    .skeleton-text-short {
      height: 20px;
      width: 50%;
    }

    .skeleton-text-long {
      height: 20px;
      width: 100%;
    }
  `;

  return (
    <HomeWrapper>
      <HomeHero>
        <Container></Container>
      </HomeHero>
      <CardWrapper>
        <HomeWrapperh1>Your top mixes</HomeWrapperh1>
        <Container>
          {loader
            ? Array(8)
                .fill()
                .map((_, index) => (
                  <SkeletonCard key={index}>
                    <Skeleton className="skeleton-image" />
                    <Skeleton className="skeleton-text-short" />
                    <Skeleton className="skeleton-text-long" />
                    <Skeleton className="skeleton-text-long" />
                  </SkeletonCard>
                ))
            : featured.map((el, index) => (
                <PlaylistCard key={index} data={el} />
              ))}
        </Container>
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home;
