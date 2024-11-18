import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PostList() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Now Playing",
      content: "현재상영중",
    },
    {
      id: 2,
      title: "Popular",
      content: "인기영화",
    },
    {
      id: 3,
      title: "Top Rated",
      content: "상위 영화",
    },
    {
      id: 4,
      title: "Upcoming",
      content: "개봉 예정",
    },
  ]);
  return (
    <div>
      {/* <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
      </ul> */}
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  // 이동을 하고 싶다
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3>
              {/* <p>{content}</p> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
