import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("all");
  const [loading, setLoading] = useState(true);

  const organization = "itcs11";

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dev.to/api/organizations/${organization}/articles?per_page=50&_=${new Date().getTime()}`
      );
      const data = await response.json();

      setPosts(
        data.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        )
      );

      const allTags = data.flatMap(post => post.tag_list || []);
      setTags(Array.from(new Set(allTags)).sort());
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 30000); 
    return () => clearInterval(interval);
  }, []);

  const filteredPosts =
    activeTag === "all"
      ? posts
      : posts.filter(post => post.tag_list?.includes(activeTag));

  return (
    <div className="container blog-container">
      <h1 className="blog-title">Our Blogs</h1>
      {loading && <p className="loading-text">Checking for new posts...</p>}

      <div className="tag-pills">
        <button
          className={`tag-pill ${activeTag === "all" ? "active" : ""}`}
          onClick={() => setActiveTag("all")}
        >
          All
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={`tag-pill ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className={`grid ${activeTag !== "all" ? "filtered" : ""}`}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <article key={post.id} className="card">
              {(post.cover_image || post.social_image) && (
                <img
                  src={post.cover_image || post.social_image}
                  alt={post.title}
                  className="blog-cover"
                  loading="lazy"
                />
              )}
              <h3>{post.title}</h3>
              <p className="meta">
                👤 {post.user?.username || "Unknown"} •{" "}
                {post.readable_publish_date} • {post.reading_time_minutes} min read
              </p>
              <p className="description">{post.description}</p>
              <div className="tags-small">
                {post.tag_list?.slice(0, 3).map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <p className="no-posts">
            {loading ? "Loading blogs..." : "No blogs found for this tag."}
          </p>
        )}
      </div>
    </div>
  );
}
