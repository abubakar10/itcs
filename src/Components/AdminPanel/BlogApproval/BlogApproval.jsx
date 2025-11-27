import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogApproval.scss";

export default function BlogApproval() {
  const [blogs, setBlogs] = useState([]);
  const [statuses, setStatuses] = useState({});
  const [authors, setAuthors] = useState({});
  const [dates, setDates] = useState({});
  const [loading, setLoading] = useState(true);

  const organization = "itcs11";
  const backendUrl = "http://localhost:5000";

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const [devRes, statusRes] = await Promise.all([
        fetch(`https://dev.to/api/organizations/${organization}/articles?per_page=50`),
        axios.get(`${backendUrl}/api/blogs/statuses`)
      ]);

      const devBlogs = await devRes.json();
      const statusMap = {};
      const authorMap = {};
      const dateMap = {};

      if (Array.isArray(statusRes.data)) {
        statusRes.data.forEach(b => {
          statusMap[b.devId] = b.status;
          authorMap[b.devId] = b.customAuthor || "";
          dateMap[b.devId] = b.customDate || "";
        });
      }

      setStatuses(statusMap);
      setAuthors(authorMap);
      setDates(dateMap);

      const visibleBlogs = devBlogs.filter(blog => statusMap[blog.id] !== "rejected");
      setBlogs(visibleBlogs);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch blogs or statuses.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (devId, status) => {
    try {
      await axios.patch(`${backendUrl}/api/blogs/${devId}/status`, { status });
      setStatuses(prev => ({ ...prev, [devId]: status }));
      if (status === "rejected") setBlogs(prev => prev.filter(blog => blog.id !== devId));
    } catch {
      alert("Failed to update status.");
    }
  };

  const updateAuthor = async (devId, author) => {
    try {
      await axios.patch(`${backendUrl}/api/blogs/${devId}/status`, { customAuthor: author });
      setAuthors(prev => ({ ...prev, [devId]: author }));
    } catch {
      alert("Failed to update author.");
    }
  };

  const updateDate = async (devId, customDate) => {
    if (!customDate) return alert("Date cannot be empty.");
    try {
      await axios.patch(`${backendUrl}/api/blogs/${devId}/status`, { customDate });
      setDates(prev => ({ ...prev, [devId]: customDate }));
    } catch {
      alert("Failed to update custom date.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog-approval-container">
      <h2>Blogs for Approval</h2>

      {loading && <p className="loading-text">Loading blogs...</p>}

      <div className="blog-grid">
        {blogs.map(blog => (
          <article key={blog.id} className="blog-card">
            <div className="blog-card__content">
              {(blog.cover_image || blog.social_image) && (
                <img
                  src={blog.cover_image || blog.social_image}
                  alt={blog.title}
                  className="blog-cover"
                  loading="lazy"
                />
              )}
              <h3>{blog.title}</h3>
              <p className="meta">
                Author: {authors[blog.id] || blog.user?.username || "Unknown"} •{" "}
                {dates[blog.id]
                  ? new Date(dates[blog.id]).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                  : blog.readable_publish_date}{" "}
                • {blog.reading_time_minutes} min read
              </p>

              <p className="description">{blog.description}</p>

              <div className="tags-small">
                {blog.tag_list?.slice(0, 3).map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>

              <Link to={`/admin/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>

            <div className="blog-card__footer">
              <div className="author-edit">
                <input
                  type="text"
                  placeholder="Edit author name"
                  value={authors[blog.id] || ""}
                  onChange={e =>
                    setAuthors(prev => ({ ...prev, [blog.id]: e.target.value }))
                  }
                />
                <button onClick={() => updateAuthor(blog.id, authors[blog.id] || "")}>
                  Save Author
                </button>
              </div>

              <div className="date-edit">
                <input
                  type="date"
                  value={dates[blog.id] || ""}
                  onChange={e => setDates(prev => ({ ...prev, [blog.id]: e.target.value }))}
                />
                <button onClick={() => updateDate(blog.id, dates[blog.id] || "")}>
                  Save Date
                </button>
              </div>

              <div className="approval-buttons">
                <button
                  className="approve-btn"
                  disabled={statuses[blog.id] === "approved"}
                  onClick={() => updateStatus(blog.id, "approved")}
                >
                  Approve
                </button>
                <button
                  className="reject-btn"
                  disabled={statuses[blog.id] === "rejected"}
                  onClick={() => updateStatus(blog.id, "rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!loading && blogs.length === 0 && <p className="no-blogs">No blogs pending approval.</p>}
    </div>
  );
}
