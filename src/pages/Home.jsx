import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";

export default function Home() {
  const [movied, setMovied] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
  });

  useEffect(() => {
    async function fetchMovied() {
      const nowPlaying = await movieApi.getNow();
      const popular = await movieApi.getPop();
      const topRated = await movieApi.getTop();

      setMovied({
        nowPlaying: nowPlaying.results.slice(0, 5),
        popular: popular.results.slice(0, 5),
        topRated: topRated.results.slice(0, 5),
      });
    }
    fetchMovied();
  }, []);

  return (
    <div>
      <h3>Now Playing</h3>
      <Link to="/posts/now_playing">더보기</Link>
      {movied.nowPlaying.map((movie) => (
        <ul>
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            {movie.title}
          </li>
        </ul>
      ))}

      <h3>Popular Movies</h3>
      <Link to="/posts/popular">더보기</Link>
      <ul>
        {movied.popular.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>

      <h3>Top Rated Movies</h3>
      <Link to="/posts/top_tated">더보기</Link>
      <ul>
        {movied.topRated.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
