import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import movieApi from "../api/ssd_api";

export default function PostDetail() {
  useEffect(() => {
    async function getNowPlay() {
      const nowPlaying = await movieApi.getNow();
      console.log(nowPlaying)
    }
    getNowPlay();
  });
  return <div></div>;
}
