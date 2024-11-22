import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul>
        <h3>출발비디오여행</h3>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/posts">메인페이지</Link>
        </li> */}
      </ul>
      <div>
        <button>로그인</button>
      </div>
    </header>
  );
}
