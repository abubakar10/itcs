import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Blog.scss";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      

      {/* Dynamic cover image */}
      {article.cover_image && (
        <img
          src={article.cover_image}
          alt={article.title}
          className="detail-cover"
        />
      )}
      
      <h1>{article.title}</h1>
      
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.body_html),
        }}
      <h1>{article.title}</h1>
      {article.cover_image && <img src={article.cover_image} alt={article.title} />}
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{ __html: article.body_html }}
      />
    </div>
  );
};

export default BlogDetail;
