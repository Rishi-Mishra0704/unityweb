import React, { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState({});

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/posts");
        setPosts(response.data); // Set the fetched posts in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const getLikes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/likes");
        // Create a dictionary to store likes by post ID
        const likesData = {};
        response.data.forEach((like) => {
          if (!likesData[like.post]) {
            likesData[like.post] = 0;
          }
          likesData[like.post]++;
        });
        setLikes(likesData); // Set the fetched likes in state
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    const getComments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/comments"
        );
        setComments(response.data); // Set the fetched comments in state
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    
    getPosts();
    getLikes();
    getComments();
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div className="mt-24 mx-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-semibold">{post.name}</h2>
          <p className="text-gray-600">{post.content}</p>
          <p className="text-blue-500">Likes: {likes[post.id] || 0}</p>
          {comments.filter((comment) => comment.post === post.id).length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-4">Comments</h3>
              {comments
                .filter((comment) => comment.post === post.id)
                .map((comment) => (
                  <div key={comment.id} className="border-t border-gray-300 pt-2 mt-2">
                    <h4 className="text-gray-700">{comment.name}</h4>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Homepage;
