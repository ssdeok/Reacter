import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";
import "../App.css";

export default function Home() {
  const [movied, setMovied] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = await movieApi.getSearchResults(searchTerm);
      setSearchResults(results.results);
    }
  };
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
    <div className="movie-container">
      <form id="search-form-view" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((movie) => (
              <li>
                {movie.title}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="{movie.title}"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* <span>아이디</span>
      <input type="text" />
      <span>비밀번호</span>
      <input type="text" /> */}
      <div className="section">
        <h3>Now Playing</h3>
        <Link to="/posts/now_playing">더보기</Link>
        {movied.nowPlaying.map((movie) => (
          <ul className="movie-list">
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </li>
          </ul>
        ))}
      </div>
      <div className="section">
        <h3>Popular Movies</h3>
        <Link to="/posts/popular">더보기</Link>

        {movied.popular.map((movie) => (
          <ul className="movie-list">
            <li key={movie.id}>
              {movie.title}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </li>
          </ul>
        ))}
      </div>
      <div className="section">
        <h3>Top Rated Movies</h3>
        <Link to="/posts/top_rated">더보기</Link>
        <ul className="movie-list">
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
    </div>
  );
}
