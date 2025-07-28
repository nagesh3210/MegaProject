import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index.js";
import appWriteService from "../../appWrite/config.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((posts) => (
            <div key={posts.id} className="p-2 w-1/4">
              <PostCard {...posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
