import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=itcs")
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1>Blog</h1>
      <div className="grid">
        {posts.map(post => (
          <article key={post.id} className={`card ${post.tag_list?.join(" ") || ""}`}>
            {post.cover_image && <img src={post.cover_image} alt={post.title} />}
            <h3>{post.title}</h3>
            <p className="meta">{post.readable_publish_date} • {post.reading_time_minutes} min</p>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
