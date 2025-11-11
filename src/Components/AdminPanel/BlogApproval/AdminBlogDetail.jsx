import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify'
import './AdminBlogDetail.scss'

const AdminBlogDetail = ({ setActiveTab }) => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data))
      .catch(err => console.error('Error fetching article:', err))
      .finally(() => setLoading(false))
  }, [id])

  const handleReturn = () => {
   
    if (setActiveTab) setActiveTab('blog-approval')
    navigate('/admin/blogs') 
  }

  if (loading) return <p>Loading...</p>
  if (!article) return <p>Article not found.</p>

  return (
    <div className="blog-detail">
      {article.cover_image && (
        <img src={article.cover_image} alt={article.title} className="detail-cover" />
      )}

      <h1>{article.title}</h1>

      <p className="author-name">
        Author: {article.user?.name || article.user?.username || 'Unknown'}
      </p>

      <div
        className="blog-body"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body_html) }}
      />

      <div className="return-button-wrapper">
        <button className="return-btn" onClick={handleReturn}>
          ← Return to Blog Approval
        </button>
      </div>
    </div>
  )
}

export default AdminBlogDetail

