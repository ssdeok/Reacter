import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";

export default function MovieList() {
  const { url } = useParams();
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (url === "now_Playing") {
      getNowPlay();
    }

    async function getNowPlay() {
      const nowPLaying = await movieApi.getNow();
      setMovie(nowPLaying.results);
    }
  });

  return (
    <div>
      <h3>상세페이지</h3>
      {movies.map((movie) => {
        const { title, id, overview } = movie;
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{overview}</p>
          </div>
        );
      })}
    </div>
  );
}

// 나우플레잉의 정보 각각을 불러와야한다.
// 베놈을 클릭하면 베놈의 정보를
// 글레디에이터를 클릭하면 글레디에이터의 정보를
