import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import movieApi from "../api/ssd_api";
import { useParams } from "react-router-dom";

export default function PostList() {
  // const navigate = useNavigate();
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
  });
  console.log(movies);

  useEffect(() => {
    async function fetchMovies() {
      const nowPlaying = await movieApi.getNow();
      const popular = await movieApi.getPop();
      const topRated = await movieApi.getTop();

      setMovies({
        nowPlaying: nowPlaying.results,
        popular: popular.results,
        topRated: topRated.results,
      });
    }
    fetchMovies();
  }, []);

  // const categories = [
  //   {
  //     id: 1,
  //     url: "now_playing",
  //     title: "Now Playing",
  //     content: "현재상영중",
  //   },
  //   {
  //     id: 2,
  //     url: "popular",
  //     title: "Popular",
  //     content: "인기영화",
  //   },
  //   {
  //     id: 3,
  //     url: "top_rated",
  //     title: "Top Rated",
  //     content: "상위 영화",
  //   },
  // ];

  return (
    <div className="movie-container">
      {/* <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
      </ul> */}
      <div className="section">
        <h3>영화 카테고리</h3>
        <h3>Now Playing</h3>
        <Link to="/posts/now_playing">더보기</Link>
        <ul className="movie-list">
          {movies.nowPlaying.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Popular Movies</h3>
        <Link to="/posts/popular">더보기</Link>
        <ul className="movie-list">
          {movies.popular.map((movie) => (
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

      <div className="section">
        <h3>Top Rated Movies</h3>
        <Link to="/posts/top_rated">더보기</Link>
        <ul className="movie-list">
          {movies.topRated.map((movie) => (
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
    </div>
  );
}
