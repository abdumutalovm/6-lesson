import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "./utilits";
import { create } from "../redux/authSlice";

function HomeHero() {
  const token = useSelector(state => state.auth.token); 
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log('playlists');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      getToken()
        .then(res => {
          dispatch(create(res));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [token, dispatch]);
  
  return <div></div>;
}

export default HomeHero;
