import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link
import axios from "axios";
import "./BlogApproval.scss";

export default function BlogApproval() {
  const [blogs, setBlogs] = useState([]);
  const [statuses, setStatuses] = useState({});
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
      if (Array.isArray(statusRes.data)) {
        statusRes.data.forEach(b => {
          statusMap[b.devId] = b.status;
        });
      }
      setStatuses(statusMap);

     
      const visibleBlogs = devBlogs.filter(blog => statusMap[blog.id] !== "rejected");
      setBlogs(visibleBlogs);

    } catch (err) {
      console.error("Error fetching blogs or statuses:", err);
      alert("Failed to fetch blogs or statuses. Check console.");
    } finally {
      setLoading(false);
    }
  };

  
  const updateStatus = async (devId, status) => {
    try {
      await axios.patch(`${backendUrl}/api/blogs/${devId}/status`, { status });
      setStatuses(prev => ({ ...prev, [devId]: status }));

      if (status === "rejected") {
        setBlogs(prev => prev.filter(blog => blog.id !== devId));
      }
    } catch (err) {
      console.error("Error updating status:", err.response?.data || err.message);
      alert("Failed to update status. Check console.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container blog-container">
      <h1 className="blog-title">Admin Panel - Blogs</h1>
      {loading && <p className="loading-text">Loading blogs...</p>}

      <div className="grid">
        {blogs.map(blog => (
          <article key={blog.id} className="card">
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
              👤 {blog.user?.username || "Unknown"} •{" "}
              {blog.readable_publish_date} • {blog.reading_time_minutes} min read
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
          </article>
        ))}
        {!loading && blogs.length === 0 && <p>No blogs found.</p>}
      </div>
    </div>
  );
}
