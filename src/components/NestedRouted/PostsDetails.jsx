import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostByPostId } from "../../API/api";
const PostsDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPostByPostId(postId);
      setPost(data);
    };
    getData();
  }, [postId]);
  if (!post) {
    return <h3>Loading your post...</h3>;
  }
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostsDetails;
