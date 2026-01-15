import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Blog.scss";
import "./BlogDetail.scss";

import FacebookIcon from "../../assets/logos/Facebook.svg";
import LinkedInIcon from "../../assets/logos/LinkedIn.svg";
import TwitterIcon from "../../assets/logos/Twitter.svg";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [customAuthor, setCustomAuthor] = useState(null);
  const [copyStatus, setCopyStatus] = useState("Copy Link");
  const backendUrl = "http://192.168.0.223:5000";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  useEffect(() => {
    const fetchCustomAuthor = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/blogs/approved-ids`);
        const data = await res.json();

        const match = data.find((blog) => blog.devId === Number(id));
        if (match && match.customAuthor) {
          setCustomAuthor(match.customAuthor);
        }
      } catch (err) {
        console.error("Error fetching custom author:", err);
      }
    };

    fetchCustomAuthor();
  }, [id]);

  if (!article) return (
    <div className="blog-detail-loading">
      <div className="loader"></div>
      <p>Loading insight...</p>
    </div>
  );

  const displayAuthor =
    customAuthor || article.user?.name || article.user?.username || "Unknown Author";

  const shareUrl = window.location.href;
  const shareTitle = article?.title || "ITCS Blog";

  const shareActions = {
    linkedin: () => {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    },
    facebook: () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    },
    twitter: () => {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    },
    copy: () => {
      navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy Link"), 2000);
    }
  };

  return (
    <div className="blog-detail-wrapper">
      <div className="blog-detail-nav">
        <button onClick={() => navigate("/blog")} className="back-btn">
          <span className="arrow">←</span> Back to Blogs
        </button>
      </div>

      <div className="blog-detail">
        {article.cover_image && (
          <div className="detail-cover-container">
            <img
              src={article.cover_image}
              alt={article.title}
              className="detail-cover"
            />
          </div>
        )}

        <h1>{article.title}</h1>

        <div className="detail-meta">
          <span className="author">By {displayAuthor}</span>
          <span className="separator">•</span>
          <span className="date">{article.readable_publish_date}</span>
          <span className="separator">•</span>
          <span className="read-time">{article.reading_time_minutes} min read</span>
        </div>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.body_html),
          }}
        />

        <div className="blog-detail-footer">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button onClick={shareActions.linkedin} className="share-btn linkedin" title="Share on LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </button>
            <button onClick={shareActions.facebook} className="share-btn facebook" title="Share on Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </button>
            <button onClick={shareActions.twitter} className="share-btn twitter" title="Share on Twitter">
              <img src={TwitterIcon} alt="Twitter" />
            </button>
            <button onClick={shareActions.copy} className={`share-btn copy ${copyStatus === 'Copied!' ? 'copied' : ''}`}>
              {copyStatus}
            </button>
          </div>
          <button onClick={() => navigate("/blog")} className="back-btn bottom">
            View More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
