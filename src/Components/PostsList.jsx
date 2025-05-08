import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Ahmed Lemssiah" body="Reactjs is awesome!" />;
      <Post author="Muster Name" body="Reactjs is awesome!" />;
    </ul>
  );
};

export default PostsList;
