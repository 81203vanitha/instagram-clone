import React, { useEffect, useState } from 'react'

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-3"key={post.id}  >
              <div className="d-flex">
                <img className='dp rounded-circle' src={post.user.profile_pic} alt="pofile" />
                <h5>{post.user.username}</h5>
              </div>
              <img className="image" src={post.image} alt="post" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b> {post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>

            </div>
          ))}
        </div>
      ) : (
        <div>
          Loading post...
        </div>)}
    </div>
  )
}

export default Post


