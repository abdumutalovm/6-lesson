import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clock from "../assets/clock.svg";
import SpotifyPlayer from "react-spotify-player";
function Musics() {
  const params = useParams();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}`, {
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
  }, []);
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
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
      </table>
    </div>
  );
}

export default Musics;
