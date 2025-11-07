import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Blog.scss";



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