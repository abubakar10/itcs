import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blog.scss";

export default function Blog() {
  const [allPosts, setAllPosts] = useState([]); // Store all approved blogs
  const [filteredPosts, setFilteredPosts] = useState([]); // Posts after tag filtering
  const [posts, setPosts] = useState([]); // Displayed posts for current page
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("All");
  const postsPerPage = 9;

  const organization = "itcs11";
  const backendUrl = "http://localhost:5000";

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const fetchAllDevBlogs = async () => {
          let allBlogs = [];
          let page = 1;
          while (true) {
            const res = await fetch(
              `https://dev.to/api/organizations/${organization}/articles?per_page=100&page=${page}&_=${Date.now()}`
            );
            if (!res.ok) throw new Error("Failed to fetch from Dev.to");
            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) break;
            allBlogs = [...allBlogs, ...data];
            page++;
          }
          return allBlogs;
        };

        const [devBlogs, approvedRes] = await Promise.all([
          fetchAllDevBlogs(),
          axios.get(`${backendUrl}/api/blogs/approved-ids`)
        ]);
        const approvedData = approvedRes.data;

        const approvedIds = approvedData.map(item => item.devId);
        const authorMap = {};
        const dateMap = {};

        approvedData.forEach(item => {
          if (item.customAuthor) authorMap[item.devId] = item.customAuthor;
          if (item.customDate) dateMap[item.devId] = item.customDate;
        });

        const approvedBlogs = devBlogs
          .filter(blog => approvedIds.includes(blog.id))
          .map(blog => ({
            ...blog,
            displayAuthor: authorMap[blog.id] || blog.user?.username || "Unknown",
            displayDate: dateMap[blog.id] || blog.readable_publish_date
          }));

        approvedBlogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

        setAllPosts(approvedBlogs);
        setFilteredPosts(approvedBlogs); // Initialize filtered with all

      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter posts when selectedTag changes
  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredPosts(allPosts);
    } else {
      const filtered = allPosts.filter(post =>
        post.tag_list && post.tag_list.includes(selectedTag)
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [selectedTag, allPosts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Update displayed posts when page or filtered list changes
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setPosts(filteredPosts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, filteredPosts]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Extract unique tags
  const allTags = ["All", ...new Set(allPosts.flatMap(post => post.tag_list || []))];

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // Function to format date like "September 23, 2025"
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <div className="blog-public-container">
      <h2 className="blog-public-title">Our Blogs</h2>

      {/* Tag Filters */}
      <div className="tag-pills">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-pill ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag === "All" ? "All" : `#${tag}`}
          </button>
        ))}
      </div>

      {loading && <p className="loading-text">Loading approved blogs...</p>}

      <div className="blog-grid">
        {posts.length > 0 ? (
          posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card__content">
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
                  {post.displayAuthor} • {formatDate(post.displayDate)} • {post.reading_time_minutes} min read
                </p>

                <p className="description">{post.description}</p>

                <div className="tags-small">
                  {post.tag_list?.slice(0, 3).map(tag => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>

                <Link to={`/blog/${post.id}`} className="read-more">
                  Read more
                </Link>
              </div>
            </article>
          ))
        ) : (
          !loading && (
            <p className="no-posts">
              No blogs found for this category.
            </p>
          )
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            style={{
              padding: '8px 16px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              background: currentPage === 1 ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
              color: currentPage === 1 ? 'var(--text-disabled)' : 'var(--text-primary)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Prev
          </button>

          {currentPage > 3 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >1</button>
              {currentPage > 4 && <span className="dots" style={{ color: 'var(--text-secondary)' }}>...</span>}
            </>
          )}

          {Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
            .filter(page => page >= 1 && page <= totalPages)
            .map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: '8px 12px',
                  border: page === currentPage ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                  borderRadius: '8px',
                  background: page === currentPage ? 'var(--accent-blue)' : 'var(--bg-card)',
                  color: page === currentPage ? 'white' : 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '35px'
                }}
              >
                {page}
              </button>
            ))}

          {currentPage < totalPages - 2 && (
            <>
              {currentPage < totalPages - 3 && <span className="dots" style={{ color: 'var(--text-secondary)' }}>...</span>}
              <button
                onClick={() => setCurrentPage(totalPages)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >{totalPages}</button>
            </>
          )}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 16px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              background: currentPage === totalPages ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
              color: currentPage === totalPages ? 'var(--text-disabled)' : 'var(--text-primary)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Next
          </button>

          <div className="jump-to-page" style={{ marginLeft: '10px' }}>
            <input
              type="number"
              min="1"
              max={totalPages}
              placeholder="Go to..."
              onKeyDown={e => {
                if (e.key === "Enter") {
                  const page = Number(e.target.value);
                  if (page >= 1 && page <= totalPages) setCurrentPage(page);
                }
              }}
              style={{
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                width: '80px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
