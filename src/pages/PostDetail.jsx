import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const location = useLocation();
  const { post } = location.state;
  // post라는 data를 활용할 수 있겠져?
  const { title, content } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      {/* <h3>{post.title}</h3>
      <p>{post.content}</p> */}
      {/* {postId}번째 게시글 */}
    </div>
  );
}
