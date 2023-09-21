import React, { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = useState([]); // Store posts in state
  const [comments, setComments] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/posts");
        setPosts(response.data); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const getComments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/comments"
        );
        setComments(response.data); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getPosts();
    getComments();
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div className="mt-24">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.content}</p>
        </div>
      ))}

      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
