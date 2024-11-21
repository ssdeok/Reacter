import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";

export default function MovieList() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    // 2. useEffect에서 api요청 함수를 실행
    async function fetchData() {
      const deTail = await movieApi.getDetail(id);
      // 3. 응답데이터를 스테이트에 저장해야한다.
      setMovies(deTail);
    }
    fetchData();
    // 응답데이터를 스테이트에 저장
    // 응답데이터=detail
    // 렌더링 스테이트 = movies
  }, []);

  return (
    <div key={id}>
      <h3>상세페이지</h3>
      {/* 스테이트를 화면에 렌더링 */}
      {/* 스테이트=movies */}

      <p>{movies.original_title}</p>
      <p>{movies.overview}</p>
      <p>{movies.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
        alt=""
      />
    </div>
  );
}

// 나우플레잉의 정보 각각을 불러와야한다.
// 베놈을 클릭하면 베놈의 정보를
// 글레디에이터를 클릭하면 글레디에이터의 정보를
// 이렇게 각각의 값을 줘야 한다
// 더보기 안의 영화의 제목을 클릭하면
// 그 클릭한 영화에 대한 정보가 나오게된다.
// 포스트디테일에서 더보기릘 클릭하면
// 무비리스트를 출력하게 된다.

// 1. api요청을 함수로 만든다. getDetail
// 2. useEffect에서 api요청 함수를 실행
// 3. 응답데이터를 스테이트에 저장해야한다.
// 4. 스테이트를 화면에 렌더링 한다.
