import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <ul>
      {posts.map((post) => (
       <li key={post.id}><strong>{post.title}</strong><p>{post.body}</p></li>
      ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav style={{display:'flex',gap:'20px'}} >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
