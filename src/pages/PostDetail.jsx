import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";

export default function PostDetail() {
  useEffect(() => {
    async function getNowPlay() {
      const nowPlaying = await movieApi.getNow();
      console.log(nowPlaying);
    }
    getNowPlay();

    // async function getPopular() {
    //   const popularMovie = await movieApi.getPop();
    //   console.log(popularMovie);
    // }
    // getPopular();

    // async function getTopRated() {
    //   const topRated = await movieApi.getTop();
    //   console.log(topRated);
    // }
    // getTopRated();
  });

  return <div></div>;
}
