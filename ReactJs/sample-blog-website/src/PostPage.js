import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <article className="postPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
      </article>
      {!post && (
        <>
          <h2>Post Not Found</h2>
          <p>
            <Link to="/">Please visit our home page</Link>
          </p>
        </>
      )}
    </article>
  );
};

export default PostPage;
