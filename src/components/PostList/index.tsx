import Post from '../Post';
import styles from './styles.module.css'

interface PostData {
  profilePicturePath: string;
  name: string;
  role: string;
}

const posts: PostData[] = [
  { profilePicturePath: '/assets/op1.jpeg', name: 'Elizabeth Best', role: 'Designer' },
  { profilePicturePath: '/assets/op2.jpeg', name: 'Ron Ritchie', role: 'Dev Back-end' },
];

const PostList = () => {
  return (
    <div className={styles.postListContainer}>
      {posts.map((post, index) => (
        <Post 
          key={index}
          profilePicturePath={post.profilePicturePath}
          name={post.name}
          role={post.role}
        />
      ))}
    </div>
  );
};

export default PostList;
