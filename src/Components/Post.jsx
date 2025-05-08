import classes from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <li className={classes.post}>
      <span className={classes.author}>{author}</span>
      <span className={classes.text}>{body}</span>
    </li>
  );
};

export default Post;
