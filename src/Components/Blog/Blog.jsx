import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

export default function Blog() {
  const [posts, setPosts] = useState([]);

 
  //multiple-user fetch
  useEffect(() => {
    const usernames = ["itcs", "wajeeha_zeeshan_fd0909b20"];
    const fetchBlogs = async () => {
      try {
        const allResponses = await Promise.all(
          usernames.map((username) =>
            fetch(`https://dev.to/api/articles?username=${username}&per_page=5`)
          )
        );

        const allData = await Promise.all(allResponses.map((res) => res.json()));
  
        const combinedPosts = allData.flat();
        setPosts(combinedPosts);
        console.log("Fetched combined data:", combinedPosts);
      } catch (error) {
        console.error("Error fetching multiple blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container blog-container">
      <h1 className="blog-title">Our Blogs</h1>

      <div className="grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.id}
              className={`card ${post.tag_list?.[0] || "theme-default"}`}
            >
              <h3>{post.title}</h3>
              <p className="meta">
                {post.readable_publish_date} • {post.reading_time_minutes} min
              </p>
              <p>{post.description}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <p>Loading blogs or none found...</p>
        )}
      </div>
    </div>
  );
}
