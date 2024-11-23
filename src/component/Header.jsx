import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="text-align">
        <h2>출발비디오여행</h2>

        <Link to="/">
          <h3>Home</h3>
        </Link>

        {/* <li>
          <Link to="/posts">메인페이지</Link>
        </li> */}
      </div>
      <div>
        <button>로그인</button>
      </div>
    </header>
  );
}
