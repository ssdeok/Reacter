import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <h3>출발비디오여행</h3>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">마이페이지</Link>
        </li>
      </ul>
    </header>
  );
}
