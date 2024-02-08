import styles from './postComment.module.css'
import {Post} from '../components/post/Post'
// import {postComment} from '../service/postComment'
export const PostComment = () => {
    return (
      <>
      <div className={styles.container}>
        <Post/>
      </div>
      </>
    );
};