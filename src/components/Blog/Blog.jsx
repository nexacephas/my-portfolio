import React from 'react';
import './Blog.css';
import blog1 from '../../assets/blog-1.jpg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';

const blogPosts = [
  {
    title: '10 Tips for Clean React Code',
    date: 'May 10, 2025',
    image: blog1,
    summary: 'Discover practical techniques to keep your React code clean, efficient, and easy to maintain.',
    link: '#',
  },
  {
    title: 'Why You Should Use Tailwind CSS in 2025',
    date: 'April 25, 2025',
    image: blog2,
    summary: 'Explore the modern features of Tailwind CSS and how it speeds up your development workflow.',
    link: '#',
  },
  {
    title: 'Understanding the MERN Stack',
    date: 'March 18, 2025',
    image: blog3,
    summary: 'A beginner-friendly guide to understanding the MERN stack and how it powers full-stack applications.',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.summary}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
