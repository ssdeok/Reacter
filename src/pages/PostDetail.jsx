import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";
import MovieList from "./MovieList";

export default function PostDetail() {
  const { url } = useParams();

  // setMovie로 렌더링해주면
  //useState를 하나만 설정해도 아래에서 사용가능
  const [moviearray, setMovie] = useState([]);
  // url이 now_playing이면 나우플레잉 전체목록이 나오고
  // url이 popular면 파퓰러 전체목록이나오고
  // url이 toprated면 탑 전체목록이 나오게

  useEffect(() => {
    if (url === "now_playing") {
      getNowPlay();
    } else if (url === "popular") {
      getPopular();
    } else if (url === "top_rated") {
      getTopRated();
    }
    // state를 이용해서 렌더링
    console.log(url);
    async function getNowPlay() {
      const nowPlaying = await movieApi.getNow();
      console.log(nowPlaying.results);
      setMovie(nowPlaying.results);
    }

    async function getPopular() {
      const popularMovie = await movieApi.getPop();
      console.log(popularMovie);
      setMovie(popularMovie.results);
    }

    async function getTopRated() {
      const topRated = await movieApi.getTop();
      console.log(topRated);
      setMovie(topRated.results);
    }
  }, []);

  return (
    <div>
      {moviearray.map((movie) => {
        const { title, id, poster_path } = movie;
        return (
          // 부모태그가 2개기때문에 감싸줘야함
          <div key={id}>
            <Link to="/movies">
              <p>{title}</p>
            </Link>

            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          </div>
        );
      })}
    </div>
  );
}
