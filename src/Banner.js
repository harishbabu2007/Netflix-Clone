import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(
        request.fetchActionMovies ||
          request.fetchComedyMovies ||
          request.fetchDocumentaries ||
          request.fetchHorrorMoives ||
          request.fetchNetflixOriginals ||
          request.fetchTopRated ||
          request.fetchTrending
      );
      setState(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__btns">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fade"></div>
    </header>
  );
}

export default Banner;
